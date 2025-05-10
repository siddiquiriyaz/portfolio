<script>
  const counter = document.querySelector('.screen-counter');
  const screenshots = document.querySelectorAll('.screenshot');
  const container = document.querySelector('.screenshots');

  let currentIndex = 0;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const index = Array.from(screenshots).indexOf(entry.target);
        if (index !== currentIndex) {
          currentIndex = index;
          counter.textContent = `${index + 1}/${screenshots.length}`;
        }
      }
    });
  }, {
    root: container,
    threshold: 0.5,
  });

  screenshots.forEach(s => observer.observe(s));


</script>
