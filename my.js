//變數 變數名 = 值
var a = 123    //number
var b = "Nice to meet you"  //strip
var c = 1.5    //浮點數
var d = true   //布林數


document.getElementById("title").innerHTML= b;

var a = 10;
var b = 5;
var c = 0;

c = a + b; //等號右邊先運算再傳至左邊
c = a - b;
c = a / b;
c = a % b;

document.getElementById("box1").innerHTML = c;

var d = 1;
var e = 1;
var f = 0;

f = d ++; //先給值在遞增
f = ++ e; //先遞增再給值

document.getElementById("box2").innerHTML = f;

var g = 10;

g += 5; //適用+-*/%
g -= 5;

document.getElementById("box3").innerHTML = g;


var h = 0;
var box4 = document.getElementById("box4");
// if 可搭配一個 else 與多個 else if
if(h >= 0){
    box4.innerHTML = "h大於0";
}
else if(h = 0){
    box4.innerHTML = "h等於0";
}
else{
    box4.innerHTML = "h小於0";
}

function test (text){
    document.getElementById("box5").innerHTML = text;
}

//使用函數

test("123456");

test("我知道你很蠢");

var number1 = 10;
var number2 = 20;
var number3 = 30;
var names = ["a","b","c"]


document.getElementById("box6").innerHTML = number2;

document.getElementById("box7").innerHTML = names[1];
