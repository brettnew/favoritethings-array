
$(document).ready(function(){
  // alert("Hello!");
  $("#blanks form").submit(function(event) {
    var iceCreamInput = $("input#iceCream").val();
    var movieInput = $("input#movie").val();
    var animalInput = $("input#animal").val();
    var colorInput = $("input#color").val();

    var favoritesOriginal = [iceCreamInput, movieInput, animalInput, colorInput];
    var favoritesArray = favoritesOriginal.slice();
    var favoritesArray = favoritesArray.splice(0,3);
    var newFavorites = favoritesArray.splice(1,1);
    favoritesArray.unshift(newFavorites);
    alert(favoritesArray.push(favoritesOriginal[0], favoritesOriginal[1], favoritesOriginal[2], favoritesOriginal[3]));

    $("#array1").text(favoritesArray[0]);
    $("#array2").text(favoritesArray[1]);
    $("#array3").text(favoritesArray[2]);
    $("#array4").text(favoritesArray[3]);
    $("#array5").text(favoritesArray[4]);
    $("#array6").text(favoritesArray[5]);
    $("#array7").text(favoritesArray[6]);

    event.preventDefault();
  });
});
