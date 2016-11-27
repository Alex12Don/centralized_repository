var lastMessageTime = 0;
var lastMessage = "";

function p()
{
    var color=encodeURIComponent(document.getElementById('combobox').value);
    if(!color.localeCompare('green'))
    {
        document.getElementById("1row").style.color="green";
        document.getElementById("2row").style.color="green";
        document.getElementById("3row").style.color="green";
        document.getElementById("4row").style.color="green";
    }
    if(!color.localeCompare('blue'))
    {
        document.getElementById("1row").style.color="blue";
        document.getElementById("2row").style.color="blue";
        document.getElementById("3row").style.color="blue";
        document.getElementById("4row").style.color="blue";
    }
    if(!color.localeCompare('red'))
    {
        document.getElementById("1row").style.color="red";
        document.getElementById("2row").style.color="red";
        document.getElementById("3row").style.color="red";
        document.getElementById("4row").style.color="red";
    }
    if(!color.localeCompare('navy'))
    {
        document.getElementById("1row").style.color="navy";
        document.getElementById("2row").style.color="navy";
        document.getElementById("3row").style.color="navy";
        document.getElementById("4row").style.color="navy";
    }

    var size=encodeURIComponent(document.getElementById('combobox2').value);
    if(!size.localeCompare('size1'))
    {
        document.getElementById("1row").style.fontSize="large";
        document.getElementById("2row").style.fontSize="large";
        document.getElementById("3row").style.fontSize="large";
        document.getElementById("4row").style.fontSize="large";
    }
    if(!size.localeCompare('size2'))
    {
        document.getElementById("1row").style.fontSize="xx-large";
        document.getElementById("2row").style.fontSize="xx-large";
        document.getElementById("3row").style.fontSize="xx-large";
        document.getElementById("4row").style.fontSize="xx-large";
    }
    if(!size.localeCompare('size3'))
    {
        document.getElementById("1row").style.fontSize="50px";
        document.getElementById("2row").style.fontSize="50px";
        document.getElementById("3row").style.fontSize="50px";
        document.getElementById("4row").style.fontSize="50px";
    }


}

function onmouseout1(x)
{
    x.style.backgroundColor='pink';

}
function onmouseover1(x,numb)
{
    x.style.backgroundColor='yellow';
    var tr = x.parentNode.parentNode;
    log(tr.getElementsByTagName("td")[numb].innerHTML);
}

function log(message) {
    text.value = message ;
}

function addOption ()
{
    var xai = document.getElementById('combobox');
    var op = document.createElement('option');

    op.value = 'navy';
    op.innerHTML = 'Фиолетовый';
    xai.appendChild(op);
}

////////////////////////////////////////////////////////////////

