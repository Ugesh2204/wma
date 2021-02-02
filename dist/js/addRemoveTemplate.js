var x = 0; //initlal text box count

function addtempfield(){

    //x++;
    $(".agenda-wrapper").append(
         ` 
         <li>
                <div class="form-group mt-2 d-flex align-items-center">
                    <input type="text" class="form-control">
                    <i class="fas fa-times ml-2 delete-input remove_field"></i> 
                </div>

                <ol class="wrapper-sub">
                
                </ol>
                
        </li>
        `
    );




  
    
	$(".agenda-wrapper").on("click",".remove_field", function(e){ 
        e.preventDefault();
       $(this).parents('li').remove();
       //alert("test");
       })
}

