import trie from "./trie";

export default function verify(word: string): boolean {
    if(typeof word !== 'string') return false;

    let node = trie;
    for(const letter of word.toUpperCase()) {
        node = node[letter];
        if(!node) return false;
    }

    return node._ === true;
}