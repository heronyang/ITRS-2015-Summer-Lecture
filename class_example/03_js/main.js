console.log("main.js hello");

/*
 * IF / ELSE
 */
var x = 2;

if (x==2) {
    console.log("x is 2");
} else {
    console.log("x isn't 2");
}

var y = "123";
if (y==123) {
    console.log("happy");
} else {
    console.log("tobby");
}

var tag = 3;
if (tag == 1) {
    console.log("happy");
} else if(tag == 2) {
    console.log("happy 2");
} else if(tag == 3) {
    console.log("happy 3");
} else {
    console.log("happy 4");
}

var n = 10;
while(n >= 1) {
    console.log(n);
    // n = n - 1;
    n --;
}
console.log("last: " + n);

/*
 * 起始條件, 終止條件, 每次要做的事情
 * i++ --->>> i = i + 1
 * i-- --->>> i = i - 1
 */
for(var i=10 ; i>=1 ; i--) {
    console.log(i);
}

/*
 * Function
 */
function f(x){
    return (x+1);
}

function fab(x) {
    // OR
    if (x==1 || x==2) {
        return 1;
    }
    return fab(x-1) + fab(x-2);
}

for(var i=1 ; i<10 ; i++) {
    console.log(i + ": " + fab(i));
}
