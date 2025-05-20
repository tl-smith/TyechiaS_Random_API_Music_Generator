# 🎶 Random Music Generator 🎶

This is a fun and interactive web app that allows users to search for music by artist name and receive a **random song** preview from Deezer's API.  Enter any artist, click the "Ready to Jam!" button, and enjoy a randomly picked song with album art and a 30-second audio preview. Perfect for discovering new tracks and artists on the fly!

## Features

- 🎤 **Search by Artist** – Type any artist's name to explore their music.
- 🔀 **Random Song Selector** – Get a random song from search results each time you hit the button.
- 🎧 **Audio Preview** – Listen to a 30-second preview of the selected song.
- 💿 **Album Info & Cover Art** – See the album cover and title for the selected track.
- 🧼 Clean, responsive design with a colorful gradient background.


## How It Works 
1. User types in an artist name and clicks the "Ready to Jam!" button.
2. The app sends a request to Deezer’s search API with the artist query.
3. From the API response, a random song is selected.
4. A popup dialog displays:
    - Artist and song title
    - Album cover image 
    - Album name
    - 30-second audio preview
5. User can close the dialog to reset the app.

## Getting Started
To start the project, vite needs to be installed


## About the API
This app uses the Deezer Public API to fetch song data. Here's how it's used:
- The user's input (artist name) is sent to the https://api.deezer.com/search?q= endpoint
- The response contains an array of song data including title, album, cover art, preview audio, and artist.
- A random song from the results is selected and displayed in a popup dialog.

Example API Request:
https://api.deezer.com/search?q=112


##  Technologies Used
- HTML5
- CSS3
- JavaScript (Vanilla)
- Deezer API
- Vite
- Fetch and .then/.catch


## Acknowledgments
- Thanks to Deezer for the public API.



## Application Screenshot
![alt text](<Screenshot 2025-05-18 at 7.27.23 PM (2).png>)

![alt text](<Screenshot 2025-05-18 at 7.27.15 PM (2).png>)
