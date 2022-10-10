import { Module } from '@nestjs/common';
import { donorModule } from './donors.module';

@Module({
  imports: [donorModule]
})
export class DonorDetailsModule {}
