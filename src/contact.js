export const loadContactTab = (() => {
    
    const tab = document.querySelector('#tab');

    let contactDiv = document.createElement('div');
    
    contactDiv.id = 'contact';
    contactDiv.innerHTML = "bingo";

    tab.appendChild(contactDiv);
});