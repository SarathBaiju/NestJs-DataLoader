import { Injectable } from '@nestjs/common';
import { Blog } from './entities/blog.entity';

@Injectable()
export class BlogService {
    private blogs: Blog[] = [
        {id: 1, title: "blog1"},
        {id: 2, title: "blog2"},
        {id: 3, title: "blog3"},
        {id: 4, title: "blog4"},
    ]

    findAll(){
        return this.blogs;
    }

}
