$(document).on("click", "a", function(){
    var link_target = $(this).attr('href');
    var converted_url = link_target.replace(/(.*)/, "https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    $(this).attr('href', converted_url);
});