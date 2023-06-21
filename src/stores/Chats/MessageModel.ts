import {types} from 'mobx-state-tree';

export const MessageModel = types.model('MessageModel', {
  id: types.identifierNumber,
  chatId: types.number,
  ownerId: types.string,
  text: types.string,
  read: types.boolean,
  createdAt: types.number,
  updatedAt: types.number,
});
