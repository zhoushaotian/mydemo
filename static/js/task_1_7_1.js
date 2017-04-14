 $(document).ready(function() {
     $('#map form select').change(function() {
         var value = $(this).val();
         $('#map form select [value=value]').css('backgound-color', 'red');
     })
 })