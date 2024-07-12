let card = document.querySelectorAll('.card');
let frontview = document.querySelectorAll('.frontview')
let backview = document.querySelectorAll('.back-view')
let clickedCard1 = false;
let clickedCard2 = false;
let img = document.querySelectorAll('#img')
let imageArray = ['assets/images/img1.jpeg','assets/images/img3.jpeg','assets/images/img5.jpeg','assets/images/img2.jpeg','assets/images/img4.jpeg','assets/images/img6.jpeg','assets/images/img1.jpeg','assets/images/img3.jpeg','assets/images/img5.jpeg','assets/images/img2.jpeg','assets/images/img4.jpeg','assets/images/img6.jpeg']


// function forCards(){
//     let imageArray = []
//     for (let i = 0; i < card.length; i++) {
//           card[i].addEventListener('click' , (e) =>{
//               console.log(i);
//               let img = e.currentTarget.querySelector('img')
//               if (!clickedCard1) {
//                 imageArray.push(img)
//                 console.log(img);
//                 frontview[i].classList.add('frontViewNone')
//                 frontview[i].classList.remove('frontview')
//                 backview[i].classList.add('back-view-on');
//                 backview[i].classList.remove('back-view');
//                 clickedCard1 = true;
                
//               }else if(!clickedCard2){
//                 console.log(img);
//                 imageArray.push(img);
//                 frontview[i].classList.add('frontViewNone')
//                 frontview[i].classList.remove('frontview')
//                 backview[i].classList.add('back-view-on');
//                 backview[i].classList.remove('back-view');
//                 clickedCard2 = true;
                
//               }

              

//               if (clickedCard1 && clickedCard2) {
          
//                 if (imageArray[0] == imageArray[1]) {
//                    console.log(true);
//                    clickedCard1 = false;
//                    clickedCard2 = false;
//                    frontview[i].classList.remove('frontViewNone')
//                    frontview[i].classList.add('frontview')
//                    backview[i].classList.remove('back-view-on');
//                    backview[i].classList.add('back-view');
//                 }else{
//                    console.log();
//                    clickedCard2 = false
//                    clickedCard1 = false
//                    frontview[i].classList.remove('frontViewNone')
//                    frontview[i].classList.add('frontview')
//                    backview[i].classList.remove('back-view-on');
//                    backview[i].classList.add('back-view');
//                 }
             
//            }
//           })
//     }
// }
forCards()


function forCards() {
  let imageArray = [];
  let clickedCard1 = null;
  let clickedCard2 = null;
  let card1Index = null;
  let card2Index = null;

  for (let i = 0; i < card.length; i++) {
    card[i].addEventListener('click', (e) => {
      const img = e.currentTarget.querySelector('img');
      const currentIndex = i;

      if (!clickedCard1) {
        imageArray.push(img);
        frontview[currentIndex].classList.add('frontViewNone');
        frontview[currentIndex].classList.remove('frontview');
        backview[currentIndex].classList.add('back-view-on');
        backview[currentIndex].classList.remove('back-view');
        clickedCard1 = img;
        card1Index = currentIndex;
      } else if (!clickedCard2) {
        imageArray.push(img);
        frontview[currentIndex].classList.add('frontViewNone');
        frontview[currentIndex].classList.remove('frontview');
        backview[currentIndex].classList.add('back-view-on');
        backview[currentIndex].classList.remove('back-view');
        clickedCard2 = img;
        card2Index = currentIndex;

        // Check if the two cards match
        if (clickedCard1.src === clickedCard2.src) {
          // If they match, remove the event listener so they can't be clicked again
          card[card1Index].removeEventListener('click', arguments.callee);
          card[card2Index].removeEventListener('click', arguments.callee);
          clickedCard1 = null;
          clickedCard2 = null;
        } else {
          // If they don't match, close them after a short delay
          setTimeout(() => {
            frontview[card1Index].classList.remove('frontViewNone');
            frontview[card1Index].classList.add('frontview');
            backview[card1Index].classList.remove('back-view-on');
            backview[card1Index].classList.add('back-view');
            frontview[card2Index].classList.remove('frontViewNone');
            frontview[card2Index].classList.add('frontview');
            backview[card2Index].classList.remove('back-view-on');
            backview[card2Index].classList.add('back-view');
            clickedCard1 = null;
            clickedCard2 = null;
          }, 500); // adjust the delay as needed
        }
      }
    });
  }
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
      console.log(img[i].src = duplicatedImageArray[i],i);
    }
  }
distributingImage()



