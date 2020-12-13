const loginForm = document.querySelector('#loginForm')

loginForm.addEventListener('submit', e => {
    
    e.preventDefault()

    
    const loginEmail = document.querySelector('#loginEmail').value
    const loginPassword = document.querySelector('#loginPassword').value

    console.log(loginEmail, loginPassword)

    auth.signInWithEmailAndPassword(loginEmail, loginPassword)
        
        .then(
            // console.log('Usted se ha registrado con exito')
            window.location.href = "home.html"

        )

       
})