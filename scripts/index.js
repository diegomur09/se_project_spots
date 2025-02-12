const initialCards = [
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },
  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },
  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },
  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },
  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
];

const profileEditButton = document.querySelector(".profile__edit-btn");
const profileName = document.querySelector(".profile__name");
const profileDesc = document.querySelector(".profile__description");

const editProfileModal = document.querySelector("#edit-profile-modal");
const editFormElement = editProfileModal.querySelector(".modal__form");
const modalCloseButton = editProfileModal.querySelector(".modal__close-btn");
const editModalName = editProfileModal.querySelector("#profile-name-input");
const editModalDesc = editProfileModal.querySelector(
  "#profile-description-input"
);

const cardTemplate = document.querySelector("#card-template");
const cardsList = document.querySelector(".cards__list");

function getCardElement(data) {
  const cardElement = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);

  const cardNameEle = cardElement.querySelector(".card__title");
  const cardImageEle = cardElement.querySelector(".card__image");
  cardNameEle.textContent = data.name;
  cardImageEle.src = data.link;
  cardImageEle.alt = data.name;

  return cardElement;
}

function openModal() {
  editProfileModal.classList.add("modal_opened");
  editModalName.value = profileName.textContent;
  editModalDesc.value = profileDesc.textContent;
}

function closeModal() {
  editProfileModal.classList.remove("modal_opened");
}
function handleEditFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = editModalName.value;
  profileDesc.textContent = editModalDesc.value;
  closeModal();
}

profileEditButton.addEventListener("click", openModal);
modalCloseButton.addEventListener("click", closeModal);
editFormElement.addEventListener("submit", handleEditFormSubmit);

for (let i = 0; i < initialCards.length; i++) {
  const cardElement = getCardElement(initialCards[i]);
  cardsList.prepend(cardElement);
}
