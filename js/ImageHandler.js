//Doesn't work in browsers yet, for the time being simplified in BasicJS
import loadImage  from './load-image';


let addImg = (src) => {
  let imgElement = document.createElement("img")
  imgElement.src = src
  document.body.appendChild(imgElement)
}

//Christmas-tree a'la node
loadImage('images/cat1.jpeg').then((img1) => {
  addImg(img1.src)
  loadImage('images/cat2.jpeg').then((img2) => {
    addImg(img2.src)
    loadImage('images/cat3.jpeg').then((img3) => {
      addImg(img3.src)
    }).catch(function(error){
      //Hanndle single error
    })
  }).catch(function(error){
    //Hanndle single error
  })
}).catch(function(error){
  //Hanndle single error
})

//same as above but more readable, creates array of promises
// ES6!!
Promise.all([
  loadImage('images/cat1.jpeg'),
  loadImage('images/cat2.jpeg'),
  loadImage('images/cat3.jpeg')
]).then((images) => {
  images.forEach(img => addImg(img.src)
  )
}).catch((err) => {
  //Handle error, if any fails all fail since they are in the same promise
})
