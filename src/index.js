import './pages/index.css';
import { initialCards  } from './script/cards.js';
import { openPopup, closePopup } from './script/modal.js';

const cardTemplate = document.querySelector("#card-template").content;
const placesList = document.querySelector(".places__list");

function createCard(item, cardRemove, cardLike) {
  const card = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = card.querySelector(".card__image");
  const removeButton = card.querySelector(".card__delete-button");
  const cardLikeButton = card.querySelector(".card__like-button");

  card.querySelector(".card__title").textContent = item.name;
  cardImage.alt = item.name;
  cardImage.src = item.link;
  removeButton.addEventListener("click", () => cardRemove(card));
  cardLikeButton.addEventListener('click', cardLike);
  return card;
}

function cardRemove(card) {
  card.remove();
}

initialCards.forEach(function (item) {
  placesList.append(createCard(item, cardRemove, cardLike));
});

function cardLike(event) {
 event.target.classList.toggle("card__like-button_is-active")
}

const popupTypeEdit = document.querySelector(".popup_type_edit");
const popupButtonClose = popupTypeEdit.querySelector(".popup__close");
const popupForm = popupTypeEdit.querySelector(".popup__form");
const inputName = popupTypeEdit.querySelector(".popup__input_type_name");
const inputDescription = popupTypeEdit.querySelector(".popup__input_type_description");
const profileEditButton = document.querySelector(".profile__edit-button");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

profileEditButton.addEventListener('click', () => {
 inputName.value = profileTitle.textContent;
 inputDescription.value = profileDescription.textContent;
 openPopup(popupTypeEdit); 
});

function handleFormSubmit(event){ 
 event.preventDefault();
 profileTitle.textContent = inputName.value;
 profileDescription.textContent = inputDescription.value;
 closePopup(popupTypeEdit);
}

popupForm.addEventListener('submit', handleFormSubmit);
popupButtonClose.addEventListener('click', function() {
 closePopup(popupTypeEdit);
});

const popupTypeNewCard = document.querySelector('.popup_type_new-card');
const popupCloseTypeNewCard = popupTypeNewCard.querySelector('.popup__close');
const popupFormNewCard = popupTypeNewCard.querySelector('.popup__form');
const inputNameNewCard = popupTypeNewCard.querySelector('.popup__input_type_card-name');
const inputUrlImageNewCard = popupFormNewCard.querySelector('.popup__input_type_url');
const profileAddButtonNewCard = document.querySelector('.profile__add-button');

profileAddButtonNewCard.addEventListener('click', () => {
 openPopup(popupTypeNewCard);
})

popupCloseTypeNewCard.addEventListener('click', function() {
 closePopup(popupTypeNewCard);
});

function addCardNew(event) {
 event.preventDefault();
 const newCard = {
  link: inputUrlImageNewCard.value,
  name: inputNameNewCard.value
 };
 placesList.prepend(createCard(newCard, cardRemove, cardLike));
 closePopup(popupTypeNewCard);
 popupFormNewCard.reset();
}

popupFormNewCard.addEventListener('submit', addCardNew);


