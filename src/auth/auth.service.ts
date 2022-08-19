import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ObjectId } from 'mongoose';
import { UsersService } from 'src/users/users.service';
import { comparePassword } from 'src/utils/bcrypt';

@Injectable()
export class AuthService {
    constructor (
        private usersService: UsersService,
        private jwtService:JwtService) {}

    async validateUser(id:string, password:string): Promise<any> {
        const user = await this.usersService.findOne(id);
        if (user) {
            const matched = comparePassword(password, user.password);
            if (matched) {
                const { password, ...result } = user;
                return result;
            }
        }
        
        return null;
    }

    async login(user:any){
        const payload = { id: user._id, email: user.email, name: user.name,roles:user.roles };
        try {
            return {
                access_token: this.jwtService.sign(payload),
            };
        } catch (error) {
            throw new UnauthorizedException();
        }
    }
}
