//animation 
var isScrolling = false;
    window.addEventListener("scroll", throttleScroll, false);
    function throttleScroll(e) {
      if (isScrolling == false) {
        window.requestAnimationFrame(function() {
          scrolling(e);
          isScrolling = false;
        });
      }
      isScrolling = true;
    }
    function scrolling(e) {
   
        if (isFullyVisible(animationBox) || isFullyVisible(animationBoxNext)) {
          animationBox.classList.add("active");
          animationBoxNext.classList.add("active");
        }
      }
    
    var animationBox = document.querySelector(".animation");
    var animationBoxNext = document.querySelector(".animation-next");
    function isPartiallyVisible(el) {
        var elementBoundary = el.getBoundingClientRect();  
        var top = elementBoundary.top;
        var bottom = elementBoundary.bottom;
        var height = elementBoundary.height;
   
        return ((top + height >= 0) && (height + window.innerHeight >= bottom));
      }
   
      function isFullyVisible(el) {
        var elementBoundary = el.getBoundingClientRect();
   
        var top = elementBoundary.top;
        var bottom = elementBoundary.bottom;
   
        return ((top >= 0) && (bottom <= window.innerHeight));
      }
