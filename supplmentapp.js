/**This app contains all the functions that controls the open and close buttons */

/**functions for nav-bar */
const openNav = document.querySelector('.nav-bar-open');

document.getElementById('openNavBTN').addEventListener("click", function () {
    openNav.classList.toggle('showNav');
});

/**function to control chatbox */
let chatNow = document.getElementById('chat').style;

function openChat() {
    chatNow.display = "block";
}

function closeChat() {
    chatNow.display = "none";
}

/**function to control map**/

const openMap = document.querySelector('.map').style;
document.getElementById('location').addEventListener('click', function () {
    openMap.display = "block";
})
document.querySelector('.closeMap').addEventListener('click', function () {
    openMap.display = "none";
})

/**function to control signIn-modal**/

const openSignin = document.querySelector('.signIn-modal').style;
document.getElementById('sign-in').addEventListener('click', function () {
    openSignin.display = "block";
})
document.querySelector('.closeSignin').addEventListener('click', function () {
    openSignin.display = "none";
})

/**onclick of selection links, open produce-container**/

const openProduceContainer = document.querySelector('.produce-container').style;

function openProduce() {
    openProduceContainer.display = "block";
}

document.querySelector('.close-btn').addEventListener('click', function () {
    openProduceContainer.display = "none";
})

/**open modal only when window is activated once*/
/**click to close modal */

//make sure modal opens upon DOM load
const show = document.querySelector('.promotion-modal');

window.addEventListener("DOMContentLoaded", function () {
    show.style.display = "block";
})

const close = document.querySelector('.closeModal');

close.addEventListener('click', function () {
    show.style.display = "none";
})

//Let's try using sessionStorage to remember the close button command so when we divert to a subpage, the promotion modul would not reload

const open_mode = "open";
const close_mode = "close";
const default_mode = "open";

//initiate sessionStorage

initiate();

function initiate() {
    let storeMode = sessionStorage.getItem('mode');

    if (!storeMode) {
        storeMode = default_mode;
        sessionStorage.setItem('mode', default_mode);
    }
    setMode(storeMode);
}

function setMode(mode = default_mode) {
    if (mode === open_mode) {
        show.classList.add(open_mode);
    } else if (mode === close_mode) {
        show.classList.remove(open_mode);
    }
}

//get the close button to toggole sessionStorage

close.addEventListener('click', function () {
    let mode = sessionStorage.getItem('mode');
    if (mode) {
        let newMode = mode == open_mode ? close_mode : open_mode;
        setMode(newMode);
        sessionStorage.setItem('mode', newMode);
    } 
})

 //get the promotion-modal to respond sessionStorage

const current_mode = sessionStorage.getItem('mode');

if (current_mode === 'close') {
    window.addEventListener("DOMContentLoaded", function () {
    show.style.display = "none";
})
}
