import { ApiProperty } from "@nestjs/swagger";
import { Role } from "src/auth/role.enum";

export class CreateUserDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    password: string;

    @ApiProperty()
    roles: Role[];

}
