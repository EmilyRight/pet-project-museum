const animatedImg = document.querySelectorAll(".animated-img");

if (animatedImg.length > 0) {
    window.addEventListener ("scroll", scrollAnim);
    function scrollAnim() {
        for (let i  = 0; i < animatedImg.length; i++) {
            const animItem = animatedImg[i];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 6;

            let animPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
                animPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((scrollY > animItemOffset - animPoint) && scrollY < animItemOffset + animItemHeight) {
                animItem.classList.add("active");
            } else {
                animItem.classList.remove("active");
            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
            srollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {top: rect.top + scrollTop, left: rect.left + srollLeft}
    }
} 