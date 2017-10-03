app.controller("actorsController", ['$scope','$resource',
  ($scope,$resource) => {
    let Actor = $resource('/api/actors');

    Actor.query((results) => {
      $scope.actors = results;
    });

    $scope.addActor = () => {
      let actor = new Actor();
      actor.firstName = $scope.firstName;
      actor.lastName = $scope.lastName;
      actor.$save((result) => {
        $scope.actors.push(result);
        $scope.firstName = '';
        $scope.lastName = '';
      });
      // $scope.meetups.push({name:$scope.meetupName});
      // $scope.meetupName = '';
    }
  }]);
