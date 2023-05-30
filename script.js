function showAlert() {
    alert("Alerta de javascript")
}
const form = document.getElementById("myForm")


function validateEmail(email) {
    const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)

}


function validateForm(){
    const input = document.getElementById("email")
    const inputValue = input.input.value

    if(!validateEmail(inputValue)){
        alert('Pofavor ingrese un correo electrónico válido')
    } else {
        alert('Correo electrónico enviado correctamente')
    }
}

if(form){
    form.addEventListener("submit", function(lala){
        lala.preventDefault()
        validateForm();
    })
}


document.querySelector("button.button-menu-toggle")  
.addEventListener("click", function(){
    document.querySelector(".nav-links").classList.toggle("nav-links-responsive")
}
)  