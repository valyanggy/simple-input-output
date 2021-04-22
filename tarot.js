let pepperURL = "https://cdn.glitch.com/be051fd6-f995-469b-9857-76513b310b1c%2Fpepper.jpg?v=1619075814625";

let eggplantURL = "https://cdn.glitch.com/be051fd6-f995-469b-9857-76513b310b1c%2Feggplant.jpg?v=1619075819205";

let oliveURL = "https://cdn.glitch.com/be051fd6-f995-469b-9857-76513b310b1c%2Folive.jpg?v=1619075827991";

let pepperoniURL = "https://cdn.glitch.com/be051fd6-f995-469b-9857-76513b310b1c%2Fpepperoni.jpg?v=1619076046088";

let inputElement = document.querySelector("#input");

let result = document.querySelector("#result");

// Detect when we press a key while in the text box
inputElement.addEventListener("keydown",function(event){

  // Detect when we specifically press enter key
  if (event.key == "Enter"){


    
    // Get the contents of the text input (aka name)
    let name = inputElement.value;
    console.log(name);

    //We can also clear what we wrote in the text box
    inputElement.value = "";
    
    //Clear the reading result from last time
    result.innerHTML = "";
    
    // Loop through 4 times
    for (let i = 0; i < 4; i++){
      
      // Print the number we're at in the loop
      console.log(i);
      
      // Get the i-th letter in the name
      let letter = name[i];
      console.log(letter);
      
      // Create a new HTML image element for the card
      let selectedCard = document.createElement("img");
      
      // If letter is any of these, use the devil card
      if (["a", "b", "c", "d", "e", "f"].includes(letter)){
        selectedCard.src = pepperURL;
      }
      
      // If letter is any of these, use the magician card
      if (["g", "h", "i", "j", "k", "l"].includes(letter) ){
        selectedCard.src = eggplantURL;
      }
      
      // If letter is any of these, use the star card
      if (["m", "n", "o", "p", "q", "r"].includes(letter)){
        selectedCard.src = oliveURL;
      }
      
      // If letter is any of these, use the moon card
      if (["s", "t", "u", "v", "w", "x", "y", "z"].includes(letter)){
        selectedCard.src = pepperoniURL;
      }
      
      result.appendChild(selectedCard);
      
    }
    
  }
})