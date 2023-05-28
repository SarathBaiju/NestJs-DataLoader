import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType('Blog')
export class Blog{
    @Field(() => Int)
    id: number;

    @Field(() => String)
    title: string;

    userId?: number;
}