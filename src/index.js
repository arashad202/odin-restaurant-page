import "./styles.css";
import { HomepageContent } from "./modules/homepage.js";
import { MenuContent } from "./modules/menu.js"

const content = document.querySelector('#content');
const homeBtn = document.querySelector("#homepage");
const menuBtn = document.querySelector("#menu");
const aboutBtn = document.querySelector('#about');

// default to homepage content
document.addEventListener('DOMContentLoaded',() => {
    const homepage = HomepageContent(document);
    content.appendChild(homepage);
});


// remove all children of an element
// function removeAllChildren(container) {
//     while (container.firstChild) {
//         container.removeChild(container.firstChild);
//     }
// }

// Remove all children of content and append the homepage
homeBtn.addEventListener('click', () => {
    //removeAllChildren(content);
    content.replaceChildren();
    const homepage = HomepageContent(document);
    content.appendChild(homepage);
});

menuBtn.addEventListener('click', () => {
    //removeAllChildren(content);
    content.replaceChildren();
    const menuPage = MenuContent(document);
    content.appendChild(menuPage);
});

aboutBtn.addEventListener('click', () => {
    //removeAllChildren(content);
    content.replaceChildren();
    content.appendChild(document.createElement('div'));
})



