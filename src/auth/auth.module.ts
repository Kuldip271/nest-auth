import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport/dist';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { JwtStretegy } from './jwt.stretegy';
import { LocalStrategy } from './local.strategy';
import { SessionSerializer } from './session.serializer';

@Module({
    // imports :[UsersModule,PassportModule.register({ session : true})],
    imports :[UsersModule,PassportModule,JwtModule.register({
        secret: 'SECRET',  // put env variables
        signOptions : { expiresIn : '6000s'},
    })],
    providers: [AuthService,LocalStrategy,JwtStretegy],
    exports : [AuthService]
})
export class AuthModule {}
