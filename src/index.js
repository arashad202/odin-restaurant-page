import "./styles.css";
import { HomepageContent } from "./modules/homepage.js";

const content = document.querySelector('#content');
const homeBtn = document.querySelector("#homepage");
const menuBtn = document.querySelector("#menu");
const aboutBtn = document.querySelector('#about');

// default to homepage content
document.addEventListener('DOMContentLoaded',() => {
    const homepage = HomepageContent();
    content.appendChild(homepage);
});


// remove all children of an element
function removeAllChildren(container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

// Remove all children of content and append the homepage
homeBtn.addEventListener('click', () => {
    removeAllChildren(content);
    const homepage = HomepageContent();
    content.appendChild(homepage);
});

menuBtn.addEventListener('click', () => {
    removeAllChildren(content);
    content.appendChild(document.createElement('div'));
});

aboutBtn.addEventListener('click', () => {
    removeAllChildren(content);
    content.appendChild(document.createElement('div'));
})



