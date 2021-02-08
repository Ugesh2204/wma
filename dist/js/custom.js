$(document).ready(function() {

/** add active class and stay opened when selected */
var url = window.location;

// for sidebar menu entirely but not cover treeview
$('ul.nav-sidebar a').filter(function() {
    return this.href == url;
}).addClass('active');



$('ul.nav-treeview a').filter(function() {
    return this.href == url;
}).parentsUntil(".nav-sidebar > .nav-treeview")
.addClass('menu-open').prev('a').addClass('active');

});








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



