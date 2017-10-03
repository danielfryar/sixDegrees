app.controller("moviesController", ['$scope','$resource',
  ($scope,$resource) => {
    let Movie = $resource('/api/movies');

    Movie.query((results) => {
      $scope.movies = results;
    });

    $scope.addMovie = () => {
      let movie = new Movie();
      movie.title = $scope.title;
      movie.$save((result) => {
        $scope.movies.push(result);
        $scope.title = '';
      });
      // $scope.meetups.push({name:$scope.meetupName});
      // $scope.meetupName = '';
    }
  }]);
