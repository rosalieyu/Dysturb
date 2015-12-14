$(document).ready(function() {
    LOADING.load();
    SPLASH.load();
});


//shows and hides splash page while models load
var SPLASH = {
    initialize: function() {
        $('#enter').on('click touchstart', SPLASH.dissolve);
    },

    load: function(event) {
        $('#landing').show();
        $('#internal').hide();
    },

    dissolve: function(event) {
        event.preventDefault();
        $('#landing').fadeOut();
        $('#internal').fadeIn();
        $('#begin').on('click touchstart', SPLASH.hideInstructions);
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
        $('#facebook-link').on('click touchstart', SOCIAL.facebook);
        $('#twitter-link').on('click touchstart', SOCIAL.twitter);
        $('#embed').on('click touchstart', SOCIAL.embed);
        $('#credits-open').on('click touchstart', SOCIAL.credits);
        $('#magnum-fdn').on('click touchstart', SOCIAL.magnumLogo);
        $('#dysturb').on('click touchstart', SOCIAL.dysturbLogo);
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
        $('.close-x').on('click touchstart', SOCIAL.embedClose);
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
        $('.close-x').on('click touchstart', SOCIAL.creditsClose);
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





    