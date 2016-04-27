(function(module) {
  var repoView = {};

  var render = Handlebars.compile($('#repo-template').html());

  repoView.index = function(){
    var $repoInfo = $('#repo-info');
    $repoInfo.empty();
    $repoInfo.append(
      repos.with('name').map(render)
    );
  };

  module.repoView = repoView;
})(window);
