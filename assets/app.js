let card = document.querySelectorAll('.card');
let frontview = document.querySelectorAll('.frontview')
let backview = document.querySelectorAll('.back-view');
let clickedCard1 = false;
let clickedCard2 = false;
let img = document.querySelectorAll('#img')
let imagArray = ['assets/images/img1.jpeg','assets/images/img3.jpeg','assets/images/img5.jpeg','assets/images/img2.jpeg','assets/images/img4.jpeg','assets/images/img6.jpeg','assets/images/img1.jpeg','assets/images/img3.jpeg','assets/images/img5.jpeg','assets/images/img2.jpeg','assets/images/img4.jpeg','assets/images/img6.jpeg']
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
            frontview.classList.remove('frontview');
            clickedCard2 = true
            }
        })
    })
}

function distributingImage() {
    img.forEach((img,index)=>{
        var random = Math.floor(Math.random()*imagArray.length);
        img.src = imagArray[random];
        console.log(img.src = imagArray[random]);
    })
}

distributingImage()