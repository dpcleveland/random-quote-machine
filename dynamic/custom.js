$(document).ready(function() {
    $("#new-quote").on("click", function(){
        $.getJSON("/dynamic/json/quotes.json", function(json) {
            var quoteText = "";
            var attributeText = "";

            json = json.filter(function(val) {
                return (val.id == Math.floor(Math.random() * (json.length - 1)));
            });

            json.forEach(function(val) {
                quoteText += "<i class='fa fa-quote-left' aria-hidden='true'></i> ";
                quoteText += val.quote;
                attributeText += val.attribute;
            });

            $("#quote-text").html(quoteText);
            $("#attribution-text").html(attributeText);
        });
    });
});
