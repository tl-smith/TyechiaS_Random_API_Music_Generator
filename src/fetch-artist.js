

export function fetchArtist(artist){
  return fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${artist}`)
    .then(resp => resp.json())
};






