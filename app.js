// Создать новый элемент списка при нажатии на кнопку "Добавить"
function newElement() {
    var li = document.createElement('li');
    li.className = 'unchecked';
    var cl = document.createAttribute('unchecked');
    var inputValue = document.getElementById('question').value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert('Поле пустое!');
    } else if (butt1.className === 'done') {
        document.getElementById('new__buss').appendChild(li);
        done();
    } else {
        document.getElementById('new__buss').appendChild(li);
    }
    document.getElementById('question').value = '';
    var span = document.createElement('span');
    var txt = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(txt);
    li.appendChild(span);
    plus();
}

//Enter как кнопка "Добавить"
function enter(e) {
    e = e || window.event;
    if (e.keyCode === 13) {
        document.getElementById('add').click();
    }
    return false;
}

// Добавить галку при нажатии на элемент списка
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI' && butt2.className === 'active') {
        ev.target.className = 'checked';
        active();
    } else if (ev.target.tagName === 'LI' && butt1.className === 'done') {
        ev.target.className = 'unchecked';
        done();
    } else  {
        ev.target.classList.toggle('checked');
    }
}, false);

// Создание кнопки "Закрыть" и добавить его к каждому элементу списка
function close() {
    var myNodelist = document.getElementsByTagName('LI');
    var i;
    for (i = 0; i < myNodelist.length; i++) {
        var span = document.createElement('span');
        var txt = document.createTextNode('\u00D7');
        span.className = 'close';
        span.appendChild(txt);
        myNodelist[i].appendChild(span);
    }
}

// Крестик, чтобы удалить текущий элемент списка
function plus() {
    var close = document.getElementsByClassName('close');
    var i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.id = 'closed';
            var div2 = document.getElementById('closed');
            div2.parentNode.removeChild(div2);
        }
    }
}
