import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { TwitsService } from './twits.service';
import { twit } from './twit.entity';

@Controller('twits')
export class TwitsController {
  constructor(private readonly twitsService: TwitsService) {}

  @Get()
  getTwist(@Query() FilterQuery): twit[] {
    const { searchTerm, orderBy } = FilterQuery; // de momento no funciona .. no me da error tampoco !
    return this.twitsService.getTwit();
  }
  @Get(':id') // este viene siendo twits/1
  getTwit(@Param('id') id: string) {
    return this.twitsService.getTwit();
  }

  @Post()
  createTwits(@Body('message') message: string): void {
    return this.twitsService.createTwit(message);
  }

  @Patch(':id')
  updateTwits(@Param('id') id: string, @Body('message') twits): twit {
    return this.twitsService.updateTwit(id, twit);
  }

  @Delete(':id')
  removeTwits(@Param('id') id: string): void {
    return this.twitsService.removeTwit(id);
  }
}
