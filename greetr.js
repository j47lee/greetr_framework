(function(global, $){

  //calls new Greetr.init fn to create object
  var Greetr = function(firstname, lastname, language){
    return new Greetr.init(firstname, lastname, language);
  };

  var supportedlangs = ['en','es'];

  var greetings = {
    en: 'Hello',
    es: 'Hola'
  };

  var formalgreetings = {
    en: 'Greetings',
    es: 'Saludos'
  };

  var logmessages = {
    en: 'Logged in',
    es: 'Inicio sesion'
  };

  Greetr.prototype = {

    //functions to use in methods =================================
    fullname: function(){
      return this.firstname + ' ' + this.lastname;
    },
    validate: function(){
      if (supportedlangs.indexOf(this.language) === -1){
        throw 'Invalid language';
      } else {
        console.log('"' + this.language + '" has been set as the language');
      }
    },
    greeting: function(){
      return greetings[this.language] + ' ' + this.firstname + '!';
    },
    formalgreeting: function(){
      return formalgreetings[this.language] + ' ' + this.fullname();
    },

    //methods for object =========================================
    greet: function(formal){
        var msg;
        if(formal){
          msg = this.formalgreeting();
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
          console.log(logmessages[this.language] + ': ' + this.fullname());
        }
        return this;
    },
    setlang: function(lang){
        this.language = lang;
        this.validate();
        return this;
    },
    HTMLgreeting: function(selector, formal){
        if (!$){
          throw 'jQuery not loaded'
        };
        if (!selector){
          throw 'Missing jQuery selector'
        };

        var msg;
        if(formal){
          msg = this.formalgreeting();
        } else {
          msg = this.greeting();
        }

        $(selector).html(msg);

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


})(window, jQuery); //end IIFE



// function Person(){
//   this.firstname;
//   this.lastname;
//   this.language
// }
// var g = new Person()
