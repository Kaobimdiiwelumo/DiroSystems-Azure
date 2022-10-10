import { Repository, AzureTableStorageResultList, AzureTableStorageResponse } from '@nestjs/azure-database';
import { donor } from './donor.entity';
export declare class donorService {
    private readonly catRepository;
    constructor(catRepository: Repository<donor>);
    find(rowKey: string, donor: donor): Promise<donor>;
    findAll(): Promise<AzureTableStorageResultList<donor>>;
    create(donor: donor): Promise<donor>;
    update(rowKey: string, donor: Partial<donor>): Promise<donor>;
    delete(rowKey: string, donor: donor): Promise<AzureTableStorageResponse>;
}
