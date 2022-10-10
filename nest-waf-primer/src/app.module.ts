import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DonorDetailsModule } from './donor-details/donor-details.module';
import { donorModule } from './donor-details/donors.module';
import { TypeOrmModule } from '@nestjs/typeorm';

  imports: [TypeOrmModule.forRoot({
  type: "postgres",
  host: "localhost",
  port: 1433,
  username: "kaobimdi",
  password: "Morrisplains2003",
  database: "kaobi-diro",
  entities: ["dist/**/*.entity{.ts,.js}"],
  synchronize: true
  }), DonorDetailsModule,
  controllers: [AppController],
  providers: [AppService],
]
  export class AppModule {}