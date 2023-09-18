import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    // A problem I encountered: if you use argument names other than 'username' and 'password' for local strategy, you must specify them as options in local.strategy in super({ usernameField: 'otherName1', passwordField: 'otherName2' }).
    // If you don't, it won't even throw any errors, you'll just keep getting a 401 Unauthorized error. This drove me insane. Hope this helps others avoid this mistake.
    super();
  }
  async validate(username: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(username, password);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
