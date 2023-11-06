const tagsElement =
  document.getElementById("tags");
const textArea =
  document.querySelector("textarea");

textArea.focus();
textArea.addEventListener("keyup", (element) => {
  createTags(element.target.value);
  if (element.key === "Enter") {
    setTimeout(() => {
      element.target.value;
    }, 10);
    randomSelect();
  }
});

function createTags(input) {
  const tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());

  tagsElement.innerHTML = "";
  tags.forEach((tag) => {
    const tagElement =
      document.createElement("span");
    tagElement.classList.add("tag");
    tagElement.innerText = tag;
    tagsElement.appendChild(tagElement);
  });
}

function randomSelect() {
  const times = 40;
  const interval = setInterval(() => {
    const randomTag = pickRandomTag();
    highlightTag(randomTag),
      setTimeout(() => {
        unHighlight(randomTag);
      }, 100);
  }, 150);

  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const randomTag = pickRandomTag();
      highlightTag(randomTag);
    }, 100);
  }, times * 100);
}

function pickRandomTag() {
  const tags = document.querySelectorAll(".tag");
  return tags[
    Math.floor(Math.random() * tags.length)
  ];
}

function highlightTag(tag) {
  tag.classList.add("highlight");
}

function unHighlight(tag) {
  tag.classList.remove("highlight");
}
