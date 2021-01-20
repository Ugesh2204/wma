// $("#winston").draggable();
// $("#dropzone").droppable({
//     drop: function(event, ui) {
//         $(this).append("Appended text");
//         $(this).css('background', 'rgb(0,200,0)');
//     },
//     over: function(event, ui) {
//         $(this).css('background', 'orange');
//     },
//     out: function(event, ui) {
//         $(this).css('background', 'cyan');
//     }

  
// });

// $( function() {
//     $( "#draggable).draggable();
//     $( "#template1" ).draggable();
//     $( "#droppable" ).droppable({
//       drop: function( event, ui ) {
//         $( this )
//           .addClass( "ui-state-highlight" )
//           .find( "p" )
//             .html( "Dropped!" );
//       }
//     });
//   } );


// $('#answer').on('click', function() {
//     feedback('hey there');
// });

// var counter = 0;
// function feedback(message) {

//   $('#feedback').remove();

//   $('.answers').append('<div id="feedback">' + message + ' ' + counter + '</div>');

//   counter++;    
// }


// $("#defaultTemp").on('click', function() {
//     AddTemplate();
//  });


 function AddTemplate(elem){
    var defau ="defaultTemp";
    var one ="tempOne";
    var id = $(elem).attr("id");
    //alert(id);

    if(id == defau){
       $('.block1').remove();
       $('.block2').remove();
       $(".appendme").append(
           
        `<ol class=" block2 agenda-view-list">
            <li>
                <div class="agenda-item-text">A</div>
                <div class="form-group">
                <input type="text" class="form-control">
                </div>
            </li>
            <li>
                <div class="agenda-item-text">B</div>
                <div class="form-group">
                <input type="text" class="form-control">
                </div>
            </li>
            <li>
                <div class="agenda-item-text">C</div>
                <div class="form-group">
                <input type="text" class="form-control">
                </div>
            </li>
            <li>
                <div class="agenda-item-text">D</div>
                <div class="form-group">
                <input type="text" class="form-control">
                </div>
            </li>
        </ol>`
            );

       $('block2').hide();
    }

    if(id == one){
        $('.block2').remove();
        $('.block1').remove();
        $(".appendme").append('<div class="block2">Second template</div>');
    }
     
 }

//  $("#tempOne").click(function () {
//     $(".appendme").append('<div class="appendme">Hello template 2</div>');
//  });