/* Skills list Update */
/*const skillsArray = [
  {
    name: 'HTML',
    experience: '2024',
    type: 'frontend',
  },
  {
    name: 'CSS',
    experience: '2024',
    type: 'frontend',
  },
  {
    name: 'React',
    experience: '2025',
    type: 'frontend',
  },
  {
    name: 'Redux',
    experience: '2025',
    type: 'frontend',
  },
  {
    name: 'React Testing Library',
    experience: '2025',
    type: 'frontend',
  },
  {
    name: 'Javascript',
    experience: '2024',
    type: 'backend',
  },
  {
    name: 'Node.js',
    experience: '2025',
    type: 'backend',
  },
  {
    name: 'Express.js',
    experience: '2025',
    type: 'backend',
  },
  {
    name: 'Mongodb',
    experience: '2025',
    type: 'backend',
  },
];*/
const skillsArray = [
  {
    name: 'HTML',
    experience: '2024',
    type: 'frontend',
  },
  {
    name: 'CSS',
    experience: '2024',
    type: 'frontend',
  },
  {
    name: 'Javascript',
    experience: '2024',
    type: 'backend',
  },
  {
    name: 'React',
    experience: '2025',
    type: 'frontend',
  },
  {
    name: 'Node.js',
    experience: '2025',
    type: 'backend',
  },
  {
    name: 'Express.js',
    experience: '2025',
    type: 'backend',
  },
  {
    name: 'Mongodb',
    experience: '2025',
    type: 'backend',
  },
  {
    name: 'Supabase',
    experience: '2025',
    type: 'backend',
  },
];
/* 
  Add skills dynamically 
  Calculate years of experience automatically
  */
const currentYear = new Date().getFullYear();
const skillElementsString = skillsArray
  .map(
    (listObject) => `
      <li class="skills__column" data-type="${listObject.type}">
        <h2 class="skills__title">${listObject.name}</h2>
        <span class="skills__years">${
          currentYear - listObject.experience === 0
            ? 'In Progress'
            : currentYear - listObject.experience + ' years'
        }</span>
      </li>
    `
  )
  .join('');
const skillsListString = `<ul class="skills__list">${skillElementsString}</ul>`;
const skillsContainer = document.querySelector('#skills');
skillsContainer.insertAdjacentHTML('beforeend', skillsListString);

// Add filters to skills section
const skillsButtons = document.querySelectorAll('.skills__button');

const activatingButton = (button) => {
  document
    .querySelector('.skills__button--isActive')
    ?.classList.remove('skills__button--isActive');
  button.classList.add('skills__button--isActive');
};

const buttonFiltering = (button) => {
  const ButtonDataType = button.dataset.type;
  const skillsListUl = document.querySelector('.skills__list');
  skillsListUl.classList.remove('frontend', 'backend');
  if (ButtonDataType !== 'all') skillsListUl.classList.add(ButtonDataType);
};

skillsButtons.forEach((button) => {
  button.addEventListener('click', () => {
    activatingButton(button);
    buttonFiltering(button);
  });
});
