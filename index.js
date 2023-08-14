const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passoneEl = document.getElementById("passone")
let passtwoEl = document.getElementById("passtwo")
let passthreeEl = document.getElementById("passthree")
let passfourEl = document.getElementById("passfour")

function generationPassword(){
  passoneEl.textContent = password() 
  ans = " "
  passtwoEl.textContent = password() 
  ans = " "
  passthreeEl.textContent = password() 
  ans = " "
  passfourEl.textContent = password() 
  ans = " "
}

function randomNumber(){
  return Math.floor(Math.random() * characters.length)
}
let ans = ""

function password(){
  for(let i = 0 ; i < 15 ; i++){
    ans += characters[randomNumber()]
  }
  return ans
}


// copied password succesfully

document.addEventListener('DOMContentLoaded', () => {
  const passone = document.getElementById('passone');

  passone.addEventListener('click', () => {
      // Create a text range and select the content of the paragraph
      const range = document.createRange();
      range.selectNode(passone);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);

      // Execute the copy command
      try {
          document.execCommand('copy');
          console.log('Text copied to clipboard');
      } catch (error) {
          console.error('Unable to copy text:', error);
      }

      // Clear the selection
      window.getSelection().removeAllRanges();
      alert("Your password-one copied")
  });
});

// copied password-two succesfully

document.addEventListener('DOMContentLoaded', () => {
  const passtwo = document.getElementById('passtwo');

  passtwo.addEventListener('click', () => {
      // Create a text range and select the content of the paragraph
      const range = document.createRange();
      range.selectNode(passtwo);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);

      // Execute the copy command
      try {
          document.execCommand('copy');
          console.log('Text copied to clipboard');
      } catch (error) {
          console.error('Unable to copy text:', error);
      }

      // Clear the selection
      window.getSelection().removeAllRanges();
      alert("Your password-two copied")
  });
});


// copied password-three succesfully

document.addEventListener('DOMContentLoaded', () => {
  const passthree = document.getElementById('passthree');

  passthree.addEventListener('click', () => {
      // Create a text range and select the content of the paragraph
      const range = document.createRange();
      range.selectNode(passthree);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);

      // Execute the copy command
      try {
          document.execCommand('copy');
          console.log('Text copied to clipboard');
      } catch (error) {
          console.error('Unable to copy text:', error);
      }

      // Clear the selection
      window.getSelection().removeAllRanges();
      alert("Your password-three copied")
  });
});

// copied password-four succesfully

document.addEventListener('DOMContentLoaded', () => {
  const passfour = document.getElementById('passfour');

  passfour.addEventListener('click', () => {
      // Create a text range and select the content of the paragraph
      const range = document.createRange();
      range.selectNode(passfour);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);

      // Execute the copy command
      try {
          document.execCommand('copy');
          console.log('Text copied to clipboard');
      } catch (error) {
          console.error('Unable to copy text:', error);
      }

      // Clear the selection
      window.getSelection().removeAllRanges();
      alert("Your password-four copied")
  });
});
