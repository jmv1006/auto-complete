import words from './words';

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

    complete(word) {
        if(word.length < 1) return [];
        let node = this.root
        let result = [];

        //sets the current node to a node that matches the last character in word
        for(let letter in word) {
            if(word[letter] in node.characters) {
                node = node.characters[word[letter]]
            }
        }
        
        for(let char in node.characters) {
            if(node.characters[char].isEndOfWord) result.push(char)
        }

        return result;
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

words.forEach(word => trie.insert(word))

export default trie