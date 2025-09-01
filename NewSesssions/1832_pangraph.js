function pangraph(sentence) {

    let set = new Set();
    for (let i = 0; i < sentence.length; i++) {
        let ch = sentence.charAt(i).toLowerCase();
        set.add(ch);
    }
    return set.size === 26;
}


console.log(pangraph('thequickbrownfoxjumpsoverthelazydog'));
console.log(pangraph('thequihelazydog'));