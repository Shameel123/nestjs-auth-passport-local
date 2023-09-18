import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    //Validation us done here already
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('Bearer'),
      secretOrKey: 'SECRET',
      ignoreExpiration: false,
    });
  }

  async validate(payload) {
    //validation is done above in constructor already so we need to just return the object.
    // we can choose to add or remove the properties here though..
    return {
      id: payload.id,
      username: payload.username,
      password: payload.password,
    };
  }
}
