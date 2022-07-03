 console.log("welcome to Notes")
 showNotes();

// if user adds a note, add it to the local storage.
  
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click",function(e){
    let addTxt=document.getElementById("addTxt");
    let notes =localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    } 
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value= "";
    // console.log(notesObj);   
    
    showNotes();
})

// function to show elements from local storage.

function showNotes(){
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes)   
    }
    let html= "";
    notesObj.forEach(function(element,index) {
        html +=`
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Note ${index + 1}</h5>
          <p class="card-text">${element}</p> 
          <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete note</button> 
          </div> 
          </div>`
        
    });
    let notesEle=document.getElementById("notes");
    if(notesObj.length!=0){
        notesEle.innerHTML=html;
    }
    else{
        notesEle.innerHTML=`Nothing to show! Add new note.`;
    }
}  

// function to delete a note

function deleteNote(index){
    // console.log('user is deleting this note.',index);

    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes)   
    }

    notesObj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}
 
 let searchTxt =document.getElementById("searchTxt")
 searchTxt.addEventListener("input",function(){
     
     let inputVal=searchTxt.value.toLowerCase();
    //  console.log("input event fired in search bar", inputVal);
     let noteCards=document.getElementsByClassName('noteCard');
     Array.from(noteCards).forEach(function(element){
       let cardTxt= element.getElementsByTagName("p")[0].innerText ;
    // console.log(cardTxt)  ;
    if(cardTxt.includes(inputVal)){
        element.style.display="block";
    }
    else{
        element.style.display="none";
    }    
})
 
    

 })