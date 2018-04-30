function loadDoc(url,callback){
    const xttp=new XMLHttpRequest();
xhttp.onreadystatechange=function() {
    if(this.readyState==4 && this.status==200) {
    document.getElementById("change").innerHTML=this.responseText;
    }
};
    xhttp.open("GET",url,true);
    xttp.send();
    }
function myFunction(xhttp) {
    document.getElementById("change").innerHTML=xhttp.responseText;
}
