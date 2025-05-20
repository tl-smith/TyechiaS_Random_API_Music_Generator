

export function fetchArtist(artist){
  return fetch(`https://api.deezer.com/search?q=${artist}`)
    .then(resp => resp.json())
};






