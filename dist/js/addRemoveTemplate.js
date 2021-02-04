function addtempfield(){
    $(".agenda-wrapper").append(
         ` 
         <li>
            <div class="form-group mt-2 d-flex align-items-center">
                <input type="text" class="form-control">
                <i class="fas fa-times ml-2 delete-input remove_field"></i> 
            </div>

            
            <ol class="wrapper-sub">
                <i class="fas fa-plus-circle add-more sub-icon"></i>
            
            </ol>
                
        </li>
        `
    );

	$(".agenda-wrapper").on("click",".remove_field", function(e){ 
       e.preventDefault();
       $(this).parents('li').remove();
       })
}



$(document).on("click", ".add-more", function(e){ //on add input button click
        e.preventDefault();

        $(this).parent().append(
                `<li class="rm">
                    <div class="form-group mt-2 d-flex align-items-center">
                    <input type="text" class="form-control col-md-10">
                    <i class="fas fa-times ml-2 delete-sub delete-input"></i>
                    </div>
                </li>`
        )

        $(".wrapper-sub").on("click",".delete-sub", function(e){ 
            e.preventDefault();
            $(this).parent().parent('li').remove();
            //alert("test");
        });

    });

