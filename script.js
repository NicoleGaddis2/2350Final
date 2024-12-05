document.getElementById("sbt-btn").onclick = function(){
     
    let t= document.getElementById("title").value;
    let a=  document.getElementById("author").value;
    
    let r= document.getElementById("rating").value;
    
    alert("You recommended a book " + t + " written by "+ a +" and gave it a rating of " +r +"/10");
    
}