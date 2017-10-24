'use strict';

var app = app || {};


(function(module){
  const load = {};


  load.dayOne = () => {
      console.log('clicked');
      $('#two').hide();
      $('#three').hide();
      $('#one').fadeIn();
  }

  load.dayTwo = () => {
        console.log('clicked');
        $('#one').hide();
        $('#three').hide();
        $('#two').fadeIn();
  }
  load.dayThree = () => {
        console.log('clicked');
        $('#one').hide();
        $('#two').hide();
        $('#three').fadeIn();
  }
  module.load = load;

})(app);
