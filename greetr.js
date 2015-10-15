(function(global, jquery){

  //calls new Greetr.init fn to create object
  var Greetr = function(firstname, lastname, language){
    return new Greetr.init(firstname, lastname, language);
  };

  var supportedLangs = ['en','es'];

  var greetings = {
    en: 'Hello',
    es: 'Hola'
  };

  var formalGreetings = {
    en: 'Greetings',
    es: 'Saludos'
  };

  var logMessages = {
    en: 'Logged in',
    es: 'Inicio sesion'
  };

  Greetr.prototype = {
    fullname: function(){
      return this.firstname + ' ' + lastname;
    },
    validate: function(){
      if (supportedLangs.indexOf(this.language) === -1){
        throw 'Invalid language';
      }
    },
    greeting: function(){
      return greetings[this.language] + ' ' + this.firstname + '!';
    },
    formalgreeting: function(){
      return formalgreetings[this.language] + ' ' + this.fullname();
    },
    greet: function(formal){
        var msg;
        if(formal){
          msg = this.formalGreeting();
        } else {
          msg = this.greeting();
        }

        if(console){
          console.log(msg);
        }
        return this;
    },
    log: function(){
        if (console){
          console.log(logMessages[this.language] + ': ' + this.fullname());
        }
        return this;
    },
    setLang: function(lang){
        this.language = lang;
        this.validate();
        return this;
    }
  }; //end Greetr.prototype object literal

  //object structure
  Greetr.init = function(firstname, lastname, language){
    var self = this;
    self.firstname = firstname || '';
    self.lastname = lastname || '';
    self.language = language || 'en';
  };

  //points init to initial object
  Greetr.init.prototype = Greetr.prototype;

  //add to global object and create alias
  global.Greetr = global.G$ = Greetr;


})(window, $); //end IIFE



// function Person(){
//   this.firstname;
//   this.lastname;
//   this.language
// }
// var g = new Person()
