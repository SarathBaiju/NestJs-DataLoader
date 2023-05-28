import { Query, Resolver } from '@nestjs/graphql';
import { Blog } from './entities/blog.entity';
import { BlogService } from './blog.service';

@Resolver(() => Blog)
export class BlogResolver {
    constructor(private blogService: BlogService) { }

    @Query(() => [Blog], { name: 'blogs' })
    findAll() {
        return this.blogService.findAll();
    }
}
