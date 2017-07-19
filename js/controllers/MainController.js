app.controller('MainController', ['$scope', function($scope) {
  $scope.title = "hello world";
  $scope.links = [
      {
        name: "Appetizers",
        image: "appetizers.jpg",
        alt: "Image of appetizer"
      },
      {
        name: "Entrees",
        image: "entrees.jpg",
        alt: "Image of Entree"
      },
      {
        name: "Desserts",
        image: "desserts.jpg",
        alt: "Image of dessert"
      },
      {
        name: "Beverages",
        image: "beverages.jpg",
        alt: "Image of beverage"
      }
  ]
}])
