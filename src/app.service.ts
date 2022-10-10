import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getHome(): {} {
    return {title: 'Home Page'};
    }
    getAboutDonor(): {} {
    return {title: 'About Donor Page'};
    }
}
