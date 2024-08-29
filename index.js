function myfunc(){
    alert('myfun called');
    var val=document.getElementById("Sell").value;
    alert(val);
    document.getElementsByTagName('p')[1].innerHTML=" You Selected: "+val;
}
function func1()
{
    document.getElementById("sell").style.backgroundColor="cyan";   
}
function func2()
{
    document.getElementById("sell").style.backgroundColor="lightblue";   
}