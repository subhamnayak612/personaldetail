
const form = document.getElementById("contactform");

form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    
    const name = document.getElementById("name").value;
    const email = document.getElementById("Email").value;
    const message = document.getElementById("Message").value;

    
    if (name === "" || email === "" || message === "") {
        alert("Please fill all fields!");
        return;
    }

   
    alert("Message sent successfully!");

    
    form.reset();
});
