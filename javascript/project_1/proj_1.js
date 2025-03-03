const buttons=document.querySelectorAll('.button')
// console.log(button);
const body=document.querySelector('body')

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target);
        let action=e.target.id
        switch(action){
            case 'grey':
                body.style.backgroundColor=e.target.id
                break;
            case 'white':
                body.style.backgroundColor='rgb(253, 244, 227)'
                body.style.color='black'
                break;
            case 'blue':
                body.style.Color='black'
                body.style.backgroundColor='rgb(145, 145, 234)'
                break;
            case 'yellow':
                body.style.backgroundColor='rgb(248, 248, 166)'
                break;
            case 'purple':
                body.style.backgroundColor='rgb(223, 101,223 )'
                break;
            case 'green':
                body.style.backgroundColor='rgb(121, 212, 121)'
                break;
            default:
                body.style.backgroundColor=defaultColor
        }
    })
})