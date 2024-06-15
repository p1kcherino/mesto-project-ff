export {
 getAddNewCard, getInfoUser, addCardServer, getUserDataServer, likeCardApi, deletLikeCardApi, deleteCardApi, changeAvatar
}
const PATH = {
 baseUrl: 'https://mesto.nomoreparties.co/v1/wff-cohort-15',
 headers: {
   authorization: 'b2d1cf23-76fd-4183-b665-dc4c4fcbeb86',
   'Content-Type': 'application/json'
 }
}

const handleRes = (res) => {
 if (res.ok) {
  return res.json();
 } else {
  return Promise.reject(`Что-то пошло не так: ${res.status}`);
 }
}

const getAddNewCard = () => {
 return fetch(`${PATH.baseUrl}/cards`, {
  headers:PATH.headers
 }) .then(handleRes);
};

const getInfoUser = () => {
 return fetch(`${PATH.baseUrl}/users/me`, {
  headers: PATH.headers
 }) .then(handleRes);
}; 


const  addCardServer = (name, link) => {
 return fetch(`${PATH.baseUrl}/cards`, {
   method: "POST",
   headers: PATH.headers,
   body: JSON.stringify(name, link),
 }).then(handleRes);
}

const getUserDataServer = (name, about) => {
 return fetch(`${PATH.baseUrl}/users/me`, {
   method: "PATCH",
   headers: PATH.headers,
   body: JSON.stringify({
     name: name,
     about: about,
   })
 }).then(handleRes);
}

const likeCardApi = (cardId) => {
 return fetch(`${PATH.baseUrl}/cards/likes/${cardId}`, {
  method: 'PUT',
  headers: PATH.headers
 }).then(handleRes);
}

const deletLikeCardApi = (cardId) => {
 return fetch(`${PATH.baseUrl}/cards/likes/${cardId}`, {
  method: 'DELETE',
  headers: PATH.headers
 }).then(handleRes);
}

const deleteCardApi = (cardId) => {
 return fetch(`${PATH.baseUrl}/cards/${cardId}`, {
  method: 'DELETE',
  headers: PATH.headers
 }).then(handleRes);
}

const changeAvatar = (avatar) => {
 return fetch(`${PATH.baseUrl}/users/me/avatar`, {
  method: 'PATCH',
  headers: PATH.headers,
  body: JSON.stringify({
   avatar: avatar
  })
 }).then(handleRes)
}