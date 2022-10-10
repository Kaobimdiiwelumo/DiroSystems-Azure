import { Controller, Get, Render } from '@nestjs/common';
import { doesNotReject } from 'assert';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }
  @Get()
    @Render('home.html')
    getHome(): {}{
      return this.appService.getHome();
  }
  @Get('about-donor')
    @Render('about-donor.html')
    getAboutDonor(): {}{
      return this.appService.getAboutDonor();
    }

;}
