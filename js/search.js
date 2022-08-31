import {sdtClasses} from "./sdtclasses.js"

let list = document.querySelector("#list");
let search = document.querySelector("#search");
let content = document.querySelector(".content-search");

let t="";
let a = 2;

for(let i in sdtClasses) {
    t += `<a target="_blank" href="aulaspdf/aula${a}.html">${sdtClasses[i]}</a>`
    a++
}

list.innerHTML = t;

search.addEventListener('input', function(e){
    t = this.value;
    let r = new RegExp(t,"gi")
    if(t.length === 0) {
        content.style.display="none";
    } else {
        for (let j in sdtClasses){
            if (sdtClasses[j].match(r)) {
                content.style.display="block";
                list.children[j].removeAttribute("style")
            } else {
                
                list.children[j].style.display="none";
            }
        }
    }
})
