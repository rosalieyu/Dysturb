function initMobileControls(cam) {
    controls = new THREE.DeviceOrientationControls(cam);
    controls.connect();
    return controls;
    // document.body.addEventListener("touchstart", handleStart, false);
    // document.body.addEventListener("touchstart", get_mouse_coords, false);
    // document.body.addEventListener("touchend", handleEnd, false);
    // document.body.addEventListener("touchmove", handleMove, false);

    // var videoNum = 1;

    // function handleStart(evt) {

    //     evt.preventDefault();
    //     moveForward = true;

    // }

    // function get_mouse_coords(evt) {
    //     mouse_x = evt.pageX;
    //     mouse_y = evt.pageY;

    // }

    // function handleMove(evt) {
    //     evt.preventDefault();
    //     moveForward = false;
    //     moveBackward = false;

    //     var new_mouse_x = evt.pageX;


    //     if (evt.scale < 1.0) {
    //         moveForward = false;
    //         moveBackward = true;
    //     } else if (evt.scale > 1.0) {
    //         moveBackward = false;
    //         moveForward = true;
    //     }

    //     if ((new_mouse_x - mouse_x) > 60) {
    //         yawObject.rotation.y -= 0.02;
    //         moveLeft = true;
    //         moveRight = false;

    //     } else if ((new_mouse_x - mouse_x) < -60) {
    //         yawObject.rotation.y += 0.02;
    //         moveRight = true;
    //         moveLeft = false;

    //     }

    // }

    // function handleEnd(evt) {
    //     evt.preventDefault();
    //     moveForward = false;
    //     moveBackward = false;
    //     moveLeft = false;
    //     moveRight = false;
    // }
}


    // document.addEventListener("touchstart", handleStart, false);
    // document.addEventListener("touchmove", handleMove, false);
    // document.addEventListener("touchend", handleEnd, false);

    // function handleStart(evt) {
    //     mouse_x = evt.pageX;
    //     mouse_y = evt.pageY;
    //     console.log(evt);

    //     if (!begun) {
    //         if (whichMobile !== '' && noTouch) {

    //             for (var i = 0; i < videoList.length; i++) {
    //                 videoList[i].load();
    //                 videoList[i].play();
    //                 // videoList[i].stop();
    //             }
    //             noTouch = false;
    //             console.log("touch!");
    //         }
    //     }

    //     else {
    //         evt.preventDefault();
    //         moveForward = true;            
    //     }


    // }


    // function handleMove(evt) {
    //     if (begun) {
    //         evt.preventDefault();
    //         moveForward = false;
    //         moveBackward = false;
    //         var new_mouse_x = evt.pageX;
    //         if ((new_mouse_x - mouse_x) > 60) {
    //             moveLeft = true;
    //             moveRight = false;
    //         } else if ((new_mouse_x - mouse_x) < -60) {
    //             moveRight = true;
    //             moveLeft = false;
    //         }
    //         if (evt.scale < 1.0) {
    //             moveForward = false;
    //             moveBackward = true;
    //         } else if (evt.scale > 1.0) {
    //             moveBackward = false;
    //             moveForward = true;
    //         }   
    //     }

    // }

    // function handleEnd(evt) {
    //     if (begun) {
    //         evt.preventDefault();
    //         moveForward = false;
    //         moveBackward = false;
    //         moveLeft = false;
    //         moveRight = false;            
    //     }
    // }
