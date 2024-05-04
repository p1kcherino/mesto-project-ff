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
  }; 

initialCards.forEach(function (item) {
  placesList.append(createCard(item, cardRemove));
});
