import { PassportSerializer } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  serializeUser(user: any, done: CallableFunction) {
    done(null, user);
  }
  deserializeUser(payload: any, done: CallableFunction) {
    done(null, payload);
  }
}
