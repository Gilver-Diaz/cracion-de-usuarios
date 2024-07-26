import { Injectable } from '@nestjs/common';
import { twit } from './twit.entity';

@Injectable()
export class TwitsService {
  private twits: twit[] = [
    {
      id: '1',
      message: 'Hello world from Nest.js :D',
    },
  ];
  getTwit(): twit[] {
    return this.twits;
  }

  getTwits(id: string): twit {
    return this.twits.find((item) => item.id === id);
  }

  createTwit(message: string) {
    this.twits.push({
      id: (Math.floor(Math.random() * 2000) + 1).toString(),
      message,
    });
  }

  updateTwit(id: string, message: any) {
    const twit: twit = this.getTwits(id);
    twit.message = message;
    return twit;
  }

  removeTwit(id: string) {
    const index = this.twits.findIndex((twhit) => twhit.id === id);
    this.twits.splice(index, 1);
  }
}
