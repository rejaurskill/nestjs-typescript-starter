import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ProductsService } from './products.service.js';
import { CreateProductDto } from './dto/create-product.dto.js';
import { UpdateProductDto } from './dto/update-product.dto.js';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @Get()
  getProducts() {
    return {
      success: true,
      data: this.productsService.getProducts(),
    };
  }

  @Get(':id')
  getProduct(@Param('id') id: string) {
    const product = this.productsService.getProduct(Number(id));

    return {
      success: true,
      data: product,
    };
  }

  @Post()
  createProduct(@Body() body: CreateProductDto) {
    const product = this.productsService.createProduct(body);

    return {
      success: true,
      data: product,
    };
  }

  @Patch(':id')
  updateProduct(@Param('id') id: string, @Body() body: UpdateProductDto) {
    return {
      success: true,
      data: this.productsService.updateProduct(Number(id), body),
    };
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    return {
      success: true,
      data: this.productsService.deleteProduct(Number(id)),
    };
  }
}
