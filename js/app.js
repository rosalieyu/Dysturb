$(document).ready(function() {
    LOADING.load();
    SPLASH.load();
});


//shows and hides splash page while models load
var SPLASH = {
    initialize: function() {
        $('#enter').on('click tap', SPLASH.dissolve);
    },

    load: function(event) {
        $('#landing').show();
        $('#internal').hide();
    },

    dissolve: function(event) {
        event.preventDefault();
        $('#landing').fadeOut();
        $('#internal').fadeIn();
        $('#begin').on('click tap', SPLASH.hideInstructions);
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
        $('#facebook-link').on('click tap', SOCIAL.facebook);
        $('#twitter-link').on('click tap', SOCIAL.twitter);
        $('#embed').on('click tap', SOCIAL.embed);
        $('#credits-open').on('click tap', SOCIAL.credits);
        $('#magnum-fdn').on('click tap', SOCIAL.magnumLogo);
        $('#dysturb').on('click tap', SOCIAL.dysturbLogo);
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
        $('#credits').hide();
        $('.close-x').on('click tap', SOCIAL.embedClose);
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
        $('#embed-box').hide();
        $('.close-x').on('click tap', SOCIAL.creditsClose);
    },

    creditsClose: function(event) {
        console.log('creditsclose');
        $('#instructions').show();
        $('#credits').hide();
        $('#embed-box').hide();   
    },

    magnumLogo: function(event) {
        var targetUrl = $(this).attr('href');
        
        return !window.open(targetUrl, 
            'Magnum Foundation'
            );
    },

    dysturbLogo: function(event) {
        var targetUrl = $(this).attr('href');
        return !window.open(targetUrl, 
        'Dysturb'
        );
    }
}





    