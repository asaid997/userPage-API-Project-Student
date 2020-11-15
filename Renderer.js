class Renderer {
    constructor() {
        this.user_source = $('#user-template').html();
        this.kanye_source = $('#quote-template').html();
        this.pokemon_source = $('#pokemon-template').html();
        this.meat_source = $('#meat-template').html();
        this.friends_source = $('#friends-template').html();

        Handlebars.registerHelper('proper', function (String) {
            return `${String[0].toUpperCase()}${String.slice(1)}`
        });
    }

    handlBarHelper(source, elementToAppendTo, data) {
        $(elementToAppendTo).empty();
        let template = Handlebars.compile(source);
        let newHTML = template(data);
        $(elementToAppendTo).append(newHTML);
    }

    renderUser = (data) => this.handlBarHelper(this.user_source, '.user-container', data)
    renderKanyeQuote = (quote) => this.handlBarHelper(this.kanye_source, '.quote-container', quote)
    renderPokemon = (pokemon) => this.handlBarHelper(this.pokemon_source, '.pokemon-container', pokemon)
    renderAbout = (about) => this.handlBarHelper(this.meat_source, '.meat-container', about)
    renderFriends = (friends) => this.handlBarHelper(this.friends_source, '.friends-container', friends)

    renderAll(data) {
        renderer.renderUser(data.user)
        renderer.renderKanyeQuote(data.kanye)
        renderer.renderPokemon(data.pokemon)
        renderer.renderAbout(data.about)
        renderer.renderFriends(data.friends)
    }

}