let count = 1;
const slidesToShow = 1;
const slidesToScroll = 1;

const sliderContainer = document.querySelector(".slider-container");
const sliderTrack = document.querySelector(".slider");

const sliderDots = document.querySelectorAll(".pagination-item");
const sliderItems = document.querySelectorAll(".slider-item");
const itemsCount = sliderItems.length;
const btnPrev = document.querySelector(".slider-arrow-left")
const btnNext = document.querySelector(".slider-arrow-right")
const buttons = document.querySelectorAll('.slider-button');
const currentNumber = document.querySelector(".current-number");

const itemWidth = sliderContainer.offsetWidth;


function changeSlide () {
    sliderTrack.style.transform = `translateX(-${count * itemWidth}px)`;
    console.log(count);
};



function activeDot(n) {
    sliderDots.forEach((dot) => {
      dot.classList.remove("active");
    })
    sliderDots[n - 1].classList.add("active");
    currentNumber.innerHTML = "";
    currentNumber.innerHTML = `0${n}`;
};


  function endSlide() {
    count = 1;
    sliderTrack.classList.remove("transition");
    activeDot(count);
    changeSlide();
    sliderTrack.removeEventListener("transitionend", endSlide);
    sliderTrack.removeEventListener("translateend", () => { 
      sliderTrack.classList.add("transition")
    });
  };
  

    function startSlide() {
    count = 5;
    sliderTrack.classList.remove("transition");
    activeDot(count);
    changeSlide();
    sliderTrack.removeEventListener("transitionend", startSlide);
    sliderTrack.removeEventListener("translateend", () => { 
      sliderTrack.classList.add("transition")
  });
}

  function leftToRightMove() {
  if (count < 6) {
    count ++;
    console.log(count)
  }
  if (count >= 6) {
    sliderTrack.addEventListener("transitionend", endSlide);
  } else {
    activeDot(count);
  }
  sliderTrack.classList.add("transition");
  changeSlide();
}

  const rightToLeftMove = () => {
    if(count > 0) {
      count--;
    } 
      if (count <= 0) {
        sliderTrack.addEventListener("transitionend", startSlide);
      } else {
        activeDot(count);
      }
      sliderTrack.classList.add("transition");
      changeSlide();
      
  };
  
   
  
  
  for (let i = 0; i < sliderDots.length; i++) {
    sliderDots[i].addEventListener("click", () => {
      count = i + 1;
      changeSlide();
      activeDot(count);
    });
  };

  
  btnNext.addEventListener("click", leftToRightMove);
  btnPrev.addEventListener("click", rightToLeftMove);