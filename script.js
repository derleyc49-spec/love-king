let selectedMood='';

function setMood(mood){
selectedMood=mood;
}

function saveMood(){

const note=document.getElementById('note').value;

if(selectedMood===''){
alert('Escolhe um humor');
return;
}

localStorage.setItem('mood',selectedMood);
localStorage.setItem('note',note);

document.getElementById('result').innerHTML=
'Hoje você estava '+selectedMood+'<br>'+note;

}
