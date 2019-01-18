function genMadLib() {
    //Grab inputs by id
    //Get values from input objects
    var noun1 = document.getElementById("noun-1").value;
    var adj1 = document.getElementById("adj-1").value;
    var verb1 = document.getElementById("verb-1").value;
    var verb2 = document.getElementById("verb-2").value;
    var noun2 = document.getElementById("noun-2").value;
    var adj2 = document.getElementById("adj-2").value;
    
    //Create story
    var sp = ' '
    var completeStory = "Here lies a terrible story " + noun1 + sp + adj1 + sp + verb1 + sp + verb2 + sp + noun2 + sp + adj2 + "!";
    
    //Display story
    var madLibStory = document.getElementById("mad-lib-story");
    madLibStory.textContent = completeStory
    console.log(completeStory);


}

genMadLib();
