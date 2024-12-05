$(document).ready(function( ){

    $("#rwrb-btn").click(function( ) {
        
        $("#rwrb-more").slideToggle();
        if ($('#rwrb-btn').text() == "Show More") {
        $(this).text("Show Less")
        $("#rwrb-dots").hide();
        } else {
        $(this).text("Show More")
        $("#rwrb-dots").show();
        }
        });

});