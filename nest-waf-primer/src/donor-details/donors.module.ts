import { Module } from '@nestjs/common';
import { AzureTableStorageModule } from '@nestjs/azure-database';
import { donorController } from './donors.controller';
import { donorService } from './donors.service';
import { donor } from './donor.entity';

@Module({
  imports: [AzureTableStorageModule.forFeature(donor)],
  providers: [donorService],
  controllers: [donorController],
})
export class donorModule {}
