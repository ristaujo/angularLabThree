"use strict";

angular
  .module("app", ["ngRoute"])
  .config(($routeProvider) => {
  $routeProvider.when("/update", {
    template: "<update></update>"
  })
  .when("/display", {
    template: "<display></display>"
  });
});