const enhance = id => {
    const element = document.getElementById(id);
    const text = element.innerText.split("");

    element.innerText = ""; // Clear the original text

    text.forEach((value, index) => {
        const span = document.createElement("span");
        span.className = "letter";
        span.innerText = value;

        // // Apply `special` class based on the pattern
        // if ((index % 4) === 0 || (index % 4) === 1) {
        //     // Apply special animation
        //     span.classList.add('special');
        // }

        // // Set the animation delay to cycle through the text
        // span.style.animationDelay = `${(index * 0.3) % 1.5}s`;

        element.appendChild(span);
    });
};

document.addEventListener("DOMContentLoaded", () => {
    enhance("first-name");
    enhance("last-name");

    // Synchronize hover effects
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');

    const addHover = () => {
        firstName.classList.add('hover');
        lastName.classList.add('hover');
        };

    const removeHover = () => {
        firstName.classList.remove('hover');
        lastName.classList.remove('hover');
        // linkprojects.classList.remove('hover');
    };

    firstName.addEventListener('mouseenter', addHover);
    firstName.addEventListener('mouseleave', removeHover);

    lastName.addEventListener('mouseenter', addHover);
    lastName.addEventListener('mouseleave', removeHover);


});


document.querySelectorAll('.fancy').forEach(element => {
    element.addEventListener('mouseover', () => {
        document.body.classList.add('dimmed');
    });
    element.addEventListener('mouseout', () => {
        document.body.classList.remove('dimmed');
    });
});
