function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

const FIX_OFFSET = 3;

let tick = () => {
  const oldCreature = document.getElementById("creature-A");
  const oldLocation = oldCreature.parentElement;
  const newCreature = oldCreature.cloneNode(true)
  const newLocationCoordinates = {row: getRandomInt(1, 3), col: getRandomInt(1, 3)};
  const newLocation = document.getElementById(`cell-${newLocationCoordinates.row}-${newLocationCoordinates.col}`);
  newLocation.appendChild(newCreature);
  const newOffset = {
    left: newLocation.offsetLeft,
    top: newLocation.offsetTop

  }
  const oldOffset = {
    left: oldLocation.offsetLeft,
    top: oldLocation.offsetTop

  }

  const temp = oldCreature.cloneNode(true);
  document.body.appendChild(temp);

  newCreature.setAttribute('style', 'visibility: hidden; transition: none')
  oldCreature.setAttribute('style', 'visibility: hidden;  transition: none')
  temp.setAttribute("style", `position: absolute; left: ${oldOffset.left + FIX_OFFSET}px; top: ${oldOffset.top + FIX_OFFSET}px; z-index: 1000; transition: 1s ease-in-out;`)

  setTimeout(() => {
    temp.setAttribute("style", `position: absolute; top: ${newOffset.top + FIX_OFFSET }px; left: ${newOffset.left + FIX_OFFSET}px`)
  }, 0)

  setTimeout(() => {
    newCreature.setAttribute('style', 'display: block;')
    oldCreature.parentNode.removeChild(oldCreature);
    temp.parentNode.removeChild(temp);
  }, 1000)
};

// document.addEventListener('click', (event) => tick())

setInterval(tick, 2000)
