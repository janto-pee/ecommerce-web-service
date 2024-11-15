import { Inject, Injectable } from '@nestjs/common';
import { CreateCardInput } from './dto/create-card.input';
import { UpdateCardInput } from './dto/update-card.input';
import { Card } from './entities/card.entity';

@Injectable()
export class CardService {
  constructor(
    @Inject('CARDS_REPOSITORY')
    private CardsRepository: typeof Card,
  ) {}
  async create(createCardInput: CreateCardInput): Promise<Card> {
    return await this.CardsRepository.create({
      ...createCardInput,
    });
  }

  async findAll(): Promise<Card[]> {
    return await this.CardsRepository.findAll<Card>();
  }

  async findOne(id: number): Promise<Card> {
    return await this.CardsRepository.findOne<Card>({
      where: { id: id },
    });
  }

  async findEmail(email: String): Promise<Card> {
    return await this.CardsRepository.findOne<Card>({
      where: { email: email },
    });
  }

  async update(where: any, data: UpdateCardInput): Promise<Card> {
    const Card = await this.CardsRepository.findOne({
      where: { ...where },
    });
    await Card.update({ ...data });
    await Card.save();
    return Card;
  }

  async remove(id: number): Promise<Card> {
    return await this.CardsRepository.findOne<Card>({
      where: { id: id },
    });
  }
}
