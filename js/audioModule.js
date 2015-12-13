/**
 *  create audio elements
 */


var Audio3d = {

	// set the overall volume boost (1 = normal)
	volumeLevel : 6,
	webAudioEnabled : typeof( (window.AudioContext || window.webkitAudioContext) ) != 'undefined',
	compressor: null,

	// initialize audio listener and return an array of audio elements
	initAudio : function(pathArray, cam) {
		var arr = [];

		// if there is web audio, use 3d panner
		// else {
			if (!this.listener) {
				this.listener = new THREE.AudioListener();
			}

			this.compressor = this.listener.context.createDynamicsCompressor();
			this.compressor.knee.value = 32;
			this.compressor.ratio.value = 4;
			this.compressor.threshold.value = -48;
			this.compressor.connect(this.listener.context.destination);
			cam.add( this.listener );

		// }

		return arr;
	},

	// return an audio element
	addAudioToPosition : function(pathToAudio, pos) {

		if (!this.webAudioEnabled) {
			var a = new Audio(pathToAudio);
			// detect distances if web audio is not enabled
			a.position = pos;
		}

		else {
			return this._makeThreeAudio(pathToAudio, pos, this.listener);
		}
	},

	/**
	 *  Returns -1 if no indexes are detected. Otherwise returns index
	 *  of the closest item to your position.
	 *  
	 *  @param  {Array} meshArray Array of Meshes
	 *  @param  {Vec3} myPos       vec3 x y z position
	 *  @return {Number}             -1 or the index of the closest item in array
	 */
	detectDistances : function(meshArray, myPos) {
		// play with this number to calibrate max distance to trigger sound
		var distanceThreshold = 1200;

		var maxDist = 100000;
		var closestItem = -1;

		var str = '';
		// console.log(myPos);
		for (var i = 0; i < audioList.length; i++) {
			var dist = myPos.distanceTo(meshArray[i].position);
			if (dist < distanceThreshold && dist < maxDist) {
				maxDist = dist;
				closestItem = i;
			}
			// str += i + ' Dist: ' +dist;
		}
		// console.log(str);
		return closestItem;
	},

	// make a THREE.JS audio element and associate it with a mesh and listener
	// and TURN IT UP
	_makeThreeAudio : function(pathToAudio, pos, listener) {
		var snd = new THREE.Audio(listener);
		snd.gain.gain.value = this.volumeLevel;
		snd.gain.disconnect();
		snd.gain.connect(this.compressor);
		snd.setLoop(true);
		snd.load(pathToAudio);
		snd.position.set(pos.x, pos.y, pos.z);
		// mesh.add(snd);
		scene.add(snd);
		return snd;
	},

	_startIOS : function() {
		this.listener = new THREE.AudioListener();
		var context = i.context;
		var iosStarted = false;

		var startIOS = function() {
			if (iosStarted) return;

			// create empty buffer
			var buffer = audiocontext.createBuffer(1, 1, 22050);
			var source = audiocontext.createBufferSource();
			source.buffer = buffer;

			source.connect(context.destination);
			source.start(0);

			if (context.state === 'running') {
				iosStarted = true;
			}
		};
		document.addEventListener('touchend', startIOS, false);
		document.addEventListener('touchstart', startIOS, false);

	}

}