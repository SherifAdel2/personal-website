/* Toggle Switch Theme button using tabs then enter to make it more accessible */
const toggleSwitchButton = document.querySelector('.toggle__label');
const togglingButton = (event) => {
  if (event.key === 'Enter') {
    event.currentTarget.click();
    event.preventDefault();
  }
};
toggleSwitchButton.addEventListener('keydown', togglingButton);
/* End Switch theme button action */
