const slider = document.querySelector(".image-comparsion__slider input");
const img = document.querySelector(".image-comparsion .after");
const dragLine = document.querySelector(".image-comparsion__slider .drag-line");

slider.oninput = ()=>{
    let sliderVal = slider.value;
    dragLine.style.left = sliderVal + "%";
    img.style.width = sliderVal + "%";
}
