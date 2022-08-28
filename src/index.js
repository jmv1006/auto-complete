import trie from './trie'

const input = document.getElementById('input')

function onChange(e) {
  const list = document.getElementById("ul")
  list.innerHTML = ""

  const input = e.target.value;
  const value = input.split(" ").pop();

  const characters = trie.complete(value);

  if(characters.length === 0) return

  characters.forEach(character => {
    const listitem = document.createElement("li")
    listitem.innerHTML = value + character
    list.appendChild(listitem)
  })
}

input.addEventListener('input', onChange)
