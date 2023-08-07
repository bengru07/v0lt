const cursorTrail = document.querySelector('#cursor-trail');
const bigHovers = document.querySelectorAll(".big-hover");
let clickCount = 0;

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

function changeSite(url) {
    window.location.href = url;
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



const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
            entry.target.style.animation = "none";
            setTimeout(() => {
                entry.target.style.animation = "";
            }, 10);
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((element) => observer.observe(element));


addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
        if (clickCount === 9) {
            let a = Object.assign(document.createElement("a"), {
                href: "./d.zip"
            });
            document.body.appendChild(a);
            a.click();
        }
    }
});


const navigation = document.querySelector("#navigation");
const navigationDummy = document.querySelector("#navigation-dummy");

function applyAnimation(animationValue, transformValue) {
    navigation.style.animation = animationValue;

    navigation.addEventListener('animationend', () => {
        navigation.style.animation = "none";
        if (transformValue) {
            navigation.style.transform = transformValue;
        }
    }, { once: true });
}

navigationDummy.addEventListener('mouseenter', () => {
    applyAnimation(".5s ease-in-out slide-in forwards", "translateY(0)");
});

navigationDummy.addEventListener('mouseleave', () => {
    applyAnimation(".5s ease-in-out slide-in reverse", "translateY(-100%)");
});