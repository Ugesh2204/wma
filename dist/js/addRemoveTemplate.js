

//Add and Item which include sub Items
function addtempfield(){
    $(".agenda-wrapper").append(
         ` 
         <li>
            <div class="form-group mt-2 d-flex align-items-center">
                <input type="text" class="form-control" id="item">
                <i class="fas fa-times ml-2 delete-input remove_field"></i> 
            </div>

            <div class="row">
                <div class="col-md-12">
                    <input type="file" id="uploadFile" name="FileUpload" multiple="multiple" />
                    <div class="upload_list""></div>
                   
                </div>
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

    let inputval = [];
    $(".agenda-wrapper li").each(function()   {
    if($('div',this).length>0){
        var $div = $('div',this);
        inputval.push({
            input: $div.eq(0).find('input').val()
        });
    }
    });
    console.log(inputval);


    $('input[type="file"]').change(function(e){
        let fileName = e.target.files;
        // alert('The file "' + fileName +  '" has been selected.');
        for(let i = 0; i<fileName.length; i++){
            //will remove extention
            let filecontainer = fileName[i].name.split('.').slice(0, -1).join('.');
            //console.log(filecontainer);
            for(let j = 0; j < inputval.length; j++){
                console.log(inputval[i]);
            }
        }
    });


}
      