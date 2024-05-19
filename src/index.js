import './pages/index.css';
import { initialCards  } from './script/cards.js';
import { openPopup, closePopup } from './script/popap.js';

const cardTemplate = document.querySelector("#card-template").content;
const placesList = document.querySelector(".places__list");

function createCard(item, cardRemove) {
  const card = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = card.querySelector(".card__image");
  const removeButton = card.querySelector(".card__delete-button");

  card.querySelector(".card__title").textContent = item.name;
  cardImage.alt = item.name;
  cardImage.src = item.link;
  removeButton.addEventListener("click", () => cardRemove(card));

  return card;
}

function cardRemove(card) {
  card.remove();
}

initialCards.forEach(function (item) {
  placesList.append(createCard(item, cardRemove));
});

const popupTypeEdit = document.querySelector(".popup_type_edit");
const popupButtonClose = popupTypeEdit.querySelector(".popup__close");
const popupForm = popupTypeEdit.querySelector(".popup__form");
const inputName = document.querySelector(".popup__input_type_name");
const inputDescription = document.querySelector(".popup__input_type_description");
const profileEditButton = document.querySelector(".profile__edit-button");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

function handleFormSubmit(event){ 
 event.preventDefault();
 profileTitle.textContent = inputName.value;
 profileDescription.textContent = inputDescription.value;
 closePopup(popupTypeEdit);
}

profileEditButton.addEventListener('click', () => {
 inputName.value = profileTitle.textContent;
 inputDescription.value = profileDescription.textContent;
 openPopup(popupTypeEdit); 
});

popupForm.addEventListener('submit', handleFormSubmit);
popupButtonClose.addEventListener('click', function() {
 closePopup(popupTypeEdit);
});


