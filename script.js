
document.getElementById('changeTextBtn').addEventListener('click', function() {
    document.getElementById('text').textContent = "You clicked the button!";
});

const hoverButton = document.getElementById('hoverBtn');
hoverButton.addEventListener('mouseover', function() {
    hoverButton.style.backgroundColor = 'lightblue';
});
hoverButton.addEventListener('mouseout', function() {
    hoverButton.style.backgroundColor = '';
});


document.addEventListener('keypress', function(event) {
    console.log(`Key pressed: ${event.key}`);
});


document.getElementById('changeTextBtn').addEventListener('dblclick', function() {
    alert('You found the secret action! 🤫');
});


document.getElementById('changeTextBtn').addEventListener('click', function() {
    const textElement = document.getElementById('text');
    textElement.textContent = "You clicked the button!";
    textElement.style.color = textElement.style.color === 'red' ? 'black' : 'red'; // Toggle color
});


const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
let currentIndex = 0;

document.getElementById('nextImageBtn').addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById('currentImage').src = images[currentIndex];
});


function openTab(evt, tabName) {
    const tabContents = document.getElementsByClassName('tabcontent');
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = 'none'; // Hide all tabs
    }
    const tabLinks = document.getElementsByClassName('tablinks');
    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", ""); // Remove active class
    }
    document.getElementById(tabName).style.display = 'block'; // Show the selected tab
    evt.currentTarget.className += " active"; // Set the button as active
}

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    const name = document.getElementById('name').value;
    if (!name) {
        alert('Name is required!');
    } else {
        alert('Form submitted successfully! 🎉');
    }
});


const emailInput = document.getElementById('email');
emailInput.addEventListener('input', function() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
        emailInput.style.borderColor = 'red';
    } else {
        emailInput.style.borderColor = 'green'; // Valid email
    }
});


const passwordInput = document.getElementById('password');
passwordInput.addEventListener('input', function() {
    if (passwordInput.value.length < 8) {
        passwordInput.style.borderColor = 'red'; // Invalid
    } else {
        passwordInput.style.borderColor = 'green'; // Valid
    }
});

