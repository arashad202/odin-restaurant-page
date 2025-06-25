import fast from "../assets/fast.png";
import quality from "../assets/quality.png";
import service from "../assets/service.png";

export function AboutContent(document) {

    // Container div
    const container = document.createElement('div');
    container.classList.add('w-[40%]', 'mx-auto');
    
    const cards = document.createElement('div');
    cards.classList.add('grid', 'grid-cols-2', 'grid-rows-[400px_400px_400px]');

    const myCards = [
        {
            pContent: 'Fast',
            pClassList: ['col-start-1', 'font-bold', 'text-4xl', 'text-center', 'flex', 'justify-center', 'items-center', 'border-b', 'border-b-black'],
            cardClassList: ['col-start-2', 'border-b', 'border-b-black', 'border-l', 'border-l-black'],
            imgSrc: fast,
            imgClassList: ["h-[100%]", "w-[100%]"],
        },
        {
            pContent: 'High Quality',
            pClassList: ['col-start-2', 'row-start-2', 'font-bold', 'text-4xl', 'text-center', 'flex', 'justify-center', 'items-center', 'border-b', 'border-b-black'],
            cardClassList: ['col-start-1', 'row-start-2', 'border-b', 'border-b-black', 'border-r', 'border-r-black'],
            imgSrc: quality,
            imgClassList: ["h-[100%]", "w-[100%]"],
        },
        {
            pContent: 'Best Service',
            pClassList: ['col-start-1', 'row-start-3', 'font-bold', 'text-4xl', 'text-center', 'flex', 'justify-center', 'items-center', 'border-b', 'border-b-black'],
            cardClassList: ['col-start-2', 'row-start-3', 'border-b', 'border-b-black', 'border-l', 'border-l-black'],
            imgSrc: service,
            imgClassList: ["h-[100%]", "w-[100%]"],
        }
    ]

    myCards.forEach(card => {

        // left text div with p
        const textDiv = document.createElement('div');
        textDiv.classList.add(...card.pClassList);
        const p = document.createElement('p');
        p.textContent = card.pContent;
        p.classList.add(...card.pClassList);
        p.classList.remove('border-b')

        textDiv.appendChild(p);
        cards.appendChild(textDiv);

        // right image card div
        const imgCard = document.createElement('div');
        imgCard.classList.add(...card.cardClassList);
        const image = document.createElement('img');
        image.classList.add(...card.imgClassList);
        image.src = card.imgSrc;


        imgCard.appendChild(image);
        cards.appendChild(imgCard);
    });


    // const p_1 = document.createElement('p');
    // p_1.textContent = 'Fast';
    // p_1.classList.add('col-start-1', 'font-bold', 'text-4xl');
    // cards.appendChild(p_1);
    // const card_1 = document.createElement('div');
    // card_1.classList.add('col-start-2', 'border', 'border-black');
    // const image_1 = document.createElement("img");
    // image_1.classList.add("h-[100%]", "w-[100%]")
    // image_1.src = fast;
    // card_1.appendChild(image_1);
    // cards.appendChild(card_1);

    // const p_2 = document.createElement('p');
    // p_2.textContent = 'High Quality';
    // p_2.classList.add('col-start-2', 'row-start-2');
    // cards.appendChild(p_2);
    // const card_2 = document.createElement('div');
    // card_2.classList.add('col-start-1', 'row-start-2', 'border', 'border-red');
    // cards.appendChild(card_2);

    // const p_3 = document.createElement('p');
    // p_3.textContent = 'Best Service';
    // p_3.classList.add('col-start-1', 'row-start-3');
    // cards.appendChild(p_3);
    // const card_3 = document.createElement('div');
    // card_3.classList.add('col-start-2', 'row-start-3', 'border', 'border-blue');
    // cards.appendChild(card_3);

    container.appendChild(cards);

    return container;
}