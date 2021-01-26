
  $(document).ready(function() {
	
	var wrapper   		= $(".input_fields_wrap"); //Fields wrapper
	var add_button      = $(".add_field_button"); //Add button ID
	
	var x = 0; //initlal text box count
	$(add_button).click(function(e){ //on add input button click
		e.preventDefault();
     x++;
			$(wrapper).append(
        
        '<div class="row article-wrapper">' +
            '<div class="col-md-3">' +
              '<div class="d-flex mt-1">' +
                '<input type="text" class="form-control mr-1">' +
                '<a class="btn btn-search"><i class="fas fa-search search"></i></a>'+
              '</div>' +
            '</div>' +   

            '<div class="col-md-2">' +
              '<div class="d-flex mt-1">'+
              '<input type="text" class="form-control">' +
              '</div>'+
            '</div>'+  

            '<div class="col-md-3">' +
              '<div class="d-flex mt-1">'+
                '<input type="text" class="form-control mr-1">' +
                '<a class="btn btn-search"><i class="fas fa-search search"></i></a>'+
              '</div>'+
            '</div>'+ 
            
            '<div class="col-md-1">'+
              '<div class="d-flex mt-1">'+
                '<input type="text" class="form-control">'+
              '</div>'+
            '</div>'+

            '<div class="col-md-2">'+
              '<div class="d-flex mt-1">'+
                '<input type="text" class="form-control">'+
              '</div>'+
            '</div>'+

            '<i class=" col-md-1 btn fas fa-trash-alt btn-delete remove_field"></i>' +
          
            '<div class="col-md-12">'+
              '<input type="text" name="mytext[]" class="form-control countfield test" value="">'+
            '</div>'+

          '</div>'

      ); //add input box
  
	});
	
	$(wrapper).on("click",".remove_field", function(e){ 
    e.preventDefault();
    $(this).parent('div').remove(); x--;
	})
});





/** add active class and stay opened when selected */
var url = window.location;

// for sidebar menu entirely but not cover treeview
$('ul.nav-sidebar a').filter(function() {
    return this.href == url;
}).addClass('active');

// for treeview
// $('ul.nav-treeview a').filter(function() {
//     return this.href == url;
// }).parentsUntil(".nav-sidebar > .nav-treeview").addClass('menu-open').prev('a').addClass('active');




//highlight on check
$("#tbl input").click(function() {
  if ($(this).is(":checked")) {
      $(this).parent().parent().addClass("highlight");
      // $(".content-sidebar .test").addClass("unfaded")
  } else {
      $(this).parent().parent().removeClass("highlight");
      // $(".content-sidebar .test").removeClass("unfaded")
  }
});

//highlight on check
$("#items-wrapper li input").click(function() {
  if ($(this).is(":checked")) {
    $(this).parent().parent().parent().parent().parent().addClass("highlight");
  }

  
   else {
    $(this).parent().parent().parent().parent().parent().removeClass("highlight");
  }
});



