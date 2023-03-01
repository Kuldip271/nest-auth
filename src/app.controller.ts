import { Controller, Get,Post, UseGuards,Request, Body } from '@nestjs/common';

import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { AuthenticatedGuard } from './auth/authenticated.guard';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
   @Post('login')
   login(@Request() req) : any{
    
    return this.authService.login(req.user);   // todo : return JWT access token
   }

    //  @UseGuards(AuthenticatedGuard)
    @UseGuards(JwtAuthGuard)
  @Get('protected')
  getHello(@Request() req): string {   //todo : require an bearer token, validate token
    return req.user
  }
}
