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

@Controller('api/bill')
export class BillController {
  constructor(private readonly service: BillService) {}

  @Get()
  listAll(@Query() pagination: any): Array<string> {
    const { limit = 10, offset = 0 } = pagination;
    console.log(`Limit: ${limit}, Offset: ${offset}`);
    return this.service.listAll();
  }

  @Get(':id')
  listOne(@Param('id') id: string) {
    return this.service.listOne(id);
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
