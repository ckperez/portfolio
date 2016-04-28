(function(module) {
  var repos = {};

  repos.requestRepos = function(callback){
    $.get('https://api.github.com/users/ckperez/repos' +
      '?per_page=10' +
      '&sort=updated')
    .done(function(data){
      repos.all = data;
    })
    .done(callback);
  };

  repos.with = function(attr) {
    return repos.all.filter(function(repo) {
      return repo[attr];
    });
  };

  module.repos = repos;
})(window);
