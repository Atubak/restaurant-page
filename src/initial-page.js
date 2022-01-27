import imageLocation from './restaurant.jpg';
import "./style.css";

const contentDiv = document.querySelector('#content');

let initialDiv = document.createElement('div');
let tabDiv = document.createElement('div');
let h1 = document.createElement('h1');
let img = new Image();
let p = document.createElement('p');

initialDiv.id = 'initial';
tabDiv.id = 'tab';
h1.innerHTML = "Joni's Macaroni";
img.src = imageLocation;
p.innerHTML = "<p>Since 1992, our guests have come through our doors to enjoy a well-made cocktail, a diverse selection of wines and most importantly, an unforgettable meal. It’s these elements and the intangibles that have enticed them to return again and again – our warm and welcoming atmosphere, the friendly and familiar service, the excitement and of course, the personal greeting at the door.<br>Whether you're bringing the entire family for Sunday Dinner, your partner for date night, your client for a lunch meeting for the first time or for the 100th, our promise to you remains true - to provide an effortless and memorable experience.</p>";

initialDiv.appendChild(h1);
initialDiv.appendChild(p);
tabDiv.appendChild(img);

contentDiv.appendChild(initialDiv);
contentDiv.appendChild(tabDiv);

