import words from "./words";

class Trie {
  constructor(root) {
    this.root = root;
  }

  insert(word) {
    let node = this.root;
    for (let char in word) {
      if (!(word[char] in node.characters))
        node.characters[word[char]] = new TrieNode(word[char]);
      node = node.characters[word[char]];
    }
    node.isEndOfWord = true;
  }

  auto_complete(word) {
    if (word.length < 1) return [];
    let node = this.root;

    //updating the current node to the last character of inputted string
    for (let letter in word) {
      if (word[letter] in node.characters) {
        node = node.characters[word[letter]];
      }
    }

    let possibleWords = [];

    for (let character in node.characters) {
      const possiblePath = this.find_end_path(node.characters[character]);
      if (possiblePath) possibleWords.push(word.concat(possiblePath));
    }

    console.log(possibleWords);

    return [];
  }

  find_end_path(node) {
    if (node.isEndOfWord) return node.char;
    //in this case, keep searching for an end of word
  }
}

class TrieNode {
  constructor(char) {
    this.char = char;
    this.characters = {};
    this.isEndOfWord = false;
  }
}

const root = new TrieNode("");

const trie = new Trie(root);

words.forEach((word) => trie.insert(word));

export default trie;
