$(document).ready(function() {
    LOADING.load();
    SPLASH.load();
});


//shows and hides splash page while models load
var SPLASH = {
    initialize: function() {
        $('#enter').on('touchstart click', SPLASH.dissolve);
    },

    load: function(event) {
        $('#landing').show();
        $('#internal').hide();
    },

    dissolve: function(event) {
        event.preventDefault();
        $('#landing').fadeOut();
        $('#internal').fadeIn();
        $('#begin').on('touchstart click', SPLASH.hideInstructions);
        SOCIAL.initialize();
    },

    hideInstructions: function(event) {
        event.preventDefault();
        $('#instructions').hide();

    }
}

//shows and hides loading bar
var LOADING = {
    load: function(event) {
        $('#loading').show();
        $('#enter').hide();
    },

    complete: function(event) {
        $('#loading').hide();
        $('#enter').show();
        SPLASH.initialize();
    }

}

//social media share functionality
var SOCIAL = {
    initialize: function() {
        $('#facebook-link').on('touchstart click', SOCIAL.facebook);
        $('#twitter-link').on('touchstart click', SOCIAL.twitter);
        $('#embed').on('touchstart click', SOCIAL.embed);
        $('#credits-open').on('touchstart click', SOCIAL.credits);
    },

    facebook: function(event) {
        var targetUrl = $(this).attr('href');
        return !window.open(targetUrl, 
            'Share on Facebook', 
            'width=500,height=500');
    },

    twitter: function(event) {
        var targetUrl = $(this).attr('href');
        return !window.open(targetUrl, 
            'Share on Twitter', 
            'width=500,height=500');
    },

    embed: function(event) {
        $('#embed-box').show();
        $('#instructions').hide();
<<<<<<< HEAD
        $('.close-x').on('touchstart click', SOCIAL.embedClose);
=======
        $('#credits').hide();
        $('.close-x').on('click', SOCIAL.embedClose);
>>>>>>> e0c71b0780b03b242bf650de245461a6e2e32dad
    },

    embedClose: function(event) {
        $('#instructions').show();
        $('#embed-box').hide();
        $('#credits').hide();
    },

    credits: function(event) {
        console.log('credits');
        $('#credits').show();
        $('#instructions').hide();
<<<<<<< HEAD
        $('.close-x').on('touchstart click', SOCIAL.creditsClose);
=======
        $('#embed-box').hide();
        $('.close-x').on('click', SOCIAL.creditsClose);
>>>>>>> e0c71b0780b03b242bf650de245461a6e2e32dad
    },

    creditsClose: function(event) {
        console.log('creditsclose');
        $('#instructions').show();
        $('#credits').hide();
        $('#embed-box').hide();   
    }
}





    