

//Add and Item which include sub Items
function addtempfield(){
    $(".agenda-wrapper").append(
         ` 
         <li>
            <div class="form-group mt-2 d-flex align-items-center" id="me">
                <input type="text" class="form-control" id="item1">
                <i class="fas fa-times ml-2 delete-input remove_field"></i> 
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

    $('#uploadFile1').change(function(e){

         //Get all docs in an Array
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
        //tab contain all input value 0 1 2 3 4 ...
        tab= [];

        for(var i = 0; i<items.length; i++){
            tab.push(items[i].value);
        }

      console.log(tab);
     //Neew to place value from input

     for(var i = 0; i<tab.length; i++){
         var getInputvalue = (items[i].value);
         console.log( tab.indexOf(getInputvalue));

         for(let j = 0; j < storeDoc.length; j++){
            var doc = storeDoc[j].filesplit.split('_').slice(0,3).join('_');
            
            if(getInputvalue == doc){
                console.log("ok true");
                //i want the index value of input 
                var positionvalue = tab.indexOf(getInputvalue);
                $(".agenda-wrapper li div").eq(positionvalue).after(
                    `<div class="row">${storeDoc[j].filesplit}</div>`
                    
                    );
            } else {
                console.log("false nah");
            }
    
         }
     }

    

     //var getindexvalue = tab.indexOf("ddd");
     //  console.log(getindexvalue);
 
      //add to html
      //$(".agenda-wrapper li div").eq(getindexvalue).after('<div class="row">Brown Cow</div>');


     



 

    
   

     


    

        // var element = document.getElementsByName("filter[]");
        

        // for (var i = 0; i < element.length; i++){
        //    //console.log(els[i].value.split(' ').slice(0, 3).join('_'));
        //    for(let x = 0; x < storeDoc.length; x++){
        //     //console.log(storeDoc[x].filesplit);
        //      if(element[i].value.split(' ').slice(0, 3).join('_') == storeDoc[x].filesplit.split('_').slice(0,3).join('_')){
                
        //         element.find('#me').append("some value");
        //      // $(".listdoc").append(`<p>${storeDoc[x].filesplit}<p>`);

        //     }
        //    }
        // }
        

     

        // //Get input value in an Array
        // let inputval = [];
       
        // $(".agenda-wrapper li").each(function()   {
        //     if($('div',this).length>0){
        //         var $div = $('div',this);
        //         let inputdata = $div.eq(0).find('input').val().split(' ').slice(0, 3).join('_');
        //         inputval.push({inputdata});
        //        // console.log(inputdata); 
               
        //     }
        // });
        // console.log(inputval);


    });

   
   


}

