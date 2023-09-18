import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
} from '@nestjs/common';
import { User } from './users/users.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Request() req): Promise<any> {
    // TODO: return JWT access token
    return this.authService.login(req.user);
  }

  @Get('/profile')
  getProfile(@Request() req): any {
    // TODO: Require Bearer Token and Validate Token
    return req.user;
  }
}
