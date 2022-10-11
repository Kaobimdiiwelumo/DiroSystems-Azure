import { Module } from '@nestjs/common';
import { DonorsModule } from './donors/donors.module';

@Module({
  imports: [DonorsModule]
})
export class DonorDetailsModule {}
