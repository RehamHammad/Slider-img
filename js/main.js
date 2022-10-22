var imgs=Array.from(document.querySelectorAll(".item img")) ;
var lightBoxContainer=document.querySelector('.lightbox-container ');
var lightBoxItem=document.querySelector('.lightbox-item ');
var closeIcon=document.getElementById('close');
var nextIcone=document.getElementById('next');
var prevIcone=document.getElementById('prev');
var currentIndex=0;


for(var i=0;i<imgs.length;i++){
   imgs[i].addEventListener('click',function(e){
   currentIndex=imgs.indexOf(e.target);
    currentSrc=e.target.src;
   lightBoxContainer.style.display='flex'
   lightBoxItem.style.backgroundImage=`url(${currentSrc})`
   })
}

closeIcon.addEventListener('click',closeSlider)

function closeSlider(){
    lightBoxContainer.style.display='none'
}



nextIcone.addEventListener('click',getNextSlide)

function getNextSlide(){
    currentIndex++;
    if(currentIndex==imgs.length){
        currentIndex=0
    }
    var currentSrc=imgs[currentIndex].src;
    lightBoxItem.style.backgroundImage=`url(${currentSrc})`;

}

prevIcone.addEventListener('click',getPrevSlide)

function getPrevSlide(){
    currentIndex--;
    if(currentIndex<0){
        currentIndex=imgs.length-1
    }
    var currentSrc=imgs[currentIndex].src;
    lightBoxItem.style.backgroundImage=`url(${currentSrc})`;

}

document.addEventListener('keydown',function(e){
    if(e.key=='ArrowRight'){
        getNextSlide()
    }
    else if(e.key=='ArrowLeft'){
        getPrevSlide()
    }
    else if(e.key=='Escape'){
        closeSlider()
    }
})