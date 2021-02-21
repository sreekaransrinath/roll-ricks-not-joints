$(document).on("click", "a", function(){
    var link_target = $(this).attr('href');
    var converted_url = link_target.replace(/(.*)/, "https://youtu.be/2ocykBzWDiM");
    $(this).attr('href', converted_url);
});
