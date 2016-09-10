$(document).ready(function() {
    $("#new-quote").on("click", function(){
        $.getJSON("/dynamic/json/quotes.json", function(json) {
            var quoteText = "";
            var attributeText = "";
            var totalQuotes = json.length;

            function randomQuote() {
                return Math.floor(Math.random() * (totalQuotes));
            }
            var chosenQuote = randomQuote();
            console.log(chosenQuote);

            json = json.filter(function(val) {
                return (val.id == chosenQuote);
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
