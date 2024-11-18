import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
  // local db
  // local array

  private readonly songs = []; // This is the local db array which stores the created songs

  create(song) {
    // Save the song in the database
    this.songs.push(song);
    return `created a song successfully`;
  }

  findAll() {
    // fetch the songs from the database
    // Errors come while fetching the data from the database
    // throw new Error('Error in database while fetching record');
    return this.songs;
  }
}
