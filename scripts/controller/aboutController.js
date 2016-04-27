(function(module){
  var aboutController = {};

  aboutController.index = function(){
    $('.tab-content').hide();
    $('#about-me').show();
  };

  module.aboutController = aboutController;
})(window);
