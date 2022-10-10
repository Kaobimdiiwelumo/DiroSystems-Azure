import { Injectable } from '@nestjs/common';
import { Repository, InjectRepository, AzureTableStorageResultList, AzureTableStorageResponse } from '@nestjs/azure-database';
import { donor } from './donor.entity';

@Injectable()
export class donorService {
  constructor(
    @InjectRepository(donor)
    private readonly catRepository: Repository<donor>,
  ) {}

  // find one cat entitu by its rowKey
  async find(rowKey: string, donor: donor): Promise<donor> {
    return this.catRepository.find(rowKey, donor);
  }

  // find all cat entities
  async findAll(): Promise<AzureTableStorageResultList<donor>> {
    return this.catRepository.findAll();
  }

  // create a new cat entity
  async create(donor: donor): Promise<donor> {
    return this.catRepository.create(donor);
  }

  // update the a cat entity by its rowKey
  async update(rowKey: string, donor: Partial<donor>): Promise<donor> {
    return this.catRepository.update(rowKey, donor);
  }

  // delete a cat entity by its rowKey
  async delete(rowKey: string, donor: donor): Promise<AzureTableStorageResponse> {
    return this.catRepository.delete(rowKey, donor);
  }
}
