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
        $('.close-x').on('touchstart click', SOCIAL.embedClose);
    },

    embedClose: function(event) {
        $('#embed-box').hide();
        $('#instructions').show();
    },

    credits: function(event) {
        console.log('credits');
        $('#credits').show();
        $('#instructions').hide();
        $('.close-x').on('touchstart click', SOCIAL.creditsClose);
    },

    creditsClose: function(event) {
        console.log('creditsclose');
        $('#credits').hide();
        $('#instructions').show();   
    }
}





    