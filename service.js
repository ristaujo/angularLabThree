"use strict";

function ProfileService($location) {

  let userProfile = {
    name: "Apollo",
    contact: "apollo@cat.com",
    bio: "I'm the best cat in the whole wide world."
  };

  const getUserProfile = () => {
    return userProfile;
  };

  const setUserProfile = (user) => {
    userProfile = user;
    $location.path("/update");

  };

  return {
    getUserProfile,
    setUserProfile
  };

}


angular.module("app").factory("ProfileService", ProfileService);