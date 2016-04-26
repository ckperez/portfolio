(function(module){

  function Project(opts){
    for (key in opts) this[key] = opts[key];
  };

  Project.prototype.toMyPortfolio = function(){
    var template = Handlebars.compile($('#projects-template').html());
    this.daysAgo = parseInt((new Date() - new Date(this.projectCompleted)) / 60 / 60 / 24 / 1000);
    return template(this);
  };

  Project.loadAll = function(dataFromJSON){
    dataFromJSON.sort(function(a,b){
      return (new Date(b.projectCompleted)) - (new Date(a.projectCompleted));
    });
    Project.all = dataFromJSON.map(function(ele){
      return new Project(ele);
    });
  };

  Project.fetchAll = function(next){
    $.ajax({
      type: 'HEAD',
      url: 'data/portfolioData.json',
      success: function(data, message, xhr){
        var eTag = xhr.getResponseHeader('eTag');
        if (eTag === localStorage.eTag){
          Project.loadAll(JSON.parse(localStorage.stashedPortfolioData));
          next();
        } else {
          $.getJSON('data/portfolioData.json', function(data){
            Project.loadAll(data);
            localStorage.stashedPortfolioData = JSON.stringify(data);
            localStorage.eTag = eTag;
            next();
          });
        }
      }
    });
  };

  module.Project = Project;

}) (window);
