import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  getProducts() {
    return [
      {
        id: 1,
        name: 'Laptop',
      },
      {
        id: 2,
        name: 'Phone',
      },
    ];
  }
  createProduct(body: { name: string }) {
    return {
      id: 3,
      name: body.name,
    };
  }
}
