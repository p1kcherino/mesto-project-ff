import "./pages/index.css";
import { openPopup, closePopup } from "./script/modal.js";
import { createCard, removeCard, likeCard } from "./companents/card.js";
import { enableValidation, clearValidation } from "./script/validation.js";
import {
  getAddNewCard,
  getInfoUser,
  addCardServer,
  getUserDataServer,
  changeAvatar,
} from "./script/api";

const placesList = document.querySelector(".places__list"); //Место добавлени новых карточек

const popupTypeNewCard = document.querySelector(".popup_type_new-card"); // Попап добавления карточки
const popupTypeAvatar = document.querySelector(".popup_type_avatar"); //Попап редактирования аватарки
const imagePopup = document.querySelector(".popup_type_image"); // Попап для раскрытия фото карточки

const popupFormNewCard = popupTypeNewCard.querySelector(".popup__form"); // Форма добавления карточки
const formAddCard = document.forms["new-place"]; // Форма добавления новой карточки
const formEditAvatar = document.forms["profile-edit-avatar"]; // Форма смены аватарки
const nameInputCard = formAddCard.elements["place-name"]; // Инпут названия новой карточки

const popupImage = document.querySelector(".popup__image"); // Попап раскрытой картинки
const popupCaption = document.querySelector(".popup__caption"); // Название карточки = текст под раскрытой картинкой
const inputEditAvatr = formEditAvatar.querySelector(".popup__input_type_url");
const popupTypeEdit = document.querySelector(".popup_type_edit"); // Попап редактирования профиля
const inputName = popupTypeEdit.querySelector(".popup__input_type_name"); // Инпут имя попапа
const inputDescription = popupTypeEdit.querySelector(
  ".popup__input_type_description"
); //Импут должости попапа
const profileForm = popupTypeEdit.querySelector(".popup__form"); // Форма редактирования провиля
const profileTitle = document.querySelector(".profile__title"); //Имя в DOM
const profileEditButton = document.querySelector(".profile__edit-button"); //Кнопка "Редактировать профиль" в DOM
const profileDescription = document.querySelector(".profile__description"); //Должность в DOM
const profileAddButtonNewCard = document.querySelector(".profile__add-button"); //Кнопка "Добавить новую карточку" в DOM
const profileImage = document.querySelector(".profile__image"); //Аватарка в DOM

const linkInputCard = formAddCard.elements.link; // Ссылка на картинку новой карточки

const buttonFormCard = formAddCard.querySelector(".popup__button"); //Кнопка добавления новой карточки
const buttonFormProfile = popupTypeEdit.querySelector(".popup__button"); //Кнопка добавления нового имяни и должности
const closeButton = document.querySelectorAll(".popup__close"); // Крестик для закрытия попапа
const buttonFormAvatar = popupTypeAvatar.querySelector(".popup__button"); // Кнопка смены аватарки в попапе

//API
let userId = "";
Promise.all([getInfoUser(), getAddNewCard()])
  .then(([userData, initialCards]) => {
    userId = userData._id;
    profileTitle.textContent = userData.name;
    profileDescription.textContent = userData.about;
    profileImage.setAttribute(
      "style",
      `background-image: url('${userData.avatar}')`
    );
    initialCards.forEach((item) => {
      const cardElm = createCard(
        item,
        removeCard,
        likeCard,
        handleImageClick,
        userId
      );
      placesList.append(cardElm);
    });
  })
  .catch((err) => {
    console.log("Ошибка при получении данных:", err);
  });

//Функция редактирования профиля и передачи данных серверу
function handleProfileFormSubmit(event) {
  event.preventDefault();
  saveButton(true, buttonFormProfile);
  const name = inputName.value;
  const job = inputDescription.value;
  getUserDataServer(name, job)
    .then((data) => {
      profileTitle.textContent = data.name;
      profileDescription.textContent = data.about;
      clearValidation(popupTypeEdit, validationConfig);
      closePopup(popupTypeEdit);
      profileForm.reset();
    })
    .catch((err) => {
      console.log("Oшибка при изменении информации профиля:", err);
    })
    .finally(() => {
      saveButton(false, buttonFormProfile);
    });
}
profileForm.addEventListener("submit", handleProfileFormSubmit);

//Функция добавления новой карточки
function addCardNew(event) {
  event.preventDefault();
  const newCard = {
    link: linkInputCard.value,
    name: nameInputCard.value,
  };
  saveButton(true, buttonFormCard);
  addCardServer(newCard)
    .then((item) => {
      const cardElm = createCard(
        item,
        removeCard,
        likeCard,
        handleImageClick,
        userId
      );
      placesList.prepend(cardElm);
      closePopup(popupTypeNewCard);
      formAddCard.reset();
    })
    .catch((err) => {
      console.log("Oшибка при добавлении карточки:", err);
    })
    .finally(() => {
      saveButton(false, buttonFormCard);
    });
}
popupFormNewCard.addEventListener("submit", addCardNew);

//Функция изменения состояния кнопки сохранения
function saveButton(loader, button) {
  if (loader) {
    button.textContent = "Сохранение...";
  } else if (!loader) {
    button.textContent = "Сохранить";
  }
}

//Функция изменения аватара
function editAvatar(event) {
  event.preventDefault();
  saveButton(true, buttonFormAvatar);
  const avatar = inputEditAvatr.value;
  changeAvatar(avatar)
    .then((item) => {
      profileImage.style.backgroundImage = `url(${item.avatar})`;
      closePopup(popupTypeAvatar);
      clearValidation(popupTypeAvatar, validationConfig);
      formEditAvatar.reset();
    })
    .catch((err) => {
      console.log("Oшибка при изменении аватара:", err);
    })
    .finally(() => {
      saveButton(false, buttonFormAvatar);
    });
}

formEditAvatar.addEventListener("submit", editAvatar);

//Раскрытие картинки карточки на весь экран
function handleImageClick(item) {
  popupImage.src = item.link;
  popupImage.alt = item.name;
  popupCaption.textContent = item.name;
  openPopup(imagePopup);
}

//Валидация форм
const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "error_active",
};
enableValidation(validationConfig);

//Обработчики
//Открытие попапа для редактирования профиля по клику на кноку редактировать профиль
profileEditButton.addEventListener("click", () => {
  inputName.value = profileTitle.textContent;
  inputDescription.value = profileDescription.textContent;
  clearValidation(popupTypeEdit, validationConfig);
  openPopup(popupTypeEdit);
});

//Открытие попапа для редактирования аватара по клику на аватарку
profileImage.addEventListener("click", () => {
  openPopup(popupTypeAvatar);
});

//Общий обработчик для закрытие попапов на крестик
closeButton.forEach((button) => {
  button.addEventListener("click", function () {
    closePopup(button.closest(".popup_is-opened"));
  });
});

//Открытие попапа новой карточки по клику на кнопку
profileAddButtonNewCard.addEventListener("click", () => {
  clearValidation(popupTypeNewCard, validationConfig);
  openPopup(popupTypeNewCard);
});
