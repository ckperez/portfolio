(function(module){
  var repoController = {};

  repoController.index = function(){
    $('.tab-content').hide();
    $('#repo-info').parent().show();
    repos.requestRepos(repoView.index);
  };

  module.repoController = repoController;
})(window);
