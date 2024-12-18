import { Inject, Injectable } from '@nestjs/common';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @Inject('PRODUCTS_REPOSITORY')
    private ProductsRepository: typeof Product,
  ) {}
  async create(createProductInput: CreateProductInput): Promise<Product> {
    return await this.ProductsRepository.create({
      ...createProductInput,
    });
  }

  async findAll(): Promise<Product[]> {
    return await this.ProductsRepository.findAll<Product>();
  }

  async findOne(id: number): Promise<Product> {
    return await this.ProductsRepository.findOne<Product>({
      where: { id: id },
    });
  }

  async findEmail(email: String): Promise<Product> {
    return await this.ProductsRepository.findOne<Product>({
      where: { email: email },
    });
  }

  async update(id: number, data: UpdateProductInput): Promise<Product> {
    const Product = await this.ProductsRepository.findOne({
      where: { id: id },
    });
    if (!Product) {
      throw new Error('Product not found');
    }
    await Product.update({ ...data });
    await Product.save();
    return Product;
  }

  async remove(id: number): Promise<Product> {
    const product = await this.ProductsRepository.findOne<Product>({
      where: { id: id },
    });
    await product.destroy();
    return product;
  }
}
