import { Module } from '@nestjs/common';
import { SongsController } from './songs.controller';
import { SongsService } from './songs.service';
import { connection } from 'src/common/constants/connection';

const mockSongService = {
  findAll() {
    return [{ id: 1, title: 'Lasting Lover', artists: ['Martin', 'Sigla'] }];
  },
};

@Module({
  controllers: [SongsController],
  providers: [
    // One way to declare providers in this way
    SongsService,

    // Can declare providers in this way also
    // {
    //   provide: SongsService,
    //   useClass: SongsService,
    // },
    // {
    //   provide: SongsService,
    //   useValue: mockSongService,
    // },
    {
      provide: 'CONNECTION',
      useValue: connection,
    },
  ],
})
export class SongsModule {}
