class StoreService {
  getBooks() {
    return [
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
  }
}

export default new StoreService();
