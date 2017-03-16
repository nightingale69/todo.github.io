//Переменные футера
var clUnch = document.getElementsByClassName('unchecked');
var clCh = document.getElementsByClassName('checked');
var butt1 = document.getElementById('btn1');
var butt2 = document.getElementById('btn2');

//Выполнить всё
function addAll() {
    var elems = document.getElementsByTagName('li');
    for (var i = 0; i < elems.length; i++)elems[i].className = 'unchecked checked';
    if (butt2.className === 'active') {
        active();
    } else if (butt1.className === 'done'){
        for (var i = 0; i < elems.length; i++)elems[i].className = 'unchecked';
        done();
    } else {
        false;
    }
}

//Оставляет выполненные задачи
function done() {   
    for (var i = 0; i < clUnch.length; i++)clUnch[i].style.display = 'none';
    for (var i = 0; i < clCh.length; i++)clCh[i].style.display = 'block';
    butt1.className = 'done';
    butt2.classList.remove('active');
    document.getElementById('btn3').classList.remove('vision');
}

//Оставляет активные задачи
function active() {
    for (var i = 0; i < clUnch.length; i++)clUnch[i].style.display = 'block';
    for (var i = 0; i < clCh.length; i++)clCh[i].style.display = 'none';
    butt2.className = 'active';
    butt1.classList.remove('done');
    document.getElementById('btn3').classList.remove('vision');
}

//Показывает ВСЕ задачи
function resAll() {   
    var elems = document.getElementsByTagName('li');
    for (var i = 0; i < elems.length; i++)elems[i].style.display = 'block';
    for (var i = 0; i < elems.length; i++)elems[i].classList.add('unchecked');
    document.getElementById('btn3').className = 'vision';
    butt1.classList.remove('done');
    butt2.classList.remove('active');
}

//Удалить выполненные
function resetDone() {
    for (var i = 0; i < clCh.length; i++) {
        clCh[i].parentNode.removeChild(clCh[i]);
    }
}
