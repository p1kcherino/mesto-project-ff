const cardTemplate = document.querySelector("#card-template").content;

const placesList = document.querySelector(".places__list");

function createCard(item, cardRemove) {
  const card = cardTemplate.querySelector(".card").cloneNode(true);
  card.querySelector(".card__title").textContent = item.name;
  card.querySelector(".card__image").alt = item.name;
  card.querySelector(".card__image").src = item.link;
  const removeButton = card.querySelector(".card__delete-button");
  removeButton.addEventListener("click", function () {
    cardRemove = removeCard(card);
    function removeCard(card) {
      card.remove();
    }
  });

  return card;
}

initialCards.forEach(function (item) {
  placesList.append(createCard(item));
});
