import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return await createdUser.save();
  } 

  findAll():Promise<User[]> {
    return this.userModel.find().exec();
  }

  findOne(id: string): Promise<User> {
    try {
      return this.userModel.findById(id).exec();
    }catch (error) {
      console.log(error);
      return error
    }
  }
  update(id: string, updateUserDto: UpdateUserDto) {
    try {
      this.userModel.findByIdAndUpdate(id, updateUserDto).exec();
      return updateUserDto;
    } catch (error) {
      return error
    }
  }
  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
