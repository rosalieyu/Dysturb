$(document).ready(function() {
    LOADING.load();
    SPLASH.load();
    EMBED.initialize();
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
        console.log('dissolving');
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

var EMBED = {
    initialize: function() {
        if (window!=window.top) {
            console.log('embedded');
            event.preventDefault();
            $('#landing').hide();
            $('#internal').show();
            $('#begin').on('click touchstart', SPLASH.hideInstructions);
            $('#nav-full').css('margin-bottom', '4%');
            $('#instructions-text').css('font-size', '1.2em');
            $('#instructions-text').css('width', '50%');
            $('#instructions-text').css('margin', '0 auto 2% auto');
            $('.model p').css('font-size', '0.8em');
            $('.model p').css('margin-bottom', '2%');
            $('embed-code').css('height', '75px');
            $('#additional-credits').hide();
            $('#additional-about').show();
            SOCIAL.initialize();
        }
    }
}

//shows and hides loading bar
var LOADING = {
    load: function(event) {
        $('#loading').show();
        $('#enter').hide();
        console.log('loadingtest');
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
        $('#about-link-out').on('click touchstart', SOCIAL.aboutLinkOut);
        $('#dysturb').on('click touchstart', SOCIAL.dysturbLogo);
        $('#about-open').on('click touchstart', SOCIAL.about);
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
        $('#about').hide();
        $('.close-x').on('click touchstart', SOCIAL.embedClose);
    },

    embedClose: function(event) {
        $('#instructions').show();
        $('#embed-box').hide();
        $('#credits').hide();
        $('#about').hide();
    },

    credits: function(event) {
        console.log('credits');
        $('#credits').show();
        $('#instructions').hide();
        $('#embed-box').hide();
        $('#about').hide();
        $('.close-x').on('click touchstart', SOCIAL.creditsClose);
    },

    creditsClose: function(event) {
        console.log('creditsclose');
        $('#instructions').show();
        $('#credits').hide();
        $('#embed-box').hide();   
        $('#about').hide();
    },

    about: function(event) {
        $('#about').show();
        $('#instructions').hide();
        $('#embed-box').hide();
        $('#credits').hide();
        $('.close-x').on('click touchstart', SOCIAL.creditsClose);
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
    },

    aboutLinkOut: function(event) {
        var targetUrl = $(this).attr('href');
        return !window.open(targetUrl, 
        'Reframe Climate');
    }
}





    