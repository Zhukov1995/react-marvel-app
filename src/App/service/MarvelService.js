

class MarvelService {
    _apiKey = 'apikey=e313b02635106a6e721dbe503eb8ff33';
    _apiBase = 'https://gateway.marvel.com:443/v1/public/';

    getResourse = async (url) => {

        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url},status: ${res.status}`);
        }

        return await res.json();
    }

    getAllCharacters = async () => {
        const res = await this.getResourse(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`);
        return res.data.results.map(this.transformResult);
    }

    getMoreCharacters = async (offset) => {
        const res = await this.getResourse(`${this._apiBase}characters?limit=9&offset=${offset}&${this._apiKey}`);
        return res.data.results.map(this.transformResult);
    }

    getCharacterById = async (id) => {
        const res = await this.getResourse(`${this._apiBase}characters/${id}?${this._apiKey}`);
        return this.transformResult(res.data.results[0]);
    }

    getComics = async (offset = 600) => {
        const res = await this.getResourse(`${this._apiBase}comics?limit=8&offset=${offset}&${this._apiKey}`)
        return res.data.results.map(this.tranformComics)
    }

    getComicsById = async (id) => {
        const res = await this.getResourse(`${this._apiBase}comics/${id}?${this._apiKey}`)
        return this.tranformComics(res.data.results[0])
    }

    transformResult = (char) => {
        const message = 'Sorry, this character has no description. You can read detailed information about him by clicking on the button...';
        return {
            name: char.name,
            description: this.changeString(char.description) || message,
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            id: char.id,
            comics: char.comics.items
        }
    }

    tranformComics = (comicsItem) => {
        const message = 'Sorry, this character has no description. You can read detailed information about him by clicking on the button...';
        return {
            title: comicsItem.title,
            pageCount: comicsItem.pageCount,
            price: '$ ' + comicsItem.prices[0].price,
            description: comicsItem.description || message,
            thumbnail: comicsItem.thumbnail.path + '.' + comicsItem.thumbnail.extension,
            id: comicsItem.id
        }
    }

    changeString = (string) => {
        if (string.length > 200) {
            return string.slice(0, 200) + '...';
        }
    }
}

export default MarvelService;