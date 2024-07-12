let card = document.querySelectorAll('.card');
let frontview = document.querySelectorAll('.frontview')
let backview = document.querySelectorAll('.back-view');
let clickedCard1 = false;
let clickedCard2 = false;
let img = document.querySelectorAll('#img')
let imageArray = ['assets/images/img1.jpeg','assets/images/img3.jpeg','assets/images/img5.jpeg','assets/images/img2.jpeg','assets/images/img4.jpeg','assets/images/img6.jpeg','assets/images/img1.jpeg','assets/images/img3.jpeg','assets/images/img5.jpeg','assets/images/img2.jpeg','assets/images/img4.jpeg','assets/images/img6.jpeg']
card.forEach((card,index)=>{
    card.addEventListener('click' , ()=>{
        forFront()
    })
})

function forFront(){
    frontview.forEach((frontview,index)=>{
        frontview.addEventListener('click' , ()=>{
            if (!clickedCard1) {
                frontview.classList.add('frontViewNone');
                frontview.classList.remove('frontview');
                clickedCard1 = true
            }else if(!clickedCard2){
                frontview.classList.add('frontViewNone');
                frontview.classList.remove('frontview')
                clickedCard2 = true
            }
        })
    })
}


function distributingImage() {
    let imageArray = [
      'assets/images/img1.jpeg',
      'assets/images/img2.jpeg',
      'assets/images/img3.jpeg',
      'assets/images/img4.jpeg',
      'assets/images/img5.jpeg',
      'assets/images/img6.jpeg',
      'assets/images/img7.jpeg',
      'assets/images/img8.jpeg',
      'assets/images/img9.jpeg'
    ];
  
    let duplicatedImageArray = [];
    for (let i = 0; i < imageArray.length; i++) {
      duplicatedImageArray.push(imageArray[i]);
      duplicatedImageArray.push(imageArray[i]);
    }
  
    // Shuffle the duplicated array
    for (let i = duplicatedImageArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = duplicatedImageArray[i];
      duplicatedImageArray[i] = duplicatedImageArray[j];
      duplicatedImageArray[j] = temp;
    }
  
    // Get the image elements
    let img = document.querySelectorAll('#img');
  
    // Assign the shuffled images to the image elements
    for (let i = 0; i < duplicatedImageArray.length; i++) {
      img[i].src = duplicatedImageArray[i];
      console.log(img[i].src = duplicatedImageArray[i]);
    }
  }
distributingImage()



