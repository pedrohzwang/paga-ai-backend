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
    return await this.service.listAll();
  }

  @Get(':id')
  async listOne(@Param('id') id: string) {
    return await this.service.listOne(id);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post()
  create(@Body() body: any) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return {
      id,
      ...body
    };
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  delete(@Param('id') id: string) {
    this.service.delete(id);
    return;
  }
}
