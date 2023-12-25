document.write("40.to generate an array of given length, the content of the array is integer numbers, increase by one from starting"+"<br>");
function test40(s,e){
    var x=[];
    for(let i=0;i<e;i++,s++){
        x.push(s);
    }
    return x;
}
document.write(test40(1,4)+"<br>");
document.write(test40(-6,4)+"<br><br>");