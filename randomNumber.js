function generateNumber() {
            // Your logic
            const randomNumber = Math.floor(Math.random() * 10) + 1;
            
            // Output to console
            console.log(randomNumber);
            
            // Update the webpage UI
            document.getElementById('result').innerText = randomNumber;
}