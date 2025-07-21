
  window.addEventListener("scroll", function () {
    const fill = document.getElementById("scroll-fill");
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight ? (scrollTop / docHeight) * 100 : 0;

    fill.style.height = `${scrollPercent}%`;
  });

  // Initialize on page load
  window.dispatchEvent(new Event("scroll"));

  

