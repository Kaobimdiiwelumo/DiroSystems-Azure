import { Test, TestingModule } from '@nestjs/testing';
import { donorService } from './donors.service';

describe('DonorService', () => {
  let service: donorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [donorService],
    }).compile();

    service = module.get<donorService>(donorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
