import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { CreateDashboardDto } from './dto/create-dashboard.dto';
import { UpdateDashboardDto } from './dto/update-dashboard.dto';

@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  // @Post()
  // create(@Body() createDashboardDto: CreateDashboardDto) {
  //   return this.dashboardService.create(createDashboardDto);
  // }

  // @Get()
  // findAll() {
  //   return this.dashboardService.findAll();
  // }

  @Get('/rekap-per-kategori')
  rekapPerKategori() {
    return this.dashboardService.rekapPerKategori();
  }

  @Get('/rekap-per-okupansi')
  rekapPerOkupansi() {
    return this.dashboardService.rekapPerOkupansi();
  }

  @Get('/rekap-per-perusahaan')
  rekapPerPerusahaan() {
    return this.dashboardService.rekapPerPerusahaan();
  }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateDashboardDto: UpdateDashboardDto,
  // ) {
  //   return this.dashboardService.update(+id, updateDashboardDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.dashboardService.remove(+id);
  // }
}
