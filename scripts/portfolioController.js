(function(module){
  var portfolioController = {};

  portfolioController.index = function(){
    Project.fetchAll(portfolioView.initIndexPage);
    $('.tab-content').hide();
    $('#projects').show();
  };

  module.portfolioController = portfolioController;
})(window);
