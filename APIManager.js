//This is the class that will manage all your APIs
class APIManager {
    constructor() {
        this.data = {}
    }

    callApis(){
        const rand = Math.floor(Math.random() * 894);
        $.get("https://randomuser.me/api/?results=6&inc=name",(friendsData) => this.data.friends = friendsData);
        $.get("https://randomuser.me/api/?inc=name,picture,location",(userData) => this.data.user = userData);
        $.get("https://api.kanye.rest/",(kanyeData) => this.data.kanye = kanyeData);
        $.get(`https://pokeapi.co/api/v2/pokemon/${rand}`,(pokemonData) => this.data.pokemon = pokemonData);
        $.get("https://baconipsum.com/api/?type=all-meat&sentences=4&start-with-lorem=1",(aboutData) => this.data.about = {meat: aboutData});
    }

    getData = () => this.data
}
