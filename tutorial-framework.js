(function(global) {
  //This is used to avoid call new every time we want to use the framework
  var Greetr = function(firstname, lastname, language) {
    return new Greetr.init(firstname, lastname, language);
  }

  //These functions and objects are not exposed by the framework
  var supportedLanguages = ['en', 'es', 'pt'];

  var greetings = {
    en: 'Hello',
    es: 'Hola',
    pt: 'Olá'
  };

  var formalGreetings = {
    en: 'Greetings',
    es: 'Saludos',
    pt: 'Saudações'
  };

  var validate = function(language) {
    if(supportedLanguages.indexOf(language) === -1) {
      throw 'Invalid language';
    }

    return true;
  }

  //All functions exposed by the framework will be in prototype
  Greetr.prototype = {
    fullName: function() {
      return this.firstname + ' ' + this.lastname;
    },

    greeting: function() {
      return greetings[this.language] + ', ' + this.fullName();
    },

    formalGreeting: function() {
      return formalGreetings[this.language] + ', ' + this.fullName();
    },

    setLanguage: function(language) {
      if(validate(language)) {
        this.language = language;
      }

      return this;
    },

    greet: function(isFormal) {
      if(isFormal) {
        console.log(this.formalGreeting());
      } else {
        console.log(this.greeting());
      }

      return this;
    }
  };

  Greetr.init = function(firstname, lastname, language) {
    var self = this;
    self.firstname = firstname || '';
    self.lastname = lastname || '';
    self.language = language || 'en';
  }

  Greetr.init.prototype = Greetr.prototype; //Make sure that object created by init has access to all functions

  global.Greetr = global.G$ = Greetr;
}(window));
