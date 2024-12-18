import { Inject, Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';
import { comparePassword } from 'src/utils/hashpassword';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private usersRepository: typeof User,
  ) {}
  async create(createUserInput: CreateUserInput): Promise<User> {
    return await this.usersRepository.create({
      ...createUserInput,
    });
  }

  async findUsers(): Promise<User[]> {
    return await this.usersRepository.findAll<User>();
  }

  async findUser(id: number): Promise<User> {
    return await this.usersRepository.findOne<User>({ where: { id: id } });
  }

  async findEmail(email: String): Promise<User> {
    return await this.usersRepository.findOne<User>({
      where: { email: email },
    });
  }

  async updateUser(params: {
    where: any;
    data: UpdateUserInput;
  }): Promise<User> {
    const { where, data } = params;
    const user = await this.usersRepository.findOne({
      where: { ...where },
    });
    if (!user) {
      throw new Error('user not found');
    }
    await user.update({ ...data });
    await user.save();
    return user;
  }

  async validateUser(email: string, password: string): Promise<User> {
    const user = await this.usersRepository.findOne<User>({
      where: { email: email },
    });

    if (!user || user.password === null) {
      if (!user) {
        throw new Error('user not found');
      }
    }

    const match = await comparePassword(password, user.password);

    if (match) {
      return user;
    }

    return;
  }
}
