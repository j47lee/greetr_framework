(function(global, jquery){

  //calls new Greetr.init fn to create object
  var Greetr = function(firstname, lastname, language){
    return new Greetr.init(firstname, lastname, language);
  }

  Greetr.prototype = {

    test: function(){
      console.log('this is a test on the prototype');
    }

  }

  //object structure
  Greetr.init = function(firstname, lastname, language){
    var self = this;
    self.firstname = firstname || '';
    self.lastname = lastname || '';
    self.language = language || 'en';
  }

  //points init to initial object
  Greetr.init.prototype = Greetr.prototype

  //add to global object and create alias
  global.Greetr = global.G$ = Greetr;


})(window, $) //end IIFE



// function Person(){
//   this.firstname;
//   this.lastname;
//   this.language
// }
// var g = new Person()
