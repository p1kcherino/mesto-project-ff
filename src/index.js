import "./pages/index.css";
import { initialCards } from "./script/cards.js";
import { openPopup, closePopup } from "./script/modal.js";
import { createCard, removeCard, likeCard } from "./companents/card.js";
import {
  enableValidation,
  clearValidation,
  isValidUrl,
  showInputError,
  toggleButtonState,
} from "./script/validation.js";

const placesList = document.querySelector(".places__list");

initialCards.forEach(function (item) {
  placesList.append(createCard(item, removeCard, likeCard, handleImageClick));
});

const popupTypeEdit = document.querySelector(".popup_type_edit");
const profileForm = popupTypeEdit.querySelector(".popup__form");
const inputName = popupTypeEdit.querySelector(".popup__input_type_name");
const inputDescription = popupTypeEdit.querySelector(
  ".popup__input_type_description"
);
const profileEditButton = document.querySelector(".profile__edit-button");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

profileEditButton.addEventListener("click", () => {
  inputName.value = profileTitle.textContent;
  inputDescription.value = profileDescription.textContent;
  clearValidation(popupTypeEdit, validationConfig);
  openPopup(popupTypeEdit);
});

function handleProfileFormSubmit(event) {
  event.preventDefault();
  profileTitle.textContent = inputName.value;
  profileDescription.textContent = inputDescription.value;
  clearValidation(popupTypeEdit, validationConfig);
  closePopup(popupTypeEdit);
}

profileForm.addEventListener("submit", handleProfileFormSubmit);

const popupTypeNewCard = document.querySelector(".popup_type_new-card");
const popupFormNewCard = popupTypeNewCard.querySelector(".popup__form");
const inputNameNewCard = popupTypeNewCard.querySelector(
  ".popup__input_type_card-name"
);

const inputUrlImageNewCard = popupFormNewCard.querySelector(
  ".popup__input_type_url"
);

const profileAddButtonNewCard = document.querySelector(".profile__add-button");

profileAddButtonNewCard.addEventListener("click", () => {
  clearValidation(popupTypeNewCard, validationConfig);
  openPopup(popupTypeNewCard);
});

function addCardNew(event) {
  event.preventDefault();
  const newCard = {
    link: inputUrlImageNewCard.value,
    name: inputNameNewCard.value,
  };

  placesList.prepend(
    createCard(newCard, removeCard, likeCard, handleImageClick)
  );
  popupFormNewCard.reset();
  clearValidation(popupTypeNewCard, validationConfig);
  closePopup(popupTypeNewCard);
}

popupFormNewCard.addEventListener("submit", addCardNew);

const imagePopup = document.querySelector(".popup_type_image");
const popupImage = document.querySelector(".popup__image");
const popupCaption = document.querySelector(".popup__caption");

function handleImageClick(item) {
  popupImage.src = item.link;
  popupImage.alt = item.name;
  popupCaption.textContent = item.name;
  openPopup(imagePopup);
}
const closeButton = document.querySelectorAll(".popup__close");

closeButton.forEach((button) => {
  button.addEventListener("click", function () {
    closePopup(button.closest(".popup_is-opened"));
  });
});

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "error_active",
};

enableValidation(validationConfig);

const profileImage = document.querySelector('.profile__image');
const popupTypeAvatar = document.querySelector('.popup_type_avatar');

profileImage.addEventListener('click', () => {
 openPopup(popupTypeAvatar);
});
