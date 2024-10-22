import {
  Table,
  Column,
  Model,
  PrimaryKey,
  CreatedAt,
  UpdatedAt,
  BeforeCreate,
  BeforeUpdate,
  Default,
} from 'sequelize-typescript';

@Table
export class Session extends Model {
  @PrimaryKey
  @Column
  id: string;

  @Column
  userId: string;

  @Column
  userAgent: string;

  @Column
  @Default(true)
  valid: boolean;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;
}