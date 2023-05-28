import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';

@Resolver(() => User)
export class UserResolver {
    
    constructor(private userService: UserService) { }

    @Query(() => [User], { name: 'users' })
    findAll() {
        return this.userService.findAll();
    }

    @ResolveField()
    blogs(@Parent() user: User){
        return this.userService.blog(user.id);
    }   
}
