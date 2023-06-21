import AsyncStorage from '@react-native-async-storage/async-storage';
import {CHATS, createNewProduct, MESSAGES, TEST_PRODUCTS} from './data';

// axios.defaults.baseURL = ''

export const Auth = {
  _token: null,

  setToken(token) {
    this._token = token;
    AsyncStorage.setItem('__token', token);
  },

  isLoggedIn() {
    return !!this._token;
  },

  login({email, password}) {
    // return axios.post('/api/auth/login', {
    //   email,
    //   password,
    // });
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          data: {
            token: 'fksdnfkndlf',
            user: {
              email,
              fullName: 'Test User',
              id: '10',
              location: 'fdsf',
              avatar:
                'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
              phone: 'sdfdfdfdsf',
              createdAt: 'dfsf',
              updatedAt: 'gksfngkf',
            },
          },
        });
      }, 300);
    });
  },
  // register({ email, password, fullName }) {
  //   return axios.post('/api/auth/register', {
  //     email,
  //     password,
  //     fullName,
  //   });
  // },
};

export const Products = {
  createProduct(body) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(createNewProduct(body));
      }, 300);
    });
  },
  update(body) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          data: {saved: !body.seved, ...body},
        });
      }, 300);
    });
  },
  fetchLatest() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({data: TEST_PRODUCTS});
      }, 300);
    });
    // return axios.get("api/products/latest");
  },
  fetchMore({from, limit}) {
    // return axios.get(`/products/latest?from=${from}&limit=${limit}`);
  },
  fetchSaved() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({data: TEST_PRODUCTS.slice(1, 3)});
      }, 300);
    });
  },
  getById(id) {
    // return axios.get(`api/products/${id}`);
    return {
      data: {
        id,
        ownerId: '10',
        title: body.title,
        description: body.description,
        photos: null,
        location: body.location,
        price: body.price,
        saved: false,
        createdAt: `${Date.now()}`,
        updatedAt: `${Date.now()}`,
        owner: {
          email: 'testuser@gamil.com',
          fullName: 'Test User',
          id: '10',
          location: 'fdsf',
          avatar: 'dffdsffdsf',
          phone: 'sdfdfdfdsf',
          createdAt: 'dfsf',
          updatedAt: 'gksfngkf',
        },
      },
    };
  },
  byUserId(id) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({data: {list: TEST_PRODUCTS}});
      }, 300);
    });
    // return axios.get(`api/users/${id}/products`);
  },
};

export const Users = {
  getById(id) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          data: {
            email: 'testuser@gamil.com',
            fullName: 'Test User',
            id: '10',
            location: 'fdsf',
            avatar: 'dffdsffdsf',
            phone: 'sdfdfdfdsf',
            createdAt: 'dfsf',
            updatedAt: 'gksfngkf',
          },
        });
      }, 300);
    });
    // return axios.get(`/api/users/${id}`);
  },
};

export const Chats = {
  createChat(id, message) {
    // return axios.post(`/api/products/${id}/createChat`, {
    //   message,
    // });
  },
  getList() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({data: CHATS});
      }, 300);
    });
    // return axios.get("/chats");
  },
  getMessages(id) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({data: MESSAGES});
      }, 300);
    });
    // return axios.get(`/api/chats/${id}/messages`);
    return;
  },
  sendMessage(id, message) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          data: {
            id: +(Math.random() * 10000).toFixed(0),
            chatId: id,
            ownerId: '10',
            text: message,
            read: false,
            createdAt: 11,
            updatedAt: 11,
          },
        });
      }, 300);
    });
    // return axios.post(`/api/chats/${id}/messages`, {
    //   message,
    // });
  },
};
