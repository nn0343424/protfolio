 document.addEventListener("scroll", () => {
    const scrollFill = document.getElementById("scroll-fill");
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    scrollFill.style.height = progress + "%";
  });