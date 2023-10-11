export class MemsApi {
    constructor() {
        this.baseURL = 'https://api.imgflip.com/get_memes';
    }

    getMems() {
        return fetch('https://api.imgflip.com/get_memes').
            then(data => data.json());
    }
}