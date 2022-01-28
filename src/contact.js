export const loadContactTab = (() => {
    
    const tab = document.querySelector('#tab');

    let contactDiv = document.createElement('div');
    
    contactDiv.id = 'contact';
    contactDiv.innerHTML = `<h1>Contact</h1>
        <ul><pre>
            <li>Phone Number:       +44 20 3077 1189</li>
            <li>Address:            24 Cambridge Circus, LONDON</li>
            <li>Google Maps Link:   <a href="https://goo.gl/maps/CkfjSgbVfThYgjHd9">Google Maps</a></li>
            <li>Social Media:         <a href="https://www.instagram.com/onlyscrans/?hl=en">OnlyScrans</a></li>
        </pre></ul>`;

    document.querySelector('#content').appendChild(contactDiv);
});