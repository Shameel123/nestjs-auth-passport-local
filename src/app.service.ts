import { Injectable } from '@nestjs/common';
// import { JwtService } from '@nestjs/jwt';
import { User } from './users/users.service';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async login(user: User): Promise<any> {
    const payload = {
      id: user.id,
      username: user.username,
      password: user.password,
    };
    return {
      // access_token: this.jwtService.sign(payload),
      ...payload,
    };
  }
}
