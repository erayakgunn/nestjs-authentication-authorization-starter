import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';
import { RolesGuard } from './roles.guard';
import { JwtAuthGuard } from './jwt-auth.guard';

@Module({
  imports:[
    UsersModule,
    PassportModule,
    JwtModule.register({secret:jwtConstants.secret,
    signOptions:{expiresIn:'3h'}})],
  providers: [AuthService,LocalStrategy,JwtStrategy,JwtAuthGuard,RolesGuard],
  controllers: [AuthController],
  exports:[AuthService]
})
export class AuthModule {}
