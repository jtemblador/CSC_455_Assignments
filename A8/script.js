// Get references to HTML elements
const body = document.body;
const messageBox = document.getElementById('message');
const happyBtn = document.getElementById('happy-btn');
const sadBtn = document.getElementById('sad-btn');
const angryBtn = document.getElementById('angry-btn');
const surprisedBtn = document.getElementById('surprised-btn');
const clearBtn = document.getElementById('clear-btn');

// Helper function to clear previous mood classes
function clearMoods() {
    body.classList.remove('happy', 'sad', 'angry', 'surprised');
}

// Function to set the mood
function setMood(moodName, moodClass, callback) {
    // Clear previous mood classes
    clearMoods();
    
    // Add the new mood class to the body
    body.classList.add(moodClass);
    
    // Call the callback function to update the message
    callback(moodName);
    
    // Change the message box color based on the mood
    if (moodClass === 'happy') {
        messageBox.style.backgroundColor = '#FFF8DC'; // Light yellow for happy
    } else if (moodClass === 'sad') {
        messageBox.style.backgroundColor = '#F0FFFF'; // Light cyan for sad
    } else if (moodClass === 'angry') {
        messageBox.style.backgroundColor = '#FFF0F0'; // Light red for angry
    } else if (moodClass === 'surprised') {
        messageBox.style.backgroundColor = '#F8F4FF'; // Light purple for surprised
    }
}

// Function to show the message
function showMessage(mood) {
    messageBox.textContent = `You're feeling ${mood} today!`;
}

// Add event listeners to buttons
happyBtn.addEventListener('click', function() {
    setMood('happy', 'happy', showMessage);
});

sadBtn.addEventListener('click', function() {
    setMood('sad', 'sad', showMessage);
});

// Using arrow function for the angry button
angryBtn.addEventListener('click', () => {
    setMood('angry', 'angry', (mood) => {
        messageBox.textContent = `Whoa! You're feeling ${mood}. Take a deep breath!`;
    });
});

// Using inline anonymous function for the surprised button
surprisedBtn.addEventListener('click', function() {
    setMood('surprised', 'surprised', function(mood) {
        messageBox.textContent = `Wow! You're ${mood}! What happened?`;
    });
});

// Clear button to reset everything to neutral
clearBtn.addEventListener('click', function() {
    // Clear all mood classes
    clearMoods();
    
    // Reset body background
    body.style.backgroundColor = '#f0f0f0';
    
    // Reset message box
    messageBox.style.backgroundColor = 'white';
    messageBox.textContent = 'Click a button to show your mood!';
});