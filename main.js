import './style.css'

const protectedImage = document.querySelector(".protectedimage")
const canvas = document.querySelector("body > div.wrapper > div:nth-child(2) > canvas")



window.onload = () => {


  const contentType = 'image/png';
  const b64Data = 'iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==';

  // const b64toBlob = (b64Data, contentType = '', sliceSize = 512) => {
  //   const byteCharacters = atob(b64Data);
  //   const byteArrays = [];

  //   for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
  //     const slice = byteCharacters.slice(offset, offset + sliceSize);

  //     const byteNumbers = new Array(slice.length);
  //     for (let i = 0; i < slice.length; i++) {
  //       byteNumbers[i] = slice.charCodeAt(i);
  //     }

  //     const byteArray = new Uint8Array(byteNumbers);
  //     byteArrays.push(byteArray);
  //   }

  //   const blob = new Blob(byteArrays, { type: contentType });
  //   return blob;
  // }

  const url = "https://protected-images-api.herokuapp.com/image/latest"
  fetch(url)
    .then(resp => resp.json())
    .then(imgSrc => {
      document.querySelector("body > div.main > div > div:nth-child(2) > p > span")
        .innerHTML = `<a href="https://protected-images-api.herokuapp.com/image/${imgSrc}">found here</a>`
      document.querySelector("body > div.main > div > div:nth-child(2) > p > span").id = Math.floor(Math.random() * 999)
      protectedImage.style.backgroundImage = `url(https://protected-images-api.herokuapp.com/image/${imgSrc})`
    })


  // fetch(url)
  //   .then(resp => resp.json()) //<--- get latest uuid
  //   .then(imgSrc => 
  //     fetch("http://localhost:3001/image/" + imgSrc)
  //     .then(resp => resp.json())
  //     .then(data => {
  //       const blob = b64toBlob(b64Data, contentType);
  //       const blobUrl = URL.createObjectURL(blob);

  //       protectedImage.style.background = `url(${blobUrl})`;
  //     })
  // .then(resp => resp.blob())
  // .then(resp => { 
  //   const blobUrl = window.URL.createObjectURL(resp);
  //   protectedImage.style.background = `url(${blobUrl})`;
  // })

  // )


  // var ctx = canvas.getContext("2d")
  // ctx.drawImage(document.querySelector("#cat"), 10, 10)

  // fitImageToCanvas(document.querySelector("#cat"), canvas)

  // setInterval(() => {
  // .then(imageSrc => protectedImage.style.backgroundImage = `url("http://localhost:3001/image/${imageSrc}")`)
  // .then(protectedImage.style.backgroundImage = "jim")
  // },1000)

}
