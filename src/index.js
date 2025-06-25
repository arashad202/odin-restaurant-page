import "./styles.css";
import { HomepageContent } from "./modules/homepage.js";

const content = document.querySelector('#content');
const homeBtn = document.querySelector("#homepage");
const menuBtn = document.querySelector("#menu");
const aboutBtn = document.querySelector('#about');

// default to homepage content
const homepage = HomepageContent();
content.appendChild(homepage);


homeBtn.addEventListener('click', () => {
    content.removeChild(content.firstChild);
    const homepage = HomepageContent();
    content.appendChild(homepage);
});

menuBtn.addEventListener('click', () => {
    content.removeChild(content.firstChild);
    content.appendChild(document.createElement('div'));
});

aboutBtn.addEventListener('click', () => {
    content.removeChild(content.firstChild);
    content.appendChild(document.createElement('div'));
})



