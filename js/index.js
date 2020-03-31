var lis = document.getElementsByTagName("li");
var cons = document.getElementsByClassName("content");
window.onload =function(){
    for(let i=0;i<lis.length;i++){
        lis[i].index = i;
        lis[i].onclick = function(){
            for(let j=0;j<lis.length;j++){
                lis[j].className = "";
            }
            this.className = "cur";
            for(let c=0;c<lis.length;c++){
                cons[c].style.display = "none";
            }
            cons[this.index].style.display = "block";
        }

    }
}