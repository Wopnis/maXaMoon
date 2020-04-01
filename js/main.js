
// scroll smooth
{
const anchors = document.querySelectorAll('a[href*="#"]');
// console.log(anchors);

for (let anchor of anchors) {
    anchor.addEventListener('click', (event) => {
        event.preventDefault();
        const blockId = anchor.getAttribute('href');
        document.querySelector('' + blockId).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
}
}

// modal ===========

