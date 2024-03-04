//challenge 1
function createHeader(num, text) {
  if (num >= 7) {
    alert(`${num} is too high of a number. 1-6 only`);
  } else {
    const newHeader = document.createElement(`h${num}`);
    newHeader.innerText = String(text);
    return newHeader;
  }
}

function appendElement(func) {
  document.body.appendChild(func);
}

appendElement(createHeader(1, "text"));

//challenge 2

function dropdownFunction() {
  const dropdown = document.querySelector(".dropdown");

  if (dropdown.style["display"] === "none") {
    dropdown.style["display"] = "block";
  } else {
    dropdown.style["display"] = "none";
  }
}
