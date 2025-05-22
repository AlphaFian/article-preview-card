const shareButton = document.querySelector("#share-button");
const shareBox = document.querySelector("#share-box");
const shareButtonClose = document.querySelector("#share-button-c");
shareButton.addEventListener("click", () => {
  shareBox.classList.toggle("hidden");
});
shareButtonClose.addEventListener("click", () => {
  shareBox.classList.toggle("hidden");
});
