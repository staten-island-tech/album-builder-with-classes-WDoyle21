//Create Album Class
//Constructor for Album

// Create Album Class
// 1 Display Album
// 2 Clear out the input field method
// 3 Delete Album Method

class Album {
  // Class Declaration
  constructor(title, artist, url) {
    this.title = title;
    this.artist = artist;
    this.url = url;
  }
}

// console.log(this);
// const student = {
// name: "Will",
// getThis: function () {
// console.log(this);
// },
// };

class UI {
  addAlbumToList(album) {
    let Html = `<div class="display-album flex-row"> <div class="display-title"></div><div class="display-artist">
    </div><div class="display-cover"><img src= alt=""></div><div class="remove-album">Remove Album X</div>`;
    let newHtml = html.replace("%title%", album.title);
    newHtml = html.replace("%artist%", album.artist);
    newHtml = html.replace("%url%", album.url);
    document.querySelector(".display").insertAdjacentHTML("beforeend", newHtml);
  }
}

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const artist = document.getElementById("title").artist;
  const url = document.getElementById("title").url;
  const album = new Album(title, artist, url);
  const ui = new UI();
  ui.addAlbumToList(album);
  ui.clearField();
});
