  // Progress bar grows as you scroll down
        window.addEventListener('scroll', function () {
            const bar = document.getElementById('scroll-bar');
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = docHeight ? (scrollTop / docHeight) : 0;
            bar.style.transform = `scaleX(${progress})`;
        });
        // Initialize on load
        window.dispatchEvent(new Event('scroll'));