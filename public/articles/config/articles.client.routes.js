angular.module('articles').config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/articles', {
			templateUrl: 'articles/views/list-articles.client.view.html',
			css: '../../css/articles.css'
		}).
		when('/articles/create', {
			templateUrl: 'articles/views/create-article.client.view.html'
		}).
		when('/articles/:articleId', {
			templateUrl: 'articles/views/view-article.client.view.html'
		}).
		when('/articles/:articleId/edit', {
			templateUrl: 'articles/views/edit-article.client.view.html'
		});
	}
]);
