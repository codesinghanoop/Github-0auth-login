var app = angular.module('myModule',[])
   
   app.controller('fetchGit',['$scope','$http',function($scope,$http){
   $scope.fetchUserData = function () {
	     $scope.isFetching = "<h1>Loading...</h1>";
         $scope.userNotFound = false;
         $scope.loaded = false;
		 if($scope.username)
		 {
         $http.get("https://api.github.com/users/" + $scope.username)
               .success(function (data) {
				   $scope.isFetching = "";
                  if (data.name == "") data.name = data.login;
                  $scope.user = data;
                  $scope.loaded = true;
               })
               .error(function () {
                  $scope.userNotFound = true;
               });
         $http.get("https://api.github.com/users/" + $scope.username + "/repos").success(function (data) {
            $scope.repos = data;
            $scope.reposFound = data.length > 0;
         });
		 }
		 else{
			 $scope.isFetching = "";
			 window.alert("please enter the username")
		 }
      }
   }])	  