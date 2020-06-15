$(document).ready(function() {
  $("form#group").submit(function(event) {
    const sentence1 = parseInt($("#add1").val());
    const sentence2 = parseInt($("#add2").val());
    const sentence3 = parseInt($("#add3").val());
    const sentence4 = parseInt($("#add4").val());
    const sentence5 = parseInt($("#add5").val());
    
    const results = sentence1 + sentence2 + sentence3 + sentence4 + sentence5; 
    
    
    if (results >= 8 && results <= 12) {
        $("#csharp").show();
        $("#javascript").hide();
        $("#python").hide();
    } else if (results >= 12 && results <= 20 ) {
        $("#python").show();
        $("#javascript").hide();
        $("#csharp").hide();
    } else {
        $("#javascript").show();
        $("#csharp").hide();
        $("#python").hide(); 
    }  
          event.preventDefault();
  });
});