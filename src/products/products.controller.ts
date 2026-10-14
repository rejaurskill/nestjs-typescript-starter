import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductsService } from './products.service.js';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @Get()
  getProducts() {
    const products = this.productsService.getProducts();

    return {
      success: true,
      data: products,
    };
  }
  @Post()
  createProduct(@Body() body: { name: string }) {
    const product = this.productsService.createProduct(body);

    return {
      success: true,
      data: product,
    };
  }
}
