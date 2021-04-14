

//Add and Item which include sub Items
function addtempfield(){
    $(".agenda-wrapper").append(
         ` 
         <li>
            <div class="form-group mt-2 d-flex" id="me">
               <div class="doc-container ">
                    <input type="text" class="form-control mb-3" id="item1">
                </div>
                <i class="fas fa-times ml-2 mt-2 delete-input remove_field"></i> 
            </div>
           
          
                
        </li>
        `
    );

	$(".agenda-wrapper").on("click",".remove_field", function(e){ 
       e.preventDefault();
       $(this).parents('li').remove();
       })
}


//Add Sub Items
$(document).on("click", ".add-more", function(e){ //on add input button click
        e.preventDefault();

        $(this).parent().append(
                `<li class="rm">
                    <div class="form-group mt-2 d-flex align-items-center">
                    <input type="text" class="form-control col-md-10">
                    <i class="fas fa-times ml-2 delete-sub delete-input"></i>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                          
                           
                        </div>
                    </div>
                </li>`
        )

        $(".wrapper-sub").on("click",".delete-sub", function(e){ 
            e.preventDefault();
            $(this).parent().parent('li').remove();
            //alert("test");
        });

    });



    $(document).on("change", "#uploadFile", function(e){ //on add input button click
        e.preventDefault();
        var filename = this.value;
       
        var lastIndex = filename.lastIndexOf("\\");
        if (lastIndex >= 0) {
            filename = filename.substring(lastIndex + 1);
        }
        //Get all files inside as object files list  
        var files = e.target.files; 
        for (var i = 0; i < files.length; i++) {
        //    alert(files[i].name);
        $(this).siblings(".upload_list").append(
                '<span>' + '<div class="filenameupload" id="file_'+i+'">' + files[i].name + '</div>' + ' <i class="fa fa-times  close" style="font-size: 1em;color:red;" aria-hidden="true"></i></span>'
            );
        }
    });


    $(document).on('click', '.close', function(closeEvent) {
        $(this).parents('span').remove();  
    });


function uploaddocs(){

        //$(".agenda-wrapper li div .upload-item").remove();

    $('#uploadFile1').change(function(e){

         //Store all docs in an Array
         let storeDoc = [];

         let fileName = e.target.files;
         for(let i = 0; i<fileName.length; i++){
             //let filecontainer = fileName[i].name.split('_').slice(0,3).join('_');
             let filesplit = fileName[i].name;
             //let filesplit = fileName[i].name;
             storeDoc.push({filesplit});
         }
 
         console.log(storeDoc);

        var items = document.querySelectorAll(".agenda-wrapper li div input");
        //tab contain all input values
        inputVal= [];

        for(var i = 0; i<items.length; i++){
            inputVal.push(items[i].value);
        }

        console.log(inputVal);
        //Neew to place value from input



        for(var i = 0; i<inputVal.length; i++){
            var getInputvalue = (items[i].value);
            var positionvalue = inputVal.indexOf(getInputvalue);
            
            for(let j = 0; j < storeDoc.length; j++){
                var doc = storeDoc[j].filesplit.split('_').slice(0,3).join('_');
            
                if(getInputvalue == doc){
                    $(".agenda-wrapper li div input").eq(positionvalue).after(
                        `<div class="row pushleft upload-item">
                            <span class="inner-doc"> ${
                                storeDoc[j].filesplit
                            }<i class="fas fa-trash-alt down-icon  close" style="font-size: 1em;color:red;margin-top:5px; padding-left:0.5rem"
                            aria-hidden="true"></i></span>
                        </div>`
                        
                    );
                } 
        
               
            }
        }

    });

  
   
    //$(".agenda-wrapper li div .upload-item").remove();

}

