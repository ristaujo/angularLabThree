"use strict";

const update = {
  template: `
    <section id="update">
      <p>Use the form below to update your profile</p>
      <form ng-submit="$ctrl.update($ctrl.user);">
        <h5>Name</h5>
        <input type="text" placeholder="Name" ng-model="$ctrl.user.name">
        <h5>Contact</h5>
        <input type="text" placeholder="Email" ng-model="$ctrl.user.contact">
        <h5>Bio</h5>
        <textarea ng-model="$ctrl.user.bio"></textarea>
        <br>
        <br>
        <button> Update </button>
      </form>
    </section>
  `,
  controller: ["ProfileService", function(ProfileService) {
    const vm = this;
    vm.user = angular.copy(ProfileService.getUserProfile());
    vm.update = (user) => {
      ProfileService.setUserProfile(user);
    }

  }]

};

angular.module("app").component("update", update)