// Break out the application running from the configuration definition to
// assist with testing.
require(["config"], function() {
  // Kick off the application.
  require(["app", "router", "headerview"], function(app, Router, HeaderView) {
    // Define your master router on the application namespace and trigger all
    // navigation from this instance.
    app.router = new Router();
    app.headerview = new HeaderView({el:$("#header")});

    // Trigger the initial route and enable HTML5 History API support, set the
    // root folder to '/' by default.  Change in app.js.
    Backbone.history.start({ pushState: true, root: app.root });
  });
});
