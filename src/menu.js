import imageLocation from "./menu.jpg";

export const loadMenuTab = (() => {
    const contentDiv = document.querySelector('#content');
    let image = new Image();

    image.src = imageLocation;
    image.id = 'menuImg';

    contentDiv.appendChild(image);

});