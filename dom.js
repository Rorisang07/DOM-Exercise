const container = document.querySelector('#container');
const para = document.createElement('p');
para.textContent = 'Hey I’m red!';
para.style.color = 'Red';
container.appendChild(para);

const heading = document.createElement('h3');
heading.textContent = 'I’m a blue h3!';
heading.style.color = 'Blue';
container.appendChild(heading);

const div = document.createElement('div');
div.style.border = '2px solid black';
div.style.backgroundColor = 'pink';

const headOne = document.createElement('h1');
headOne.textContent = 'I’m in a div';

const  para2 = document.createElement('p');
para2.textContent = 'ME TOO!';

div.appendChild(headOne);
div.appendChild(para2);
container.appendChild(div);
 