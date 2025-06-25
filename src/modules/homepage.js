import restaurantImage from "../assets/restaurant-pic.jpg"

export function HomepageContent(document) {
    // Container div
    const container = document.createElement('div');
    container.classList.add('w-[40%]', 'mx-auto');
    // image
    const image = document.createElement('img');
    image.src = restaurantImage;
    image.classList.add('mx-auto');
    container.appendChild(image);
    // heading
    const header = document.createElement('h2');
    header.classList.add('font-bold', 'text-3xl', 'text-center', 'my-3');
    header.textContent = 'Wodingo';
    container.appendChild(header);
    // subheading
    const subHeader = document.createElement('h3');
    subHeader.classList.add('font-bold', 'text-2xl', 'my-2');
    subHeader.textContent = 'Overview';
    container.appendChild(subHeader);
    // paragraph
    const paragraph = document.createElement('p');
    paragraph.textContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate beatae officiis fugit, consequatur, repellendus facilis sed, illo voluptas nam autem praesentium ducimus ad quia? Corrupti aperiam dolores laboriosam sint. Libero!';
    container.appendChild(paragraph);

    return container;
}

