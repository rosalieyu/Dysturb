function initMobileControls(cam) {

    var velocity = new THREE.Vector3(0, 0, 0);
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
        console.log("touched");

        if (moveForward) {
            velocity.z -= 10.0;
        }
        camera.translateZ(velocity.z);
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