import axios from "axios";

const addCommentForm = document.getElementById("jsAddComment");
const commentList = document.getElementById("jsCommentList");
const commentNumber = document.getElementById("jsCommentNumber");
const deleteCommentBtn = document.querySelector(".deleteCommentBtn");
// const commentsList = document.querySelector(".commentsList");

const increaseNumber = () => {
  commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) + 1;
};

const addComment = (comment) => {
  const li = document.createElement("li");
  // const div = commentList.createElement("div");
  const span = document.createElement("span");
  // div.innerHTML = "loggedUser.id";
  span.innerHTML = comment;
  li.appendChild(span);
  commentList.prepend(li); //prepend는 노드를 첫번째로 생성하게 해준다.
  increaseNumber();
};

const sendComment = async (comment) => {
  const videoId = window.location.href.split("/videos/")[1];
  const response = await axios({
    url: `/api/${videoId}/comment`,
    method: "POST",
    data: {
      comment,
    },
  });
  if (response.status === 200) {
    addComment(comment);
  }
};

const handleSubmit = (event) => {
  event.preventDefault();
  const commentInput = addCommentForm.querySelector("input");
  const comment = commentInput.value;
  sendComment(comment);
  commentInput.value = "";
};

//Delete Comment Area

const decreaseNumber = () => {
  commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) - 1;
};

const handleClick = (event) => {
  event.preventDefault();
  const deleteComment = document.querySelector(".commentsList");
  commentList.removeChild(deleteComment);
  decreaseNumber();
};

/////////////////////////////////////////////////////////

function init() {
  addCommentForm.addEventListener("submit", handleSubmit);
  deleteCommentBtn.addEventListener("click", handleClick);
}

if (addCommentForm) {
  init();
}
