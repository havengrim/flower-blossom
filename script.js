window.onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    document.querySelector('.flowers').style.display = 'block'; // Show the flowers
    document.querySelector('.loading-text').style.display = 'none'; // Hide the loading text
    clearTimeout(c);
  }, 3000);
};