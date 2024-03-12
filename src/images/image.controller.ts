import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common'
import { PublicRoute } from '../infrastructure/decorators/public-route.decorator'
import { FileInterceptor } from '@nestjs/platform-express'
import { diskStorage } from 'multer'
import { BlogsService } from '../blogs/blogs.service'

@Controller('image')
export class ImageController {
  constructor(private readonly blogService: BlogsService) {}

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads/',
        filename: (req, file, cb) =>
          cb(null, `blog_${req.query.blogId}.${file.originalname.split('.').slice(-1)}`),
      }),
    }),
  )
  async uploadImage(@UploadedFile() file: Express.Multer.File, @Body('blogId') blogId) {
    const blog = await this.blogService.findOne(blogId)
    blog.imagePath = `blog_${blogId}.${file.originalname.split('.').slice(-1)}`
    await this.blogService.update(blogId, { ...blog })
    return blog
  }

  @Get(':imageName')
  getImage(@Param('imageName') imageName, @Res() res) {
    return res.sendFile(imageName, { root: './uploads' })
  }
}
