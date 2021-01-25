let slider = document.querySelector('input[type="range"]');

slider.addEventListener("mousemove", () => {
    var x = slider.value;
    var color = 'linear-gradient(90deg, hsl(174, 77%, 80%) ' + x + '%'+', hsl(224, 65%, 95%) ' + x + '%)';
    slider.style.background = color;
});