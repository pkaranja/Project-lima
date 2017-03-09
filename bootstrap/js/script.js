$(function () { 
   $("#amount").keyup(function(){
        var amount = parseInt($("#amount").val());
        
        var total = amount / 850;
        total = Math.floor(total);
       
       $("#total").html(total);
   });
    
    $("#showCalc").click(function(){
        $("#calc-info").hide();
        $("#calc").slideDown();
    });
    
    $("#hideCalc").click(function(){
        $("#calc-info").slideDown();
        $("#calc").hide();
    });
    
    $(".mechanics1").click(function(){
        $("#mtandaoni").slideDown();
        $("#wakala").hide();
    });
    $(".mechanics2").click(function(){
        $("#mtandaoni").hide();
        $("#wakala").slideDown();
    });
    
    $(function() {
        $('#toggle-event').change(function() {
            if ( $(this).prop('checked') == true ){
                window.location = "http://localhost/lima";
            }else{
                window.location = "http://localhost/lima/sw";
            }
        })
  })
});