page('/', portfolioController.index);

page('/about', aboutController.index);

page('/repos', repoController.index);

page('/category/:categoryName', portfolioController.displayByCategory, portfolioController.index);

page('/category', '/');

page();
