$(document).ready(function() {
  $.getJSON("/articles", function(response) {
    response.forEach(function(article) {
      var newArticle =;
      $(#insert-div).append(newArticle);
    });
  });
});

