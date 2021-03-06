var quotesArray = [
    {
        "id": 0,
        "quote": "It isn't what we say or think that defines us, but what we do.",
        "attribute": "Jane Austen",
        "color": "#73a858"
    },
    {
        "id": 1,
        "quote": "People will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
        "attribute": "Maya Angelou",
        "color": "#342224"
    },
    {
        "id": 2,
        "quote": "Sometimes you will never know the value of a moment until it becomes a memory.",
        "attribute": "Dr. Seuss",
        "color": "#9B59B6"
    },
    {
        "id": 3,
        "quote": "We can complain because rose bushes have throns, or rejoice because thorn bushes have roses.",
        "attribute": "Abraham Lincoln",
        "color": "#696060"
    },
    {
        "id": 4,
        "quote": "Quiet people have the loudest minds.",
        "attribute": "Stephen King",
        "color": "#77B1A9"
    },
    {
        "id": 5,
        "quote": "The Earth has music for those who listen.",
        "attribute": "Shakespeare",
        "color": "#FB6964"
    },
    {
        "id": 6,
        "quote": "To live is the rarest thing in the world. Most people just exist.",
        "attribute": "Oscar Wilde",
        "color": "#BDBB99"
    },
    {
        "id": 7,
        "quote": "Never give up on something that you can't go a day without thinking about.",
        "attribute": "Winston Churchill",
        "color": "#16A085"
    },
    {
        "id": 8,
        "quote": "Creativity is intelligence having fun.",
        "attribute": "Albert Einstein",
        "color": "#77B1A9"
    },
    {
        "id": 9,
        "quote": "May the Force be with you.",
        "attribute": "Star Wars",
        "color": "#472E32"
    },
    {
        "id": 10,
        "quote": "You talking to me?",
        "attribute": "Taxi Driver",
        "color": "#73a858"
    },
    {
        "id": 11,
        "quote": "What we've got here is failure to communicate.",
        "attribute": "Cool Hand Luke",
        "color": "#6f6c6c"
    },
    {
        "id": 12,
        "quote": "I'll be back.",
        "attribute": "The Terminator",
        "color": "#323030"
    },
    {
        "id": 13,
        "quote": "Houston, we have a problem.",
        "attribute": "Apollo 13",
        "color": "#FB6964"
    },
    {
        "id": 14,
        "quote": "I feel the need - the need for speed!",
        "attribute": "Top Gun",
        "color": "#342224"
    }
]

$(document).ready(function() {
    $("#new-quote").on("click", function(){

            var quoteText = "";
            var attributeText = "";
            var totalQuotes = quotesArray.length;
            var newBackgroundColor = "";
            var returnedQuote = "";
            var quoteImage = "<i class='fa fa-quote-left' aria-hidden='true'></i> ";

            function randomQuote() {
                return Math.floor(Math.random() * (totalQuotes));
            }
            var chosenQuote = randomQuote();
            console.log(chosenQuote);

            returnedQuote = quotesArray.filter(function(val) {
                return (val.id == chosenQuote);
            });

            returnedQuote.forEach(function(val) {
                quoteText += val.quote;
                attributeText += val.attribute;
                newBackgroundColor = val.color;
            });

            $('#quote-text').html(quoteImage + quoteText);
            $('#attribution-text').html(attributeText);
            $('body').css('background-color', newBackgroundColor);
            $('.actions button').css('background-color', newBackgroundColor);
            $('.social ul li').css('background', newBackgroundColor);
            $('#twitter-share').attr('href', 'https://twitter.com/intent/tweet?text=' + quoteText + ' - ' + attributeText);
    });
});
