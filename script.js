//https://dog.ceo/api/breeds/image/random
//4-29 is dog code

// let dogImage = document.getElementById("dogImage");
// fetch('https://dog.ceo/api/breeds/image/random ').then()
// // same thing
// console.log('1')
// fetch("https://dog.ceo/api/breeds/image/random")
//   .then((response) => response.json())
//   // .then(json => console.log( json))
//   .then((json) => {
//     // console.log(json.message)
//     dogImage.innerHTML = `<img src="${json.message}" height="200px" width="200px"/>`;
//   });
console.log("fe");  console.log("fe");


let button1 = document.getElementById("button1");
butt1func= () => {
  console.log("fe");
  let dogImage = document.getElementById("dogImage");
  // fetch('https://dog.ceo/api/breeds/image/random ').then()
  //same thing
  // console.log('1')
  fetch("https://dog.ceo/api/breeds/image/random")
  .then((response) => response.json())
  // .then(json => console.log( json))
  .then((json) => {
    // console.log(json.message)
    dogImage.innerHTML = `<img src="${json.message}" height="200px" width="200px"/>`;
  });
};


// console.log('3')
//console.log(fetch('https://dog.ceo/api/breeds/image/random'))
//fetch is jus ta promise so we have to .then it

//this information here takes more time hence the normal console logs are run first as we already know what to do with them
//whenever we are fetching we have to quickly so something
//non synchronus-- doesnt runs linearly

// super api
const baseLink = "https://www.superheroapi.com/api.php/780530866622263";

const supe = (id) => {
  
  fetch(`${baseLink}/${id}`)
    .then((response) => response.json())
    .then((json) => {
      //   console.log(json);
      let img2 = json.image.url;
      // console.log('this', img2)
      document.querySelector(
        "body"
      ).innerHTML += `
      <div class="new1">
      <img src=${img2} height='100px' width='100px' /><br>
      ${json.name}
      </div>
      ` ;
    });
  // .then(value=>let img2=)
};

supe(69);

// console.log('https:\/\/www.superherodb.com\/pictures2\/portraits\/10\/100\/10090.jpg')
// let img = "https://www.superherodb.com/pictures2/portraits/10/100/10476.jpg"

let button2 = document.getElementById("button2");
button2.onclick = () => {
  console.log("utton 2 clicked");

  let randomTill731 = Number(Math.floor(Math.random() * 731))
  supe(randomTill731)
}

// let randomTill731 = Number(Math.floor(Math.random() * 731))
// button2.onclick(supe(randomTill731))
// console.log(randomTill731)

findRandom = () => {
  let randomTill731 = Number(Math.floor(Math.random() * 730));
  supe(randomTill731);
};
