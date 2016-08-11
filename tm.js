var i=1;
var count;
document.getElementById("textarea").value="";
document.getElementById("addtask").addEventListener("click",addtask);
function addtask(){

	var check=document.getElementById("textarea").value;
	if(check==""){
        alert("enter string");
        document.getElementById("textarea").value="";
	}
	else{
		var cid,closeid,fa_font,tag,tag_close;

		//get message
        var message= document.getElementById("textarea").value;
        //count task
        count=countf();
        //create tag
	    tag=document.createElement("div");
	    tag_close=document.createElement("div");
	    content=document.createElement("div");
	    //count
	    cid="task"+count;
	    closeid="close"+count;
	    contentid="content"+count;
	    //add id 
	    tag.id=cid;
	    tag_close.id=closeid;
	    content.id=contentid;
	    //parent block
	    var dtask=document.getElementById("diff_task");
	    //add in parent node
	    tag.appendChild(tag_close);
	    tag.appendChild(content);
	    dtask.appendChild(tag);
        //add class
        document.getElementById(cid).className="task";
	    document.getElementById(closeid).className="close_position";
	    //set attributes event
	    document.getElementById(closeid).setAttribute("onmousedown", "mouseDown(this.id)");
	    document.getElementById(cid).setAttribute("onmousedown", "mouseDown_p(this.id)");
	    document.getElementById(contentid).setAttribute("onmousedown", "mouseDown_content(this.id,count)");
	    //add font awesome content 
	    document.getElementById(closeid).innerHTML='<i class="fa fa-close"></i>';
	    document.getElementById(contentid).innerHTML=message;
         //add task content
         var fa_font=document.getElementById(cid).innerHTML;
        document.getElementById(cid).innerHTML=fa_font+"<br><br><hr><br>"+Date();
        //clear textarea 
	    document.getElementById("textarea").value="";
	}
}
//count for number of task
function countf(){
	//var i=1;
	return i++;
}
  
  // get closing id
  function mouseDown(this_id){
  	//get id on mousedown
  	document.getElementById(this_id).addEventListener("click", closef);
  }
  var task_id1;
   function mouseDown_p(task_id){
    task_id1=task_id;
  	
  }
  //message
  //var content_id;
  function mouseDown_content(content_id,count_value){
  	var edit_message=document.getElementById(content_id).innerHTML;
  	document.getElementById(content_id).addEventListener("dblclick", editf(edit_message,content_id,count_value));
  }

//close task
function closef(){
var parent = document.getElementById("diff_task");
var child = document.getElementById(task_id1);
parent.removeChild(child);
}



//edit message
function editf(param_message,content_id,count_value){
	console.log(count_value,content_id);
	
	var edit_tag,edit_tag_id,final_message;
	document.getElementById(content_id).style.backgroundColor = "white";
	document.getElementById(content_id).innerHTML ="";
	content_tag=document.getElementById(content_id);
    edit_tag=document.createElement("textarea");
    edit_tag_id="edittagid"+count_value;
    edit_tag.id=edit_tag_id;
    content_tag.appendChild(edit_tag);
    //console.log(edit_tag_id,param_message);
	document.getElementById(edit_tag_id).value=param_message;
	
	
     //submission of from by press enter key
    
    document.onkeydown = checkKey;
    function checkKey(e) {
        e = e || window.event;
        if (e.keyCode == '13') {
        // enter key
            final_message=document.getElementById(edit_tag_id).value;
            document.getElementById(content_id).innerHTML ="";
            document.getElementById(content_id).innerHTML =final_message;
        }
    }

}
