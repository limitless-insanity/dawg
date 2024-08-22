let dogImage = document.getElementById("dogImage");

fetch("https://dog.ceo/api/breeds/image/random")
  .then((response) => response.json())

  .then((json) => {
    dogImage.innerHTML = `<img src="${json.message}" height="35%" width="50%"/>`;
  });

let button1 = document.getElementById("button1");
button1.onclick = () => {
  let dogImage = document.getElementById("dogImage");

  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())

    .then((json) => {
      dogImage.innerHTML = `<img src="${json.message}" height="200px" width="200px"/>`;
    });
};

const baseLink = "https://www.superheroapi.com/api.php/780530866622263";

const supe = (id) => {
  fetch(`${baseLink}/${id}`)
    .then((response) => response.json())
    .then((json) => {
      let img2 = json.image.url;

      document.querySelector(
        "body"
      ).innerHTML += `<img src=${img2} height='100px' width='100px' />`;
    });
};

supe(69);


let button2 = document.getElementById("button2");


findRandom = () => {
  let randomTill731 = Number(Math.floor(Math.random() * 731));
  supe(randomTill731);
};
