import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto.js';
import { UpdateProductDto } from './dto/update-product.dto.js';

@Injectable()
export class ProductsService {
  private products = [
    {
      id: 1,
      name: 'Laptop',
    },
    {
      id: 2,
      name: 'Phone',
    },
  ];

  getProducts() {
    return this.products;
  }

  getProduct(id: number) {
    return this.products.find((product) => product.id === id);
  }

  createProduct(body: CreateProductDto) {
    const newProduct = {
      id: this.products.length + 1,
      name: body.name,
    };

    this.products.push(newProduct);

    return newProduct;
  }

  updateProduct(id: number, body: UpdateProductDto) {
    const product = this.products.find((product) => product.id === id);

    if (!product) {
      return {
        message: 'Product not found',
      };
    }

    product.name = body.name;

    return product;
  }

  deleteProduct(id: number) {
    const index = this.products.findIndex((product) => product.id === id);

    if (index === -1) {
      return {
        message: 'Product not found',
      };
    }

    const deletedProduct = this.products.splice(index, 1);

    return deletedProduct[0];
  }
}
