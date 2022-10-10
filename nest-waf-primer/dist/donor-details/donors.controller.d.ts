import { donorDTO } from './donor.dto';
import { donor } from './donor.entity';
import { donorService } from './donors.service';
export declare class donorController {
    private readonly donorService;
    constructor(donorService: donorService);
    getAlldonors(): Promise<import("@nestjs/azure-database").AzureTableStorageResultList<donor>>;
    getCat(rowKey: any): Promise<donor>;
    createdonor(donorData: donorDTO): Promise<donor>;
    saveCat(rowKey: any, donorData: donorDTO): Promise<donor>;
    updateCatDetails(rowKey: any, donorData: Partial<donorDTO>): Promise<donor>;
    deleteDelete(rowKey: any): Promise<any>;
}
