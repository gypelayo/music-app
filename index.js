window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");

    //Sound stuff
    pads.forEach((pad, index) => {
        pad.addEventListener("click", function () {
            sounds[index].currentTime = 0;
            sounds[index].play();
            pad.style.backgroundColor = "#e6e6d5";
            createBubbles(index, pad);
        });
    });

    //Animation stuff
    const createBubbles = (index, div) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.position = div.position;
        bubble.style.backgroundColor = "#e6e6d5";
        bubble.style.animation = 'jump 1s ease';
        bubble.addEventListener('animationend', function () {
            visual.removeChild(this);
            div.style.backgroundColor = "#fffef7";
        });
    }

});
