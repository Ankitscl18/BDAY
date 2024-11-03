document.getElementById("showSurprise").addEventListener("click", function() {
    document.getElementById("cake").classList.remove("hidden");
    playGuitarTune();  // Play the guitar tune
    showFlyingPhotos(); // Show the flying photos
});

function playGuitarTune() {
    const guitarTune = document.getElementById("guitarTune");
    guitarTune.play();
}

function showFlyingPhotos() {
    const photosContainer = document.getElementById("photosContainer");
    const photoUrls = [
        "scl.jpg",  // Replace with Neha's photo URLs
        "smile.jpg",
        "neha.jpg"
        
        
    ];

    for (let i = 0; i < 10; i++) {
        const photo = document.createElement("img");
        photo.src = photoUrls[i % photoUrls.length];
        photo.className = "photo";
        photo.style.left = `${Math.random() * 100}%`;
        photo.style.top = `${Math.random() * 100}%`;
        photo.style.transform = `rotate(${Math.random() * 360}deg)`;
        photosContainer.appendChild(photo);
    }
}
function displayBirthdayWish() {
    const wish = "On your special day, may every moment sparkle like your smile and every dream take flight like the stars. Happy Birthday to the one who makes my heart sing!";
    const wishContainer = document.getElementById("birthdayWish");
    
    // Clear the wish container
    wishContainer.innerHTML = "";

    // Display each word with a delay
    const words = wish.split(" ");
    let index = 0;

    const interval = setInterval(() => {
        if (index < words.length) {
            wishContainer.innerHTML += words[index] + " ";
            index++;
        } else {
            clearInterval(interval); // Stop the interval when done
        }
    }, 500); // Adjust the delay (in milliseconds) as needed
}
