import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DonorDetailsModule } from './donor-details/donor-details.module';

@Module({
  imports: [TypeOrmModule.forRoot({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "morrisplains2003",
  database: "nestwafprimer",
  entities: [
  "dist/**/*.entity{.ts,.js}"
  ],
  synchronize: true
  }), DonorDetailsModule],
  controllers: [AppController],
  providers: [AppService],
  })
  export class AppModule {}