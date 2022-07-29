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



const timesChangedCity = document.getElementById('times-changed-city');
const timesChangedWater = document.getElementById('times-changed-water');
const timesChangedLandscape = document.getElementById('times-changed-landscape');

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
    timesChangedCity.textContent = cityTally;
    cityImage.classList.remove('hidden');
});

waterDropdown.addEventListener('change', () => {
    let water = waterDropdown.value;
    waterImage.src = `/assets/${water}.png`;
    waterTally++;
    timesChangedWater.textContent = waterTally;
    waterImage.classList.remove('hidden');
});

landscapeDropdown.addEventListener('change', () => {
    let landscape = landscapeDropdown.value;
    landscapeImage.src = `/assets/${landscape}.png`;
    landscapeTally++;
    timesChangedLandscape.textContent = landscapeTally;
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
