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

  // getBooks() {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve(this.data);
  //       reject(new Error('Error'));
  //     }, 800)
  //   })
  // }

  getBooks = async () => {
    const res = await fetch('https://js-band-api.glitch.me/books', {
      method: 'GET',
      headers: {
        "Authorization": "Bearer ua3oiktgwrnrai4a0jtk"
      }
    });

    const data = await res.json();
    return data;
  };

  getBook = async (bookId) => {
    const res = await fetch(`https://js-band-api.glitch.me/books/${bookId}`, {
      method: 'GET',
      headers: {
        "Authorization": "Bearer ua3oiktgwrnrai4a0jtk"
      }
    });

    const data = await res.json();
    return data;
  };

  req = async () => {
    const res = await fetch('https://js-band-api.glitch.me/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ "username": "RandomUserX" })
    });

    const data = await res.json();
    console.log(data)
  };
}

export default new StoreService();
