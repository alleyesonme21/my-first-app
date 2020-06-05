$(document).ready(function() {
  $("form#group").submit(function(event) {
    const sentence1 = parseInt($("#add1").val());
    const sentence2 = parseInt($("#add2").val());
    const sentence3 = parseInt($("#add3").val());
    const sentence4 = parseInt($("#add4").val());
    const sentence5 = parseInt($("#add5").val());
  
  if (sentence1 === sentence2 && sentence3 === sentence4 && sentence4 <= sentence5) {
    $("#csharp").show();
  } else  if (sentence1 !== sentence2 || sentence3 === sentence4 || sentence4 >= sentence5) {
    $("#python").show();
  } else if (sentence1 != sentence5 && sentence2 === sentence3 && sentence3 === sentence4)  {
    $("#javascript").show();
 }
event.preventDefault();
  });
});