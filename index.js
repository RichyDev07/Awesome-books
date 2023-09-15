
const divbooks = document .querySelector ("#container")
const form = document.querySelector('form');

form.addEventListener ('submit', (e) => {
    e.preventDefault();
    
});

const addbooks = async function(){
    const titleInput = document.querySelector('.title').value
    const authorInput = document.querySelector('.author').value
    let book1 =`https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-cc5e4682-74a3-4e6d-8c04-93a18b072c1a/cloud/addbooks?title=${titleInput}&author=${authorInput}`
    await fetch (book1);
    console.log(book1);
    form.reset()

}
let addbtn = document.getElementById('addbtn')
addbtn .addEventListener ('click' ,  addbooks)

document.addEventListener('DOMContentLoaded', ()=>{
    let ol = document.createElement("ol")
    let getbooks=`https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-cc5e4682-74a3-4e6d-8c04-93a18b072c1a/getbooks/script`
    fetch(getbooks)
    .then(response => response.json())
    .then( books =>{
        console.log(books)
           
        for (let book of books){
            let list = document.createElement("li");
            list.innerHTML = `
            
           ${book.title} Written by   ${book.author} 
            <button id="removebtn"> Remove</button>
             
          
             
            `;
            ol.appendChild(list);
            divbooks.appendChild(ol);
            form.reset()
        }
      
    })
})



