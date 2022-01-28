import "./style.css";
import {loadHomeTab} from "./initial-page";
import {loadContactTab} from "./contact";
import {loadMenuTab} from "./menu";

loadHomeTab();

const buildTab = (() => {
    const body = document.querySelector('body');
    
    
    let buttonDiv = document.createElement('div');
    let btn1 = document.createElement('button');
    let btn2 = document.createElement('button');
    let btn3 = document.createElement('button');
    
    buttonDiv.id = 'buttons';
    btn1.classList = 'btn';
    btn2.classList = 'btn';
    btn3.classList = 'btn';
    btn1.id = 'btn1';
    btn2.id = 'btn2';
    btn3.id = 'btn3';
    btn1.innerHTML = 'Home';
    btn2.innerHTML = 'Menu';
    btn3.innerHTML = 'Contact';
    
    
    buttonDiv.appendChild(btn1);
    buttonDiv.appendChild(btn2);
    buttonDiv.appendChild(btn3);
    
    body.appendChild(buttonDiv);
})();


const changeTab = (() => {
    
    window.addEventListener('click', change);
    
    
    function change(e) {
        if (e.target.classList[0] === 'btn') {
            
            document.querySelector('#content').innerHTML = '';

            if (e.target.textContent === 'Contact') loadContactTab(); 
            if (e.target.textContent === 'Home') loadHomeTab();
            if (e.target.textContent === 'Menu') loadMenuTab();
        } else return;

        
    };

})();