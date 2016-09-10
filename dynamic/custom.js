$(document).ready(function() {
    $("#new-quote").on("click", function(){
        $.getJSON("/dynamic/json/quotes.json", function(json) {
            var html = "";

            json.forEach(function(val) {
                html += val.quote;
            });

            $("#quote-text").html(html);
        });
    });
});
