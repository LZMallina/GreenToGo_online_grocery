const openDelivery = document.querySelector('.delivery-form').style;

const closeDelivery = document.querySelector('.delivery-form').style;

const openPickup = document.querySelector('.pickup-form').style;

const closePickup = document.querySelector('.pickup-form').style;

document.getElementById('delivery-btn').addEventListener('click', function () {
    closePickup.display = "none";
    openDelivery.display = "block";
})

document.getElementById('pickup-btn').addEventListener('click', function () {
    closeDelivery.display = "none";
    openPickup.display = "block";   
})

/**function to control signIn-modal**/

const openSignin = document.querySelector('.signIn-modal').style;
document.getElementById('sign-in').addEventListener('click', function () {
    openSignin.display = "block";
})
document.querySelector('.closeSignin').addEventListener('click', function () {
    openSignin.display = "none";
})
document.getElementById('sign-in2').addEventListener('click', function () {
    openSignin.display = "block";
})