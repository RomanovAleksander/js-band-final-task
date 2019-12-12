class StoreService {
  _url = 'https://js-band-api.glitch.me';

  async fetchData(url, option) {
    try {
      const res = await fetch(`${this._url}${url}`, option);
      if (!res.ok) {
        throw new Error('Invalid request');
      }
      return await res.json();
    } catch (err) {
      console.log('Error');
    }
  }

  async get(url, token) {
    return this.fetchData(url, {
      mode: 'cors',
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  post(url, body) {
    return this.fetchData(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
  }
}

export default new StoreService();
