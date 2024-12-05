$(document).ready(function( ){
    
    $("#nEvils-btn").click(function( ) {
        
        $("#nEvils-more").slideToggle();
        $("#nEvils-list").slideToggle();
        if ($('#nEvils-btn').text() == "Show More") {
        $(this).text("Show Less")
        $("#nEvils-dots").hide();
        } else {
        $(this).text("Show More")
        $("#nEvils-dots").show();
        }
        });
    
});