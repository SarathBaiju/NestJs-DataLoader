import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { Blog } from 'src/blog/entities/blog.entity';

@Injectable()
export class UserService {

    private blogs: Blog[] = [
        { id: 1, title: "blog1", userId: 1 },
        { id: 2, title: "blog2", userId: 2 },
        { id: 3, title: "blog3", userId: 2 },
        { id: 4, title: "blog4", userId: 3 },
    ]
    private users: User[] = [
        { id: 1, name: 'user1' },
        { id: 2, name: 'user2' },
        { id: 3, name: 'user3' },
    ]

    findAll() {
        return this.users;
    }

    blog(id: number) {
        console.log(`blog call id : ${id}`);
        return this.blogs.filter(s => s.userId == id);
    }
}
