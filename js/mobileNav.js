function initMobileControls(cam) {
    controls = new THREE.DeviceOrientationControls(cam);
    controls.connect();
    controlsEnabled = true;

    document.body.addEventListener("touchstart", handleStart, false);
    // document.body.addEventListener("touchstart", get_mouse_coords, false);
    document.body.addEventListener("touchend", handleEnd, false);
    // document.body.addEventListener("touchmove", handleMove, false);

    function handleStart(evt) {
        evt.preventDefault();
        moveForward = true;

        // velocity.x -= velocity.x * 10.0 * delta;
        // velocity.z -= velocity.z * 10.0 * delta;
        // if (moveForward && !isHitFront) {
        //     velocity.z -= 10.0 * delta;
        //     isHitBack = false;
        // }
        // moveForward = true;
    }

    function handleEnd(evt) {
        evt.preventDefault();
        moveForward = false;
        moveBackward = false;
        moveLeft = false;
        moveRight = false;
    }
    return controls;

}