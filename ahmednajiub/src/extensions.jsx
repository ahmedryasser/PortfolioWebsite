Element.prototype.smoothScrollIntoView = function () {
  window.scrollBy({
    top: this.getBoundingClientRect().top,
    behavior: "smooth",
  });
};
