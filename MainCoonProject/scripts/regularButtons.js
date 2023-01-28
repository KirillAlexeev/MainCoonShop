let watchCatsButton = document.querySelector('#watch-cats-button');
let petsSection = document.querySelector('#cats-section');
let seeMoreCatsButton = document.querySelector('#see-more-cats-button');
let modal = document.querySelector('.more-cats-modal');
let overlay = document.querySelector('.overlay');
let closeModalBtn = modal.querySelector('.close-btn');


watchCatsButton.onclick = function () {
    petsSection.scrollIntoView({behavior: "smooth"});

}

seeMoreCatsButton.onclick = function () {
    showModal();
}

closeModalBtn.addEventListener('click', hideModal)
overlay.addEventListener("click", hideModal);

function showModal(){
    modal.classList.remove('is-hidden');
    overlay.classList.remove('is-hidden');
}

function hideModal(){
    modal.classList.add('is-hidden');
    overlay.classList.add('is-hidden');
}
