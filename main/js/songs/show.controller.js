"use strict";

(function(){
  angular
    .module("songs")
    .controller("SongShowController", [
      "SongFactory",
      "$stateParams",
      SongShowControllerFunction
    ]);

    function SongShowControllerFunction (SongFactory, $stateParams) {
      console.log("we're actually here");

      this.song = SongFactory.get({id: $stateParams.id});
      console.log(this.song);
    }

})();
