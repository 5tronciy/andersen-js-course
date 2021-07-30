class Musician {
  constructor(albumsUrl) {
    this.albumsUrl = albumsUrl;
  }

  async getAlbums() {
    const res = await fetch(this.albumsUrl);
    const albums = await res.json();
    return albums;
  }
}
