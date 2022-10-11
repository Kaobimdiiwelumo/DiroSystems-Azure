export class CreateDonorDto {  
    readonly firstName: string;
    readonly lastName: string;
    readonly email: string;
    readonly dateOfBirth?: Date;
    readonly nationality?: string
    readonly address?: string
    readonly isActive?: boolean;
    }

  