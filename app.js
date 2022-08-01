// import functions and grab DOM elements

// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

const cityDropdown = document.getElementById('city-dropdown');
const waterDropdown = document.getElementById('water-dropdown');
const landscapeDropdown = document.getElementById('landscape-dropdown');

const cityImage = document.getElementById('city-image');
const waterImage = document.getElementById('water-image');
const landscapeImage = document.getElementById('landscape-image');
const stats = document.getElementById('stats');



const sloganInput = document.getElementById('slogan-input');
const sloganButton = document.getElementById('slogan-button');
const sloganEl = document.getElementById('slogan-el');

let cityTally = 0;
let waterTally = 0;
let landscapeTally = 0;

let slogansArr = [];

cityDropdown.addEventListener('change', () => {
    let city = cityDropdown.value;
    cityImage.src = `/assets/${city}.png`;
    cityTally++;
    displayCountStats();
    cityImage.classList.remove('hidden');
});

waterDropdown.addEventListener('change', () => {
    let water = waterDropdown.value;
    waterImage.src = `/assets/${water}.png`;
    waterTally++;
    displayCountStats();
    waterImage.classList.remove('hidden');
});

landscapeDropdown.addEventListener('change', () => {
    let landscape = landscapeDropdown.value;
    landscapeImage.src = `/assets/${landscape}.png`;
    landscapeTally++;
    displayCountStats();
    landscapeImage.classList.remove('hidden');
});

sloganButton.addEventListener('click', () => {
    const newSlogan = sloganInput.value;
    slogansArr.push(newSlogan);
    sloganEl.textContent = '';
    addSlogans();
    
    

});


function addSlogans() {
    for (let slogan of slogansArr) {
        const pTag = document.createElement('p');
        sloganEl.append(pTag);
        pTag.textContent = slogan;
      
      
    } sloganInput.value = '';
}

function displayCountStats() {
    stats.textContent = `You have changed our city image ${cityTally} times. You have changed water image ${waterTally} times. You have changed you landscape image ${landscapeTally} times.`;
}