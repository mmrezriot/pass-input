const password = document.querySelector('#password');
// console.log(password)
const toggle= document.querySelector('.toggle');
// console.log(toggle)

function passwordHide(){
    //type input = password
    if (password.type === 'password') {
        // Change attribute input
        password.setAttribute('type' , 'text');

        toggle.classList.add('hide');
        
    }else{
        // Change attribute input
        password.setAttribute('type' , 'password');

        toggle.classList.remove('hide');
    }
}