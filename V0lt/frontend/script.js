const cursorTrail = document.querySelector('#cursor-trail');
const bigHovers = document.querySelectorAll(".big-hover");

function updateCursorTrail(e) {
    // Get the mouse position
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Update the position of the cursor trail
    cursorTrail.style.left = (mouseX - 5) + 'px';
    cursorTrail.style.top = (mouseY - 5) + 'px';

    // Create a rainbow effect by changing the background color
    const hue = (mouseX / window.innerWidth) * 360; // Calculate the hue based on the mouse X position
    cursorTrail.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
}



bigHovers.forEach((element) => {
    element.addEventListener('mouseenter', () => {
        cursorTrail.style.animation = 'grow 0.3s ease-in-out forwards';
        cursorTrail.addEventListener('animationend', () => {
            cursorTrail.style.animation = "none";
            cursorTrail.style.transform = "scale(3)";
        });
        document.documentElement.style.setProperty("--shrink-size", "3");
    });
    element.addEventListener('mouseleave', () => {
        cursorTrail.style.animation = 'grow 0.3s ease-in-out reverse';
        cursorTrail.addEventListener('animationend', () => {
            cursorTrail.style.animation = "none";
            cursorTrail.style.transform = "scale(1)";
        });
        document.documentElement.style.setProperty("--shrink-size", "1");
    });
});

window.addEventListener('mousedown', () => {
    cursorTrail.style.animation = 'shrink 0.3s ease-in-out forwards';
    cursorTrail.addEventListener('animationend', () => {
        cursorTrail.style.animation = "none";
        cursorTrail.style.transform = "scale(.75)";
    });
});
window.addEventListener('mouseup', () => {
    cursorTrail.style.animation = 'shrink 0.3s ease-in-out reverse';
    cursorTrail.addEventListener('animationend', () => {
        cursorTrail.style.animation = "none";
        cursorTrail.style.transform = `scale(${document.documentElement.style.getPropertyValue("--shrink-size")})`;
    });
});

window.addEventListener('mousemove', (e) => {
    updateCursorTrail(e);
});