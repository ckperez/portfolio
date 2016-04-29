(function(module){
  var portfolioController = {};

  portfolioController.index = function(ctx){
    Project.fetchAll(portfolioView.initIndexPage);
    $('.tab-content').hide();
    $('#projects').show();
    if (ctx.params.categoryName === undefined){
      $('#projects').children().show();
    }
  };

  portfolioController.displayByCategory = function(ctx, next){
    $('div[data-category]').show();
    $('div[data-category]:not([data-category=' + ctx.params.categoryName + '])').hide();
    next();
  };

  module.portfolioController = portfolioController;
})(window);
