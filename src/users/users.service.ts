import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getUsers() {
    return [
      {
        id: 1,
        name: 'Rejaur',
      },
      {
        id: 2,
        name: 'Rahim',
      },
    ];
  }
}
