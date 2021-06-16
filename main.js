function dis(val) {
    
    document.getElementById("textfield").value+=val;
    console.log(val);


}
function clr() {
    document.getElementById("textfield").value="";
    
    

}
function result() {
    x = document.getElementById("textfield").value;
    y = eval(x);
    document.getElementById("textfield").value= y;
}