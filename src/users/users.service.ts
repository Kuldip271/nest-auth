import { Injectable } from '@nestjs/common';

export type User = {
    id:number;
    name : string;
    username : string;
    password : string;
}

@Injectable()
export class UsersService {
    private readonly users: User[]= [
        {
            id : 1,
            name:'kuldip',
            username:'kuldip123',
            password: '123456'
        }, {
            id : 2,
            name:'yash',
            username:'yash123',
            password: '123456'
        }, {
            id : 3,
            name:'raj',
            username:'rajp123',
            password: '123456'
        }
    ];

    async findOne(username : string) : Promise<User | undefined>{
       return this.users.find(user => user.username === username);
    }
}
