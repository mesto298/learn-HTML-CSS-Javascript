// Create some content
document.body.appendChild(document.createTextNode("supercalifragilisticexpialidocious ".repeat(1000)));
let bar = document.querySelector("#progress"); 

window.addEventListener("scroll", () => { 
    let max = document.body.scrollHeight - innerHeight;
    console.log(document.body.scrollHeight, innerHeight);
    bar.style.width = `${(pageYOffset / max) * 100}%`; 
}); 

// scrollHeight: height of whole document 
// innerHeight: heiht of window's viewport (include scroll bar) (clientHeight: not include scroll bar)
// pageYOffset: dis from start of page to start of viewport

