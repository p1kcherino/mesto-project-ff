import { deletLikeCardApi, likeCardApi, deleteCardApi } from "../script/api";

const cardTemplate = document.querySelector("#card-template").content;

export function createCard(
  item,
  removeCard,
  likeCard,
  handleImageClick,
  userId
) {
  const card = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = card.querySelector(".card__image");
  const removeButton = card.querySelector(".card__delete-button");
  const cardLikeButton = card.querySelector(".card__like-button");
  const likeCount = card.querySelector(".card__like-count");

  //Присваеваем звачение
  card.querySelector(".card__title").textContent = item.name;
  const cardId = item._id;
  cardImage.alt = item.name;
  cardImage.src = item.link;
  likeCount.textContent = item.likes.length;

  //Закрепляем состояние лайка за id
  const likeId = item.likes.some(function (likes) {
    return likes._id === userId;
  });
  if (likeId) {
    cardLikeButton.classList.add("card__like-button_is-active");
  } else {
    cardLikeButton.classList.remove("card__like-button_is-active");
  }

  // Обработчик на удлание карточки по клику
  removeButton.addEventListener("click", () => removeCard(card, cardId));

  //Обработчик на раскрытие картинки в карточки
  cardImage.addEventListener("click", () => {
    handleImageClick(item);
  });

  //Обработчик лакйка на клик сердечка
  cardLikeButton.addEventListener("click", () => {
    likeCard(cardLikeButton, likeCount, cardId);
  });
  if (item.owner._id !== userId) {
    removeButton.remove();
  }
  return card;
}

//Функция лайка и дизлайка карточки
export function likeCard(cardLikeButton, likeCount, cardId) {
  if (cardLikeButton.classList.contains("card__like-button_is-active")) {
    deletLikeCardApi(cardId).then((res) => {
      cardLikeButton.classList.remove("card__like-button_is-active");
      likeCount.textContent = res.likes.length;
    });
  } else {
    likeCardApi(cardId).then((res) => {
      cardLikeButton.classList.add("card__like-button_is-active");
      likeCount.textContent = res.likes.length;
    });
  }
}

//Функция удаления карточки
export function removeCard(card, cardId) {
  deleteCardApi(cardId).then(() => {
    card.remove();
  });
}
