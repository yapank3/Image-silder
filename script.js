<script>
    $(function() {
        $("#imageListId").sortable({
            update: function(event, ui) {
                    getIdsOfImages();
                }         
        });
    });
  
    function getIdsOfImages() {
        var values = [];
        $('.listitemClass').each(function(index) {
            values.push($(this).attr("id")
                        .replace("imageNo", ""));
        });
        $('#outputvalues').val(values);
    } 
</script>
