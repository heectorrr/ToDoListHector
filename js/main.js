const inputBox = document.getElementById('inputBox');
const containerList = document.getElementById('containerList');

function addTask(){
    if(inputBox.value === ''){
        alert('No se puede agregar una tarea vacía');
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        containerList.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = 'X';
        li.appendChild(span);
    }
    inputBox.value = '';
    saveList();
}

inputBox.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        addTask();
    }
});

containerList.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        Toastify({

            text: "Tarea realizada!",
            
            duration: 3000
            
            }).showToast();
        saveList();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        Toastify({

            text: "Tarea eliminada correctamente!",
            
            duration: 3000
            
            }).showToast();
            saveList();
    }
},false);

function saveList(){
    localStorage.setItem('list', containerList.innerHTML);
}
function loadList(){
    containerList.innerHTML = localStorage.getItem('list');
}
loadList();