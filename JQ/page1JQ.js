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

        $("#host-btn").click(function( ) {
        
            $("#host-more").slideToggle();
            if ($('#host-btn').text() == "Show More") {
            $(this).text("Show Less")
            $("#host-dots").hide();
            } else {
            $(this).text("Show More")
            $("#host-dots").show();
            }
            });

});