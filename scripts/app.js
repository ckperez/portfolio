// var projects = [];
//
// function PortfolioItem(opts){
//   this.title = opts.title;
//   this.tagline = opts.tagline;
//   this.projectURL = opts.projectURL;
//   this.category = opts.category;
//   this.imgPath = opts.imgPath;
//   this.projectCompleted = opts.projectCompleted;
// }
//
// PortfolioItem.prototype.toHtml = function(){
//   var $newProject = $('div.template').clone();
//
//   $newProject.attr('data-category', this.category);
//   $newProject.find('a.project-link').attr('href', this.projectURL);
//   $newProject.find('h1').html(this.title);
//   $newProject.find('h2').html(this.tagline);
//   $newProject.find('img').attr('src', this.imgPath);
//   $newProject.find('time[pubdate]').attr('title', this.projectCompleted);
//   $newProject.find('time').html('Added to portfolio about ' + parseInt((new Date() - new Date(this.projectCompleted)) / 60 / 60 / 24 / 1000) + ' days ago');
//   $newProject.removeClass('template');
//   return $newProject;
// };
//
// portfolioProjects.sort(function(a,b){
//   return (new Date(b.projectCompleted)) - (new Date(a.projectCompleted));
// });
//
// portfolioProjects.forEach(function(ele){
//   projects.push(new PortfolioItem(ele));
// });
//
// // projects.forEach(function(proj){
// //   $('#projects').append(proj.toHtml());
// // });
