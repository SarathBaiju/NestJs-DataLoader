import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { BlogModule } from './blog/blog.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { blogLoaderFunction } from './user/loader/user.loader';
import { UserService } from './user/user.service';


@Module({
  imports: [
    UserModule, 
    BlogModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,
      context: () => ({
        blogLoader: blogLoaderFunction
      }),
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
