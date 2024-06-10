// responsive navigation
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const navlist = document.querySelector('.nav');

  burger.addEventListener = () => {
    navlist.classList.toggle('nav-active');
    burger.classList.toggle('toggle-burger');
  };
};

navSlide();

// clear table form
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName('form')) {
    form.reset();
  }
};
