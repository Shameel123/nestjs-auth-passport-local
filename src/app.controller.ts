import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './users/users.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthenticatedGuard } from './auth/authenticated.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Request() req, @Body() user: User): Promise<any> {
    return this.appService.login(user);
  }

  // This checks for session authentication.
  // @UseGuards(AuthenticatedGuard)
  // @Get('/profile')
  // getProfile(@Request() req): any {
  //   return req.user;
  // }
}
