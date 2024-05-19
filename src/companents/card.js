const cardTemplate = document.querySelector("#card-template").content;
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
  return card;
}

export function cardRemove(card) {
  card.remove();
}

export function cardLike(event) {
  event.target.classList.toggle("card__like-button_is-active");
}
