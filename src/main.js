//Retrieve artist data from API source
import {fetchArtist} from "./fetch-artist"


//Get the search input
const searchInput = document.getElementById("search-input");

// Get the dialog element that will be used to display popup content
const dialog = document.getElementById("popup-dialog");
// Get the element where the artist's name or title will be displayed in the dialog
const artistTitle = document.getElementById("artist-title");

// Get the main content container inside the dialog for displaying artist details
const dialogContent = document.getElementById("dialog-content");

// Get the button element used to close the dialog
const closeDialogButton = document.getElementById("close-dialog");

//Adds a click event listener to the button. When the button is clicked, the function inside gets executed.
document.getElementById("search-button").addEventListener("click", function() {
     fetchArtist(searchInput.value)
    .then(data => {
    
    //Pick a random song from results
      const randomIndex = Math.floor(Math.random() * data.data.length);
      const song = data.data[randomIndex];

      

    //Displays details of artist name, song, album cover, album title, and an audio preview of the song
     artistTitle.innerText = `${song.artist.name} - "${song.title}"`;

      dialogContent.innerHTML = `
        <img src="${song.album.cover_medium}" alt="Album Cover" style="width: 100px; height: 100px;">
        <p><strong>Album:</strong> ${song.album.title}</p>
        <audio controls src="${song.preview}">Your browser does not support the audio element.</audio>
      `;

    //Play audio when button is clicked
      const audio = dialogContent.querySelector("audio");
      if (audio) {
       audio.play();
  }

  
    // display the dialog box
      dialog.style.display = "block";
    })


    .catch(e => {
      console.error(e);
      alert("Error fetching data.");
    });
});



// When dialog box is closed, it will clear the searchInput and turn off the audio 
closeDialogButton.addEventListener("click", function() {
  dialog.style.display = "none";
  searchInput.value = ""; 

   const audio = dialogContent.querySelector("audio");
  if (audio) {
    audio.pause();
  }
 
});












