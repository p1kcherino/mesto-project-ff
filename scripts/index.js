
const cardTemplate = document.querySelector('#card-template').content;

const placesList = document.querySelector('.places__list');

function createCard(item) {
 const card = cardTemplate.querySelector('.card').cloneNode(true);
 card.querySelector('.card__title').textContent = item.name;
 card.querySelector('.card__image').src = item.link;
 card.querySelector('.card__delete-button').onclick = function(cardRemove) {
 let element = cardRemove.target.closest('.card');
 element.remove();
 }

 return card;
}

initialCards.forEach(function(item){
 placesList.append(createCard(item))
})




