// Scroll.js
const Scroll = () => {
  const handleSmoothScroll = (e) => {
      e.preventDefault(); // Prevent the default anchor behavior
      const targetId = e.currentTarget.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      // Check if the target section exists before scrolling
      if (targetSection) {
          targetSection.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
          });
      }
  };

  return { handleSmoothScroll };
};

export default Scroll;
