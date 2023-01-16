const datas = users;

    const total=document.querySelector(`h3`)
    total.innerHTML= "Total:" + datas.length 


    //making object container
    const container=document.querySelector(`.contact-list`)
    //making filling objects
    for (i = 0; i < datas.length; i++) {
        const contact=app =>(`
        <li class="contact-item cf ${Math.ceil((i+1)/10)}" id="${i}">
            <div class="contact-details">
                <img class="avatar" src="${app.image}">
                <h3 class="insert">${app.name}</h3>
                <span class="email">${app.name.split(' ')[0]}.${app.name.split(' ')[1]}@example.com</span>
            </div>
            <div class="joined-details">
                <span class="date">Joined ${app.joined}</span>
            </div>
            </li>`) 
        //customize filling with information in data.js
        const app = {name: datas[i].name, image: datas[i].image, joined: datas[i].joined}




        //install filling object into object container by sequence
        container.insertAdjacentHTML(`beforeend`, contact(app)) 
        }
        //like making dumpings...one by one

   
    //hide all dumpings from hungry cats
    const section = document.querySelectorAll(`.contact-item`)
        for(i=0; i<section.length; i++) {
           section[i].style.display="none" 
        }   

    //make pageindex container
    const page=document.querySelector(`.page-container`)
    //making pageindex
    for (i = 0; i < (datas.length/10); i++) {
        const index= ind => (`
            <li class="dot${ind}" onclick="currentPages(${ind+1})"><a href="#${ind+1}">${ind+1}</a></li>
            `) 

        const ind = i
        page.insertAdjacentHTML(`beforeend`, index(ind))  
           }

    function currentPages(n){

            //hide all dumpings from hungry cats
            const section = document.querySelectorAll(`.contact-item`)
            for(i=0; i<section.length; i++) {
                section[i].style.display="none" 
            } 
            const showout = document.getElementsByClassName(n)
            console.log(showout)
            for(i=0;i<showout.length; i++){
                showout[i].style.display="list-item"
            }

        }
        





