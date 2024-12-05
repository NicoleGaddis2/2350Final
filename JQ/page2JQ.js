$(document).ready(function(){ 
    $("#fox").click(function( ) {
        
        $("#more").slideToggle();
        $("#fox-list").slideToggle();
        if ($('#fox').text() == "Show More") {
            $("#fox-dots").hide();
        $(this).text("Show Less")
        } else {
            $("#fox-dots").show();
        $(this).text("Show More")
        }
        });
        $("#half-bad").click(function( ) {
            
            $("#hbad-more").slideToggle();
            $("#hbad-list").slideToggle();
            if ($('#half-bad').text() == "Show More") {
            $(this).text("Show Less")
            $("#hbad-dots").hide();
            } else {
            $(this).text("Show More")
            $("#hbd-dots").show();
            }
        });
        $("#soc").click(function( ) {
        
            $("#soc-more").slideToggle();
            $("#soc-list").slideToggle();
            if ($('#soc').text() == "Show More") {
            $(this).text("Show Less")
            $("#soc-dots").hide();
            } else {
            $(this).text("Show More")
            $("#soc-dots").show();
            }
            });           
});