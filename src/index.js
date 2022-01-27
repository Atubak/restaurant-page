import "./style.css";
import "./initial-page";
import imageLocation from './restaurant.jpg';

const buildTab = (() => {
    const contentDiv = document.querySelector('#content');


    let tabDiv = document.createElement('div');
    let buttonDiv = document.createElement('div');
    let btn1 = document.createElement('button');
    let btn2 = document.createElement('button');
    let btn3 = document.createElement('button');
    let img = new Image();

    tabDiv.id = 'tab';
    btn1.classList = 'btn';
    btn2.classList = 'btn';
    btn3.classList = 'btn';
    btn1.id = 'btn1';
    btn2.id = 'btn2';
    btn3.id = 'btn3';
    btn1.innerHTML = 'Home';
    btn2.innerHTML = 'Menu';
    btn3.innerHTML = 'Contact';
    img.src = imageLocation;


    buttonDiv.appendChild(btn1);
    buttonDiv.appendChild(btn2);
    buttonDiv.appendChild(btn3);
    tabDiv.appendChild(img);
    
    document.getElementById('initial').appendChild(buttonDiv);
    contentDiv.appendChild(tabDiv);
})();


const changeTab = (() => {
    
    window.addEventListener('click', change);
    
    
    function change(e) {
        document.querySelector('#tab').innerHTML = '';
        
        console.log(`lol yeah ${e.target.textContent}`);

    };

})();