(function () {
  var sections = document.querySelectorAll(".rubric");
  if (!("IntersectionObserver" in window) || !sections.length) {
    sections.forEach(function (s) { s.classList.add("is-visible"); });
    return;
  }
  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  sections.forEach(function (s) { io.observe(s); });
})();
