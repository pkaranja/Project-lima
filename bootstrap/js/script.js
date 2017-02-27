$(function () { 
   $("#amount").keyup(function(){
        var amount = parseInt($("#amount").val());
        
        var total = amount / 850;
       $("#total").html(total+"<sup>TSH</sup>");
   });
});