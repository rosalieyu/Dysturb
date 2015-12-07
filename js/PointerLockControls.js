/**
 * @author mrdoob / http://mrdoob.com/
 */

THREE.PointerLockControls = function(camera) {

    var scope = this;

    camera.rotation.set(0, 0, 0);

    var pitchObject = new THREE.Object3D();
    pitchObject.add(camera);

    var yawObject = new THREE.Object3D();
    yawObject.position.y = 50;
    yawObject.add(pitchObject);

    var PI_2 = Math.PI / 2;

    document.body.addEventListener("touchstart", handleStart, false);
    document.body.addEventListener("touchstart", get_mouse_coords, false);
    document.body.addEventListener("touchend", handleEnd, false);
    document.body.addEventListener("touchmove", handleMove, false);

    var videoNum = 1;

    function handleStart(evt) {

        evt.preventDefault();
        moveForward = true;

    }

    function get_mouse_coords(evt) {
        mouse_x = evt.pageX;
        mouse_y = evt.pageY;

    }

    function handleMove(evt) {
        evt.preventDefault();
        moveForward = false;
        moveBackward = false;

        var new_mouse_x = evt.pageX;


        if (evt.scale < 1.0) {
            moveForward = false;
            moveBackward = true;
        } else if (evt.scale > 1.0) {
            moveBackward = false;
            moveForward = true;
        }

        if ((new_mouse_x - mouse_x) > 60) {
            yawObject.rotation.y -= 0.02;
            // moveLeft = true;
            // moveRight = false;

        } else if ((new_mouse_x - mouse_x) < -60) {
            yawObject.rotation.y += 0.02;
            // moveRight = true;
            // moveLeft = false;

        }

    }

    function handleEnd(evt) {
        evt.preventDefault();
        moveForward = false;
        moveBackward = false;
        moveLeft = false;
        moveRight = false;
    }

    var onMouseMove = function(evt) {

        if (scope.enabled === false) return;

        var movementX = event.movementX || event.mozMovementX || event.webkitMovementX || 0;
        var movementY = event.movementY || event.mozMovementY || event.webkitMovementY || 0;

        yawObject.rotation.y -= movementX * 0.001;

        //pitchObject.rotation.x -= movementY * 0.002;

        //pitchObject.rotation.x = Math.max( - PI_2, Math.min( PI_2, pitchObject.rotation.x ) );

    };

    this.dispose = function() {

        document.removeEventListener('mousemove', onMouseMove, false);

    }

    document.addEventListener('mousemove', onMouseMove, false);

    this.enabled = true;

    this.getObject = function() {

        return yawObject;

    };

    this.position = function() {

        return yawObject.position;

    };


    this.getDirection = function() {

        // assumes the camera itself is not rotated

        var direction = new THREE.Vector3(0, 0, -1);
        var rotation = new THREE.Euler(0, 0, 0, "YXZ");

        return function(v) {

            rotation.set(pitchObject.rotation.x, yawObject.rotation.y, 0);

            v.copy(direction).applyEuler(rotation);

            return v;

        }

    }();

};