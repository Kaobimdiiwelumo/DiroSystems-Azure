import {
    EntityPartitionKey,
    EntityRowKey,
    EntityString,
    EntityInt32
  } from '@nestjs/azure-database';
  
  @EntityPartitionKey('DonorID')
  @EntityRowKey('DonorName')
  export class donor {
    @EntityString() name: string;
    @EntityInt32() age: number;
  }
  
