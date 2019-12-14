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
      return err
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

  post(url, body, token) {
    const headers = {
      'Content-Type': 'application/json'
    };

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    return this.fetchData(url, {
      method: 'POST',
      mode: 'cors',
      headers,
      body: JSON.stringify(body)
    });
  }
}

export default new StoreService();
