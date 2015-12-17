function initMobileControls(cam) {


    controls = new THREE.DeviceOrientationControls(cam);
    controls.connect();
    controlsEnabled = true;

    document.body.addEventListener("touchstart", handleStart, false);
    // document.body.addEventListener("touchstart", get_mouse_coords, false);
    document.body.addEventListener("touchend", handleEnd, false);
    document.body.addEventListener("touchcancel", handleEnd, false);

    // document.body.addEventListener("touchmove", handleMove, false);

    function handleStart(evt) {
        fingerDown = true;
        evt.preventDefault();
        moveForward = true;
        console.log("touched");

        if (whichMobile == "android_mobile") {
            if (!videoIsLoaded) {
                for (var i = 0; i < videoList.length; i++) {
                    videoList[i].load();
                    videoIsLoaded = true;
                    console.log("videoIsLoaded");
                }
            }
            if (hit0) {
                videoList[0].play();
            }
            if (hit1) {
                videoList[1].play();
            }
            if (hit2) {
                videoList[2].play();
            }

            // console.log("play video!");
        }
    }



    function handleEnd(evt) {
        evt.preventDefault();
        fingerDown = false;

        moveForward = false;
        moveBackward = false;
        moveLeft = false;
        moveRight = false;
    }

    return controls;

}