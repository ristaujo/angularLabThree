"use strict";

const display = {
  template: `
  <section id="profilePic">
    <img id="koala" src="http://koalageek.weebly.com/uploads/1/1/5/6/11569292/3993345.jpg?268">
  </section>
    <section id="display">
      <h3>{{ $ctrl.userProfile.name }}</h3>
      <p>{{ $ctrl.userProfile.contact }}</p>
      <p>{{ $ctrl.userProfile.bio}}</p>
      <button><a href="#!/update">Edit</a></button>
    </section>
  `,

  controller: ["ProfileService", function(ProfileService) {
    const vm = this;
    vm.userProfile = ProfileService.getUserProfile();
    this.gotoHeroes = function() {
      this.$router.navigate(['update']);
    };
    
  }]
  
};




angular.module("app").component("display", display);