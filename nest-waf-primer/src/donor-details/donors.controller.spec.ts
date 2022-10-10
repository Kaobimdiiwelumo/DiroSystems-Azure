import { Test, TestingModule } from '@nestjs/testing';
import { donorController } from './donors.controller';
import { donorService } from './donors.service';

describe('DonorsController', () => {
  let controller: donorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [donorController],
      providers: [donorService],
    }).compile();

    controller = module.get<donorController>(donorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
