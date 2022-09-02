import trie from "./trie";

const input = document.getElementById("input");

function onChange(e) {
  const list = document.getElementById("ul");
  list.innerHTML = "";

  const input = e.target.value;
  const value = input.split(" ").pop();

  const characters = trie.auto_complete(value);

  /*
  characters.forEach(character => {
    const listitem = document.createElement("li")
    listitem.innerHTML = value + character
    list.appendChild(listitem)
  })
  */
}

input.addEventListener("input", onChange);
