import pizza from "../assets/pizza.jpg";
import burger from "../assets/burger.jpg";
import pasta from "../assets/pasta.jpg";
import salad from "../assets/salad.jpg";

export function MenuContent(document) {

    // container div
    const container = document.createElement('div');
    container.classList.add('w-[40%]', 'mx-auto');

    // menu list
    const menuList = document.createElement('ul');
    // list items
    const items = [
        {
            name: "salad",
            imgSrc: salad,
        },
        {
            name: "pizza",
            imgSrc: pizza,
        },
        {
            name: "pasta",
            imgSrc: pasta,
        },
        {
            name: "burger",
            imgSrc: burger,
        },
    ]

    //['salad', 'pizza', 'pasta', 'burger'];

    const listItems = items.map((item) => {
        const listItem = document.createElement('li');
        listItem.classList.add(`${item.name}`, 'border', 'border-black', 'mb-3', 'flex', 'justify-evenly', 'items-center', 'pl-3');

        const para = document.createElement('p');
        para.classList.add('text-2xl');
        para.textContent = `${item.name.toUpperCase()}`;
        listItem.appendChild(para);

        const image = document.createElement('img');
        image.src = item.imgSrc;
        item.name === "salad" ? image.classList.add('w-[200px]', 'h-[250px]') : image.classList.add('w-[200px]', 'h-[200px]');
        listItem.appendChild(image);

        return listItem;
    });

    //console.log(listItems);

    listItems.forEach((item) => {
        menuList.appendChild(item);
    })
   

    container.appendChild(menuList);

    return container;
}