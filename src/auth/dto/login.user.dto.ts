import { ApiProperty } from "@nestjs/swagger";
import { Role } from "src/auth/role.enum";

export class LoginUserDto {
    
    @ApiProperty()
    id: string;

    @ApiProperty()
    password: string;

}
