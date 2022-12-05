const buyBtns = document.querySelectorAll('.js-buy-btn');
const modal = document.querySelector('.js-modal');
const closeBtn = document.querySelector('.js-modal-close-btn');
const modalContainer = document.querySelector('.js-modal-container');

// function open modal
function showModalBuyTickets() {
    modal.classList.add('modal-open');
}

// function close modal
function closeModalBuyTickets() {
    modal.classList.remove('modal-open');
}

// listen for click event and execute the function
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showModalBuyTickets);
}

// listen for click event and execute the function
closeBtn.addEventListener('click', closeModalBuyTickets);

modal.addEventListener('click', closeModalBuyTickets);

// Ngăn chặn hành vi nổi bọt từ element modal-container
modalContainer.addEventListener('click', function (event) {
    event.stopPropagation();
})


