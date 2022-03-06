import dictionary from "./dictionary";
const trie: any = {};

for(const word of dictionary) {
    let node = trie;
    for(const letter of word) {
        let nextNode = node[letter];
        if(!nextNode) {
            nextNode = node[letter] = {};
        }
        node = nextNode;
    }
    node._ = true;
}

export default trie;