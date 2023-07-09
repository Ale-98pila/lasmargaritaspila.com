const isMobile = () => {
  if (window.matchMedia("(max-width: 768px)").matches) {
    document.querySelectorAll("#carouselCaption").forEach((caption) => {
      caption.remove()
    });
  } else {
    document.querySelector("#carCol").classList.remove("col-md-6");
    document.querySelector("#carColNot").remove()
  }
};

isMobile()