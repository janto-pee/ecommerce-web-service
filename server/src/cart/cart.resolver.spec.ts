import { Test, TestingModule } from '@nestjs/testing';
import { CartResolver } from './cart.resolver';
import { CartService } from './cart.service';
import { cartProviders } from './cart.provider';

describe('CartResolver', () => {
  let resolver: CartResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CartResolver, CartService, ...cartProviders],
    }).compile();

    resolver = module.get<CartResolver>(CartResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
