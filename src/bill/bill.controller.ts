import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query
} from '@nestjs/common';
import { BillService } from './bill.service';
import { BillEntity } from './entities/bill.entity';

@Controller('api/bill')
export class BillController {
  constructor(private readonly service: BillService) {}

  @Get()
  async listAll(@Query() pagination: any): Promise<Array<BillEntity>> {
    const { limit = 10, offset = 0 } = pagination;
    console.log(`Limit: ${limit}, Offset: ${offset}`);
    return await this.service.findAll();
  }

  @Get(':id')
  async listOne(@Param('id') id: string) {
    return await this.service.findOne(id);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post()
  async create(@Body() body: BillEntity) {
    return await this.service.create(body);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() body: BillEntity) {
    await this.service.update(id, body);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  async setInactive(@Param('id') id: string) {
    await this.service.setInactive(id);
  }
}
