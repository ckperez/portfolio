var projectsTemplateArray = [];

portfolioProjects.sort(function(a,b){
  return (new Date(b.projectCompleted)) - (new Date(a.projectCompleted));
});

function Project (opts) {
  for (key in opts) this[key] = opts[key];
};

Project.prototype.toMyPortfolio = function(){
  var template = Handlebars.compile($('#projects-template').html());
  return template(this);
};

Project.prototype.findDaysAgo = function(){
  this.daysAgo = parseInt((new Date() - new Date(this.projectCompleted)) / 60 / 60 / 24 / 1000);
};


portfolioProjects.forEach(function(projTempArrayObj){
  projectsTemplateArray.push(new Project(projTempArrayObj));
});

projectsTemplateArray.forEach(function(instantiatedCopyOfPTAO){
  instantiatedCopyOfPTAO.findDaysAgo();
  $('#projects').append(instantiatedCopyOfPTAO.toMyPortfolio());
});
