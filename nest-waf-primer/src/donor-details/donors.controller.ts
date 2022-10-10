import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UnprocessableEntityException,
  NotFoundException,
  Patch
} from '@nestjs/common';
import { donorDTO } from './donor.dto';
import { donor } from './donor.entity';
import { donorService } from './donors.service';

@Controller('donors')
export class donorController {
  constructor(private readonly donorService: donorService) {}

  @Get()
  async getAlldonors() {
    return await this.donorService.findAll();
  }

  @Get(':rowKey')
  async getCat(@Param('rowKey') rowKey) {
    try {
      return await this.donorService.find(rowKey, new donor());
    } catch (error) {
      // Entity not found
      throw new NotFoundException(error);
    }
  }

  @Post()
  async createdonor(
    @Body()
    donorData: donorDTO,
  ) {
    try {
      const donors = new donor();
      // Disclaimer: Assign only the properties you are expecting!
      Object.assign(donor, donorData);

      return await this.donorService.create(donors);
    } catch (error) {
      throw new UnprocessableEntityException(error);
    }
  }

  @Put(':rowKey')
  async saveCat(@Param('rowKey') rowKey, @Body() donorData: donorDTO) {
    try {
      const donors = new donor();
      // Disclaimer: Assign only the properties you are expecting!
      Object.assign(donors, donorData);

      return await this.donorService.update(rowKey, donors);
    } catch (error) {
      throw new UnprocessableEntityException(error);
    }
  }

  @Patch(':rowKey')
  async updateCatDetails(@Param('rowKey') rowKey, @Body() donorData: Partial<donorDTO>) {
    try {
      const donors = new donor();
      // Disclaimer: Assign only the properties you are expecting!
      Object.assign(donors, donorData);

      return await this.donorService.update(rowKey, donors);
    } catch (error) {
      throw new UnprocessableEntityException(error);
    }
  }

  @Delete(':rowKey')
  async deleteDelete(@Param('rowKey') rowKey) {
    try {
      const response = await this.donorService.delete(rowKey, new donor());

      if (response.statusCode === 204) {
        return null;
      } else {
        throw new UnprocessableEntityException(response);
      }
    } catch (error) {
      throw new UnprocessableEntityException(error);
    }
  }
}

