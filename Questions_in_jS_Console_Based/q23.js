//Accept an integer and Print \Hello World\" n times"

let input = parseInt(prompt('Number..'));

((n) => {
    for (let i = 0; i < n; i++) {
        alert(`Hello World..${i} ${n}`);
    }
})(input);