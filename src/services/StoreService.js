class StoreService {

  data = [
    { id: 0,
      title: 'Success',
      author: 'Romanov',
      price: '50$',
      cover: ''
    },
    { id: 1,
      title: 'The Rock',
      author: 'Rock',
      price: '70$',
      cover: ''
    }
  ];

  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.data);
        reject(new Error('Error'));
      }, 800)
    })
  }
}

export default new StoreService();
