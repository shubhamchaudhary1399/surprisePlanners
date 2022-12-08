import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { User } from '../entities/user.entity';
import * as bcrypt from 'bcrypt';

@EntityRepository(User)
export class UsersRepository extends Repository<User> {
  async createUser(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    const { fullName, mobileNumber, email, password } = authCredentialsDto;

    const salt = await bcrypt.genSalt();
    console.log(mobileNumber, salt);
    const hashedPassword = await bcrypt.hash(password, salt);

    try{
      const user = this.create({ fullName, mobileNumber, email, password: hashedPassword });
      await this.save(user);
    }
    catch(error){
      console.log(error.code);
      if (error.code === '23505' && error.detail.includes('mobilenumber')) {
        throw new ConflictException('Mobile Number already exists');
      }
      else if (error.code === '23505' && error.detail.includes('email')) {
        throw new ConflictException('Email already exists');
      }
      else {
        throw new InternalServerErrorException();
      }
    }
    
  }
}