import { Context, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import * as DataLoader from 'dataloader';
import { Blog } from 'src/blog/entities/blog.entity';
import { blogLoaderFunction } from './loader/user.loader';

@Resolver(() => User)
export class UserResolver {
    
    private blogLoader = new DataLoader<number, Blog>(async(ids: number[]) =>  this.userService.blogs(ids));
    constructor(private userService: UserService) { }

    @Query(() => [User], { name: 'users' })
    findAll() {
        return this.userService.findAll();
    }

    @ResolveField()
    async blogs(@Parent() user: User){
        console.log(await this.blogLoader.load(user.id));
        return await this.blogLoader.load(user.id);
    }   
}
