import {Instance, types} from 'mobx-state-tree';

export interface IMessageModule extends Instance<typeof MessageModel> {}

export const MessageModel = types.model('MessageModel', {
  id: types.identifierNumber,
  chatId: types.number,
  ownerId: types.string,
  text: types.string,
  read: types.boolean,
  createdAt: types.number,
  updatedAt: types.number,
});
