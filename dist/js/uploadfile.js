$(document).ready(function(readyEvent) {
  $(document).on('click', '.close', function(closeEvent) {
    $(this).parents('span').remove();
    var fileInput = $('#uploadFile')[0];
    
    //if the checkbox is checked, then remove all selected files
    if ($('#clearOnDelete:checked').length) {
      fileInput.value = '';
    }
    var files = fileInput.files;
    var index = closeEvent.target.id.replace('file_','');
    
  
  })

  $('#uploadFile').on('change', function(changeEvent) {
    
    var filename = this.value;
    var lastIndex = filename.lastIndexOf("\\");
    if (lastIndex >= 0) {
      filename = filename.substring(lastIndex + 1);
    }
    var files = changeEvent.target.files;
    for (var i = 0; i < files.length; i++) {
      $("#upload_prev").append('<span>' + '<div class="filenameupload" id="file_'+i+'">' + files[i].name + '</div>' + ' <i class="fa fa-times  close" style="font-size: 1.18em;color:red;" aria-hidden="true"></i></span>');
    }
  });
});






//Testing

$(document).ready(function(){
        $('input[type="file"]').change(function(e){
            var fileName = e.target.files[0].name;
            alert('The file "' + fileName +  '" has been selected.');
        });
    });






function documentVal()
    {
        if($('#doc1').is(":checked"))   
            $(".memberlist").hide();
        else
            $(".memberlist").show();
    }