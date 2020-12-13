const registerForm = document.querySelector('#registerForm')

registerForm.addEventListener('submit', e => {
    
    e.preventDefault()

    const registerName = document.querySelector('#userName').value
    const registerEmail = document.querySelector('#userEmail').value
    const registerPassword = document.querySelector('#userPassword').value

    console.log(registerName, registerEmail, registerPassword)

    auth.createUserWithEmailAndPassword(registerEmail, registerPassword)
        
        .then(
            // console.log('Usted se ha registrado con exito')
            window.location.href = "registersucessful.html"

        )

       
})