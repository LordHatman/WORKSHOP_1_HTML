// 1. Fråga efter ett namn och spara svaret i en konstant.

const name = prompt("What is your name?");

// 2. Hitta eleSeamentet med id="greeting".
const greeting = document.querySelector("#greeting");

greeting.textContent = ` ${name}`;
// 3. Ändra elementets text till "Hej NAMN".
//klar

// 4. Skapa konstanten Today.
// Värdet ska vara true eller false.

const Today = false;

// 5. Använd if/else för att visa rätt meddelande med alert.

if (Today === true) {
  alert("yes its workshop day");
} else {
  alert("No its not workshop day");
}
