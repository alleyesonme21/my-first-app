$(document).ready(function() {
  $("form#group").submit(function(event) {
      const sentence1 = parseInt($("#add1").val());
      const sentence2 = parseInt($("#add2").val());
      const sentence3 = parseInt($("#add3").val());
      const sentence4 = parseInt($("#add4").val());
      const sentence5 = parseInt($("#add5").val());

      const addUp = (sentence1 + sentence2 + sentence3 + sentence4 + sentence5);

  switch (addUp) {
   case 5:
    $("#csharp").show();
    break;
    case 15:
     $("#python").show();
     $("#csharp").hide();
     $("#javascript").hide();
    break;
    default: 
    $("#javascript").show();
    $("#python").hide();
    $("#csharp").hide();
    
     }

event.preventDefault();
  });
});