import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop()
  name: string;

  @Prop()
  type: number | null;

  @Prop()
  artist_owner: number | null;

  @Prop()
  price: string;

  @Prop()
  local: string;

  @Prop()
  description: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);