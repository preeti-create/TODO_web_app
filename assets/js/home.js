let selectAll = document.getElementById('selectAll');
selectAll.addEventListener('click' , function(){
    let checkboxBtn = document.getElementsByClassName('check');
    console.log('The buttons are:',checkboxBtn)
    for(let i of checkboxBtn){
        i.checked = true;
    }
});
console.log("script loaded")