import {schema} from 'normalizr';

export const User = new schema.Entity('users');
export const Product = new schema.Entity('products', {
  owner: User,
});
export const ProductCollection = [Product];
export const LatestProductCollection = [Product];
export const OwnProducts = [Product];
export const MessageSchema = new schema.Entity('messages');
export const ChatSchema = new schema.Entity('chats', {
  message: MessageSchema,
  product: Product,
  participants: [User],
});
export const ChatCollectionSchema = [ChatSchema];
export const MessageCollectionSchema = [MessageSchema];
