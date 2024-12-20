import { Module } from '@nestjs/common';
import { PlaylistsService } from './playlists.service';
import { PlaylistsController } from './playlists.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [PlaylistsController],
  providers: [PlaylistsService, PrismaService],
})
export class PlaylistsModule {}
