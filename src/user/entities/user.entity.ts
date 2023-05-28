import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Blog } from "src/blog/entities/blog.entity";

@ObjectType('User')
export class User {
    @Field(() => Int)
    id: number;

    @Field(() => String)
    name: string;

    @Field(() => [Blog], { nullable: true })
    blogs?: Blog[];
}