let storedArray = JSON.parse(localStorage.getItem('usernames'));

// Create a new array with the same values
let usernames = [storedArray];

alert(usernames);