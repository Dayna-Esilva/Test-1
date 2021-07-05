
function myFunction() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
    console.log(x)
  }


  function displayComment(){
    /* Here we just retrieve the text box value. Note it just overwrites and does not append 
     so you could just set some static comments added here so that it looks like some comments already exist
     and then append the new comment
    */
    
    /* Gets the textbov value.... */
    let blogComment = document.getElementById('txtComment').value;
    /* If comment had been saved to a text file then the javascript to read the text file should go here... still working on it
    */
    
    document.getElementById('myblgComments').value = blogComment;
    

}