const showSideBar = document.querySelector('.side-bar').style;

document.getElementById('openSideBTN').addEventListener('click', function(){
    showSideBar.transform = "translateX(0px)";
})

document.querySelector('.closebtn').addEventListener('click', function () {
    showSideBar.transform = "translateX(-300px)";
})