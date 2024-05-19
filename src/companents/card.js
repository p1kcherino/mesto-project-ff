import { closePopup, openPopup } from "../script/modal";

const cardTemplate = document.querySelector("#card-template").content;
const imagePopup = document.querySelector(".popup_type_image");
const popupImage = document.querySelector('.popup__image');
const popupCaption = document.querySelector(".popup__caption");
const popupImgClose = imagePopup.querySelector(".popup__close");
export function createCard(item, cardRemove, cardLike) {
  const card = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = card.querySelector(".card__image");
  const removeButton = card.querySelector(".card__delete-button");
  const cardLikeButton = card.querySelector(".card__like-button");

  card.querySelector(".card__title").textContent = item.name;
  cardImage.alt = item.name;
  cardImage.src = item.link;
  removeButton.addEventListener("click", () => cardRemove(card));
  cardLikeButton.addEventListener("click", cardLike);

  cardImage.addEventListener('click', () => {
   popupImage.src = cardImage.src;
   popupImage.alt = cardImage.alt;
   popupCaption.textContent = card.textContent;
   openPopup(imagePopup);
  
  popupImgClose.addEventListener('click', function(){
   closePopup(imagePopup);
  })
 });


 
  return card;
}

export function cardRemove(card) {
  card.remove();
}

export function cardLike(event) {
  event.target.classList.toggle("card__like-button_is-active");
}
