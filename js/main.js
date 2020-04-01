
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
{
    const modal = document.getElementById('contactModal'),
          btn = document.getElementById('contactBtn')
          cross = document.querySelector('.close')
          contactsSocialBtn = document.querySelector('.nav_btn'),
          contactsSocialBlock = document.querySelector('.social'),
          list = document.querySelector('.list');

//  console.log("clicked");   

btn.addEventListener('click', (event) => {
    event.preventDefault();
    modal.style.display = 'block';
});
cross.addEventListener('click', (event) => {
    event.preventDefault();
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if(event.target === modal) {
        modal.style.display = 'none';
    }
});

contactsSocialBtn.addEventListener('click', (event) => {
    contactsSocialBlock.style.cssText = `
        position: absolute;
        left: 700px;
        top: 2400px;
        transform: scale(2.5);
        text-decoraition: outline;
    `;
});



}

