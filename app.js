let title = document.querySelector('#title')
let author = document.querySelector('#author')
let year = document.querySelector('#year')
let btn = document.querySelector('.btn')
let booklist = document.querySelector('#book-list')


btn.addEventListener('click' , function(e){
    e.preventDefault()
    if(title.value == '' && author.value == '' && year.value == ''){
        
       alert('Chalaki Korben na')

    }else{

        let createTr = document.createElement('tr')

        let createTh = document.createElement('th')
        createTh.innerHTML = title.value


        let createAu = document.createElement('th')
        createAu.innerHTML = author.value

        let createYr = document.createElement('th')
        createYr.innerHTML = year.value

        booklist.append(createTr)
        createTr.append(createTh,createAu,createYr)

        title.value = ''
        author.value = ''
        year.value = ''
    }

    
})


//MERN FULL STACK DEVELOPER 2021//

//HTML
//CSS
//BOOTSTRAP
//JAVASCRIPT
//REACT JS
//MONGO DB
//EXPRESS JS
//NOTE JS