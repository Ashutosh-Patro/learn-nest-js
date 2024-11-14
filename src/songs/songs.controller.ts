import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('songs')
export class SongsController {
  @Post()
  create() {
    return 'Create a new song';
  }

  @Get()
  findAll() {
    return 'Find all songs';
  }

  @Get(':id')
  findOne() {
    return 'Fetch song based on ID';
  }

  @Put(':id')
  update() {
    return 'Update song based on ID';
  }

  @Delete(':id')
  delete() {
    return 'Delete song based on ID';
  }
}
