function total(){
    var n1=document.getElementById('n1').value;
    var n2=document.getElementById('n2').value;
    var total=Number(n1)+Number(n2);
    document.getElementById('result').innerHTML=total;
}