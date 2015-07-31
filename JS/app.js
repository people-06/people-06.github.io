var MySite = Ember.Application.create({
    LOG_TRANSITIONS: true
});

MySite.Router.map(function () {
    this.resource('portfolio');
    this.resource('experience');
});
