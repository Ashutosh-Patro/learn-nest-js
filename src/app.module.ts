import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsModule } from './songs/songs.module';
import { LoggerMiddleware } from './common/middleware/logger/logger.middleware';
import { SongsController } from './songs/songs.controller';
import { DevConfigService } from './common/providers/DevConfigService';

const devConfig = { port: 3000 };
const proConfig = { port: 4000 };

@Module({
  imports: [SongsModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: DevConfigService,
      useClass: DevConfigService,
    },
    {
      provide: 'CONFIG',
      useFactory: () => {
        return process.env.NODE_ENV === 'development' ? devConfig : proConfig;
      },
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // Method 1 to use LoggerMiddleware for all request types
    // consumer.apply(LoggerMiddleware).forRoutes('songs');

    // Method 2 to use LoggerMiddleware
    // consumer
    //   .apply(LoggerMiddleware)
    //   .forRoutes({ path: 'songs', method: RequestMethod.POST }); // This just states that the logger middleware will only work when a POST request is called.

    // Method 3 to use LoggerMiddleware for all request types
    consumer.apply(LoggerMiddleware).forRoutes(SongsController);
  }
}
