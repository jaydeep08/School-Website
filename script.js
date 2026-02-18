// Function to get current date and time in UTC format
function getCurrentDateTime() {
    const now = new Date();
    const utcDateTime = now.toISOString().slice(0, 19).replace('T', ' ');
    return utcDateTime;
}

// Function to display the current date and time
function displayDateTime() {
    const dateTime = getCurrentDateTime();
    document.getElementById('dateTimeDisplay').innerText = `Current Date and Time (UTC): ${dateTime}`;
}

// Adding an event listener to button click
document.addEventListener('DOMContentLoaded', () => {
    const button = document.createElement('button');
    button.innerText = 'Show Current Date and Time';
    button.onclick = displayDateTime;
    
    document.body.appendChild(button);
    
    // Create an element to display the date and time
    const dateTimeDisplay = document.createElement('div');
    dateTimeDisplay.id = 'dateTimeDisplay';
    document.body.appendChild(dateTimeDisplay);
});
