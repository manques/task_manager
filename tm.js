var i=1;
var cid;
var  closeid;
var this_close,this_id;
var this_close_p,this_id_p;
var count;
var tag,tag_close,fa_font;
document.getElementById("textarea").value="";
document.getElementById("addtask").addEventListener("click",addtask);
function addtask(){
	var check=document.getElementById("textarea").value;
	if(check==""){
        alert("enter string");
        document.getElementById("textarea").value="";
	}
	else{
		//get message
        var message= document.getElementById("textarea").value;
        //count task
        count=countf();
        //create tag
	    tag=document.createElement("div");
	    tag_close=document.createElement("div");
	    //count
	    cid="task"+count;
	    closeid="close"+count;
	    //add id 
	    tag.id=cid;
	    tag_close.id=closeid;
	    //parent block
	    var dtask=document.getElementById("diff_task");
	    //add in parent node
	    tag.appendChild(tag_close);
	    dtask.appendChild(tag);
        //add class
        document.getElementById(cid).className="task";
	    document.getElementById(closeid).className="close_position";
	    //set attributes event
	    document.getElementById(closeid).setAttribute("onmousedown", "mouseDown(this.id)");
	    document.getElementById(cid).setAttribute("onmousedown", "mouseDown_p(this.id)");
	    //add font awesome content 
	    document.getElementById(closeid).innerHTML='<i class="fa fa-close"></i>';
         //add task content
         var fa_font=document.getElementById(cid).innerHTML;
        document.getElementById(cid).innerHTML=fa_font+message+"<br><br><hr><br>"+Date();
        //clear textarea 
	    document.getElementById("textarea").value="";
	}
}
//count for number of task
function countf(){
	
	return i++;
}
  
  // get closing id
  function mouseDown(this_id){
  	this_close=this_id;
  	
  	document.getElementById(this_close).addEventListener("click", closef);
  }
   function mouseDown_p(this_id_p){
  	this_close_p=this_id_p;
  }

//close task
//document.getElementById(this_close).addEventListener("click",closef);

//document.getElementById(this_close).addEventListener("mouseup",closef);

function closef(){
var parent = document.getElementById("diff_task");
var child = document.getElementById(this_close_p);
parent.removeChild(child);
}


/*var div = document.getElementsByTagName("div"); 
for(var i=0; i<div.length; i++){ 
 div[i].onclick = function(){ 
   alert(this.id); 
 } 
}*/