import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Role } from "src/auth/role.enum";

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop({ required: true })
    name:string;

    @Prop({ required: true })
    email:string;

    @Prop({ required: true })
    password:string;

    @Prop({ required: true })
    roles:Role[];

    @Prop()
    createdAt:Date;

    @Prop()
    updatedAt:Date;

}

export const UserSchema = SchemaFactory.createForClass(User);