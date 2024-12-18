import { get, set } from 'lodash';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { AddressModule } from './address/address.module';
import { AttributesModule } from './attributes/attributes.module';
import { BrandsModule } from './brands/brands.module';
import { CustomerModule } from './customer/customer.module';
import { ImagesModule } from './images/images.module';
import { OrdersModule } from './orders/orders.module';
import { PaymentModule } from './payment/payment.module';
import { ProductModule } from './product/product.module';
import { ReviewsModule } from './reviews/reviews.module';
import { SessionModule } from './session/session.module';
import { ShippingModule } from './shipping/shipping.module';
import { ShopsModule } from './shops/shops.module';
import { StaffModule } from './staff/staff.module';
import { TagsModule } from './tags/tags.module';
import { VariantsModule } from './variants/variants.module';
import { UsersModule } from './users/users.module';
import { CategoryModule } from './category/category.module';
import { ConfigModule } from '@nestjs/config';
import { verifyJwt } from './utils/jwt';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
      sortSchema: true,
      context: ({ req, res }) => {
        // Get the cookie from request
        const token = get(req, 'cookies.token');
        // console.log('cookies ....', res, get(req, 'cookies.token'));

        // console.log({ token });
        // Verify the cookie

        const user = token
          ? verifyJwt<{ user: string }>(
              get(req, 'cookies.token'),
              'accessTokenPublic',
            )
          : null;

        // console.log('user ............', user, 'token................', token);

        // Attach the user object to the request object
        if (user) {
          set(req, 'user', user);
        }

        return { req, res };
      },
    }),
    AddressModule,
    AttributesModule,
    BrandsModule,
    CustomerModule,
    ImagesModule,
    OrdersModule,
    PaymentModule,
    ProductModule,
    ReviewsModule,
    SessionModule,
    ShippingModule,
    ShopsModule,
    StaffModule,
    UsersModule,
    TagsModule,
    VariantsModule,
    CategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
