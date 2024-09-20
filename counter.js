let counterSection = document.getElementById('counter');
let count = document.querySelectorAll(".count");
let arr = Array.from(count);

let observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      arr.forEach(function(item) {
        let startnumber = 0;
        let targetNumber = parseInt(item.dataset.number);
        let duration = 2500; // 5 seconds

        let incrementPerMs = (targetNumber - startnumber) / duration;

        function counterup() {
          startnumber += incrementPerMs * 50;
          item.innerHTML = Math.round(startnumber);

          if(startnumber >= targetNumber) {
            clearInterval(stop);
          }
        }

        let stop = setInterval(counterup, 50);
      });

      // Once the counting animation starts, stop observing the counter section
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0 });

observer.observe(counterSection);
