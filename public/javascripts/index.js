$(document).ready(function() {
  $.getJSON("/articles", function(response) {
    response.forEach(function(article) {
      var newArticle =;
      $(#insert-div).append(newArticle);
    });
  });
});

{{!-- <div class="row">
        <div class="divider"></div>
        <div class="section">
          <img src="">
          <h5>Article Title</h5>
          <div class="content">
            <p>Content goes here</p>
          </div>
          <div class="inputComment">
            <form class="col s12" action="" method="POST">
              <div class="row">
                <div class="input-field col s6">
                  <i class="material-icons prefix">comment</i>
                  <input id="icon_prefix" type="text" class="validate">
                  <label for="icon_prefix">Type Comment Here!</label>
                </div>
              </div>
            </form><!-- End Form -->
          </div><!-- End Comment Input -->
          <div class="Comments">
            <div class="container">
            <h6>Comments go here!</h6>
            </div>
          </div><!-- End Display Comments section -->
        </div><!-- End Section -->
      </div><!-- End Row --> --}}

