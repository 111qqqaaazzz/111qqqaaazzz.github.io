
console.log("main.js:hello")
var x=2;
if(x==2){
    console.log("x is 2");}
else{
    console.log("x isn't 2");}
var y=123;
if(y==123){
    console.log("happy");}
else{
    console.log("tobby");}
var tag=3;
if (tag==1){
    console.log("happy");}
else if (tag==2){
    console.log("happy2");}
else if (tag==3){
    console.log("happy3");}
var n=10;
while(n>=1){
    console.log(n);
    n --;}
//小括號中>>起始值,終止條件,每次做的事(大括號先於小括號第三項)
//
for(var i=1;i<=100;i=i*2){console.log(i);
}
//函數function
function f(w){
return (w+1);}

$('#myButton').click(function() {

    // get
    var inputText = parseInt($('#input').val());
    console.log("get text: " + inputText);
    
    
    // put
    var t = $('#output');
    var s = "";
    for(i=0;i<=inputText;i++) {
        for(j=i;j!=0;j--){
            s = s + "*";
           
        }
       s=s+"<br/>";
    }
    t.html(s);
});