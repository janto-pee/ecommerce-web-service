import { Inject, Injectable } from '@nestjs/common';
import { CreateReviewInput } from './dto/create-review.input';
import { UpdateReviewInput } from './dto/update-review.input';
import { Review } from './entities/review.entity';

@Injectable()
export class ReviewsService {
  constructor(
    @Inject('REVIEWS_REPOSITORY')
    private ReviewsRepository: typeof Review,
  ) {}
  async create(createReviewInput: CreateReviewInput): Promise<Review> {
    return await this.ReviewsRepository.create({
      ...createReviewInput,
    });
  }

  async findAll(): Promise<Review[]> {
    return await this.ReviewsRepository.findAll<Review>();
  }

  async findOne(id: number): Promise<Review> {
    return await this.ReviewsRepository.findOne<Review>({
      where: { id: id },
    });
  }

  async findEmail(email: String): Promise<Review> {
    return await this.ReviewsRepository.findOne<Review>({
      where: { email: email },
    });
  }

  async update(id: number, data: UpdateReviewInput): Promise<Review> {
    const Review = await this.ReviewsRepository.findOne({
      where: { id: id },
    });
    if (!Review) {
      throw new Error('Review not found');
    }
    await Review.update({ ...data });
    await Review.save();
    return Review;
  }

  async remove(id: number): Promise<Review> {
    const reviews = await this.ReviewsRepository.findOne<Review>({
      where: { id: id },
    });
    await reviews.destroy();
    return reviews;
  }
}
