const skillsColumns = document.querySelectorAll('.skills__column');
const redux = skillsColumns[7];
redux.querySelector('h2').innerText = 'Node.js';

const shekoString = `
<li class="skills__column">
            <h2 class="skills__title">Sheko</h2>
            <span class="skills__years">24 Years</span>
          </li>
          `;
const shekoElement = document
  .createRange()
  .createContextualFragment(shekoString);
console.log(shekoElement);
const jsElement = document.querySelector('[data-name = javaScript]');
jsElement?.insertAdjacentHTML('afterend', shekoString);

const cvElement = document.querySelector('.find-out-link');
cvElement.remove();

const cbActionOnClick = (item) => {
  const clickedElement = document.querySelector('.underline');
  if (clickedElement) clickedElement.classList.remove('underline');
  if (clickedElement !== item) item.classList.add('underline');
};
const skillsColumns2 = document.querySelectorAll('.skills__column');
skillsColumns2.forEach((item) => {
  item.addEventListener('click', () => cbActionOnClick(item));
});
