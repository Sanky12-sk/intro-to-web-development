//Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the results.
var x= 0;
var y=-1;
var z= 4;
if(x>y>z){
    console.log("Sorting:"+x+","+y+","+z)
}
else if(y>x>z){
    console.log("Sorting:"+y+","+x+","+z)
}
else if (z>x>y){
    console.log("Sorting:"+z+","+x+","+y)
}
else if (x>z>y){
    console.log("Sorting:"+x+","+z+","+y)
}
else if (y>z>x){
    console.log("Sorting:"+y+","+z+","+x)
}
else if (z>y>x){
    console.log("Sorting:"+z+","+y+","+x)
}