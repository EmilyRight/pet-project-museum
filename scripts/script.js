const progress = document.querySelectorAll('.progress_bar');
  
progress.forEach((bar) => {
  bar.addEventListener('input', function() {
    const value = this.value;
    this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`
  })
})
 