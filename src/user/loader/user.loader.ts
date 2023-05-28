import DataLoader from "dataloader";
import { UserService } from "../user.service";
import { Blog } from "src/blog/entities/blog.entity";

export function blogLoaderFunction(userService: UserService){
    return new DataLoader<number, Blog>(async(ids: number[]) => {
        return userService.blogs(ids);
    })
}