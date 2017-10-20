angular.module('app', [])
    .controller('MainCtrl', mainCtrl);

function mainCtrl($scope, $compile) {
  $scope.movies = [];
  $scope.results = [];

  $scope.movies.push(
    {
      id: "starwars",
      title: "Star Wars Episode IV", 
      score: "8", 
      posterURL: "https://images-na.ssl-images-amazon.com/images/I/81P3lDJbjCL._SY550_.jpg"
    });

  $scope.movies.push(
    {
      id: "princessbride",
      title: "The Princess Bride", 
      score: "9", 
      posterURL: "http://www.princessbridetweasure.com/images/products/detail/PB1212.jpg"
    });

  $scope.movies.push(
    {
      id: "jurassicpark",
      title: "Jurassic Park", 
      score: "6", 
      posterURL: "http://img.moviepostershop.com/jurassic-park-movie-poster-1992-1010263049.jpg"
    });

  $scope.movies.push(
    {
      id: "raiders",
      title: "Raiders of the Lost Ark", 
      score: "5", 
      posterURL: "https://images-na.ssl-images-amazon.com/images/I/51LTRRmex2L.jpg"
    });

  $scope.movies.push(
    {
      id: "backtothefuture",
      title: "Back to the Future", 
      score: "7", 
      posterURL: "https://images-na.ssl-images-amazon.com/images/I/51a3mzh6ymL.jpg"
    });

  $scope.movies.push(
    {
      id: "forrestgump",
      title: "Forrest Gump", 
      score: "10", 
      posterURL: "https://1.bp.blogspot.com/-_fPu93EHH7I/V0vhv2m9ZtI/AAAAAAABG0k/VrMMAeJ9nVE0-dIv8V_icOlcN_bddMN4wCKgB/s1600/Forrest-Gump-movie_poster.jpg"
    });

  $scope.movies.push(
    {
      id: "doubtfire",
      title: "Mrs. Doubtfire", 
      score: "4", 
      posterURL: "https://images-na.ssl-images-amazon.com/images/I/51HPX1AAVKL._SY445_.jpg"
    });

  $scope.movies.push(
    {
      id: "jaws",
      title: "Jaws", 
      score: "3", 
      posterURL: "https://i.pinimg.com/736x/f1/84/66/f18466a7a69f22d678388adc9e3e4ef6--jaws-movie-poster-original-movie-posters.jpg"
    });

  $scope.movies.push(
    {
      id: "ferrisbueller",
      title: "Ferris Bueller's Day Off", 
      score: "2", 
      posterURL: "https://images-na.ssl-images-amazon.com/images/I/51VSX1b53oL.jpg"
    });

  $scope.movies.push(
    {
      id: "topgun",
      title: "Top Gun", 
      score: "1", 
      posterURL: "http://img.moviepostershop.com/top-gun-movie-poster-1986-1010468870.jpg"
    });

  $scope.addRatings = function () {
    for(var i = 0; i < $scope.movies.length; i++) {
      $scope.movies[i].score = Number($scope.movies[i].score) + Number(document.getElementById($scope.movies[i].id).value);
      console.log($scope.movies[i].title + ": " + $scope.movies[i].score);

      if($scope.results.length < 10) {
        $scope.results.push(
          {
            id: $scope.movies[i].id,
            title: $scope.movies[i].title,
            score: $scope.movies[i].score,
            posterURL: $scope.movies[i].posterURL
          });
      }
      else {
        $scope.results[i].score = $scope.movies[i].score;
      }
    }

    document.getElementById("rankingHeader").style.visibility = "visible";
  }
}
