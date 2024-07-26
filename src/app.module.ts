import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TwitsController } from './twits/twits.controller';
import { TwitsService } from './twits/twits.service';

@Module({
  imports: [],
  controllers: [AppController, TwitsController],
  providers: [AppService, TwitsService],
})
export class AppModule {}
