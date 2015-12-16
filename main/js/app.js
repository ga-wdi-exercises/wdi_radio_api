"use strict";

(function() {
  angular
    .module("radio-lab", [
      "ui-router",
      "songs"
    ])
    .config([
      "stateProvider",
      RouterFunction
    ]);

  function RouterFunction($stateProvider) {
    $stateProvider
      .state("welcome", {
        url: "/welcome",
        templateUrl: "welcome.html",
        controller: "",
        controllerAs: ""
      })
      .state("songsIndex", {
        url: "/songs",
        templateUrl: "js/songs/index.html",
        controller: "",
        controllerAs: ""
      });
  }


})();
