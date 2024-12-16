


document.querySelector('.submit-btn').addEventListener('click', function(event) {
    event.preventDefault(); 

    
    const firstName = document.querySelector('#fname').value;
    const lastName = document.querySelector('#lname').value;
    const section = document.querySelector('input[name="mysection"]:checked')?.value;

    
    let resultMessage = `Welcome, ${firstName} ${lastName}!`;

    if (section) {
        resultMessage += `<br>You are from ${section}`;
    } else {
        resultMessage += `<br>No section selected.`;
    }

    
    const resultContainer = document.querySelector('#result-container');
    resultContainer.innerHTML = resultMessage; 
    resultContainer.style.display = 'block'; 
});
