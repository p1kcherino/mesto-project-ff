
const cardTemplate = document.querySelector("#card-template").content;

export function createCard(item, removeCard, likeCard,handleImageClick) {
  const card = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = card.querySelector(".card__image");
  const removeButton = card.querySelector(".card__delete-button");
  const cardLikeButton = card.querySelector(".card__like-button");
  const likeCount = card.querySelector(".card__like-count");

  card.querySelector(".card__title").textContent = item.name;
  cardImage.alt = item.name;
  cardImage.src = item.link;
  removeButton.addEventListener("click", () => removeCard(card));
  cardLikeButton.addEventListener("click", likeCard);
  cardImage.addEventListener("click", () => {
    handleImageClick(item);
  });
  cardLikeButton.addEventListener('click', () => {
   const currentCount = parseInt(likeCount.textContent);
   likeCount.textContent = currentCount +1;
  })
  return card;
}

export function removeCard(card) {
  card.remove();
}

export function likeCard(event) {
  event.target.classList.toggle("card__like-button_is-active");
}
