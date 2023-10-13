const buttons = document.querySelectorAll('button')

buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        const section =  e.currentTarget.parentElement.parentElement
        section.classList.toggle('active')
    })
})