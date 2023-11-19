let inputElement = document.querySelector('.enter-text');
    
    // Get the "Your Text" element
    let yourTextElement = document.querySelector('.yourText');

    // Add an event listener to capture input changes
    inputElement.addEventListener('input', function() {
      // Update the "Your Text" element with the user's input
      yourTextElement.textContent = inputElement.value;
    });
let textElMob = document.querySelector('#textMob')
    let inpMob = document.querySelector('.enter-text-mob');
    inpMob.addEventListener('input', function() {
      // Update the "Your Text" element with the user's input
      textElMob.textContent = inpMob.value;
    });
//////////////////////////////////////////////////////
const liElements = document.querySelectorAll('.color-select-li');
const text = document.querySelector('.yourText');
let activeBulb = null; // Initialize activeBulb to null

// Function to set the first bulb as active when the page is loaded
function setFirstBulbActive() {
  const firstBulb = liElements[0].querySelector('.fa-lightbulb');
  const firstBulbShadowColor = firstBulb.getAttribute('data-shadow-color');
  firstBulb.style.textShadow = `rgb(255, 255, 255) 0px 0px 1px, rgb(255, 255, 255) 0px 0px 2px, ${firstBulbShadowColor}`;
  firstBulb.style.color = 'white';
  activeBulb = firstBulb;
  text.style.textShadow = `rgb(255, 255, 255) 0px 0px 1px, rgb(255, 255, 255) 0px 0px 2px, ${firstBulbShadowColor}`;
}

// Call the function to set the first bulb as active on page load
setFirstBulbActive();

liElements.forEach((li) => {
  const bulb = li.querySelector('.fa-lightbulb');
  const shadowColor = bulb.getAttribute('data-shadow-color');
  const mainColor = bulb.getAttribute('data-color');

  li.addEventListener('mouseenter', function() {
    bulb.style.textShadow = `rgb(255, 255, 255) 0px 0px 1px, rgb(255, 255, 255) 0px 0px 2px, ${shadowColor}`;
    bulb.style.color = 'white';
  });

  li.addEventListener('click', function() {
    if (activeBulb !== null && activeBulb !== bulb) {
      activeBulb.style.textShadow = 'none';
      activeBulb.style.color = activeBulb.getAttribute('data-color');
    }
    activeBulb = bulb;
    text.style.textShadow = `rgb(255, 255, 255) 0px 0px 1px, rgb(255, 255, 255) 0px 0px 2px, ${shadowColor}`;
    bulb.style.textShadow = `rgb(255, 255, 255) 0px 0px 1px, rgb(255, 255, 255) 0px 0px 2px, ${shadowColor}`;
  });

  li.addEventListener('mouseleave', function() {
    if (activeBulb !== bulb) {
      bulb.style.textShadow = 'none';
      bulb.style.color = mainColor;
    }
  });
});

///////////////////////////////////////////////////
const fontList = document.querySelectorAll('.font-select li');
fontList.forEach(li => {
    li.addEventListener('click', () => {
        const selectedFont = li.getAttribute('data-font');
        const yourTextElement = document.querySelector('.yourText');
        yourTextElement.style.fontFamily = selectedFont;
        fontList.forEach(item => {
            item.classList.remove('selected-font');
        });
        li.classList.add('selected-font');
    });
});
fontList[0].click();

// Получаем ссылку на элемент input
const inputs = document.querySelectorAll('.input')

inputs.forEach((inputElement)=>{
inputElement.addEventListener('focus', function() {
  // При фокусировке на элементе добавляем класс "selected"
  inputElement.classList.add('selected-input');
});

// Добавляем обработчик события "blur" (потеря фокуса)
inputElement.addEventListener('blur', function() {
  // При потере фокуса удаляем класс "selected"
  inputElement.classList.remove('selected-input');
});
})



///////////////////////
const checkboxes = document.querySelectorAll('.backboard-select .backboard-input');

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('click', function () {
      checkboxes.forEach((otherCheckbox) => {
        if (otherCheckbox !== this) {
          const otherLiElement = otherCheckbox.closest('li');
          otherLiElement.classList.remove('selected-backboard');

          // Hide the checkmark on the other li elements
          const otherIconElement = otherLiElement.querySelector('.fa-solid');
          otherIconElement.classList.remove('visible');
        }
      });

      const liElement = this.closest('li');
      liElement.classList.toggle('selected-backboard');

      // Toggle the checkmark on the current li element
      const iconElement = liElement.querySelector('.fa-solid');
      iconElement.classList.toggle('visible');
    });
  });