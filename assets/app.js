let card = document.querySelectorAll('.card');
let frontview = document.querySelectorAll('.frontview')
let backview = document.querySelectorAll('.back-view')
let clickedCard1 = false;
let clickedCard2 = false;
let img = document.querySelectorAll('#img')

forCards()


function forCards() {
  var right = new Audio('assets/audio/Cart Sound.mp3');
  var wrong = new Audio('assets/audio/Wrong Answer Sound effect.mp3');
  let imageArray = [];
  let clickedCard1 = null;
  let clickedCard2 = null;
  let card1Index = null;
  let card2Index = null;
  let pointsWrite = document.getElementById('points');
  let points = 0;
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

        if (clickedCard1.src === clickedCard2.src) {
          card[card1Index].removeEventListener('click', arguments.callee);
          card[card2Index].removeEventListener('click', arguments.callee);
          clickedCard1 = null;
          clickedCard2 = null;
          right.play();
          points++
          pointsWrite.innerText = points;
        } else {
          wrong.play()
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
          }, 500);
        }
      }
    });
  }
}

 

var refresh = document.getElementById('refresh')
refresh.addEventListener('click' , ()=>{
    window.location.reload()
})



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



