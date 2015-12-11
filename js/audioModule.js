/**
 *  create audio elements
 */


var Audio3d = {

	// set the overall volume boost (1 = normal)
	volumeLevel : 6,
	webAudioEnabled : typeof( (window.AudioContext || window.webkitAudioContext) ) != 'undefined',
	compressor: null,

	// initialize audio listener and return an array of audio elements
	initAudio : function(pathArray, cam, meshes) {
		var arr = [];

		// if there is no web audio, use html5 audio elements
		if (!this.webAudioEnabled) {
			for (var i = 0; i < pathArray.length; i++) {
				arr.push( new Audio(pathArray[i]) );
			}
		}

		// if there is web audio, use 3d panner
		else {
			this.listener = new THREE.AudioListener();
			this.compressor = this.listener.context.createDynamicsCompressor();
			this.compressor.knee.value = 32;
			this.compressor.ratio.value = 4;
			this.compressor.threshold.value = -48;
			this.compressor.connect(this.listener.context.destination);
			cam.add( this.listener );

			for (var i = 0; i < meshes.length; i++) {
				var snd = this._makeThreeAudio(pathArray[i], meshes[i], this.listener);
				arr.push(snd);
			}
		}

		return arr;
	},

	// return an audio element
	addAudioToMesh : function(pathToAudio, mesh) {

		if (!this.webAudioEnabled) {
			return new Audio(pathToAudio);
		}

		else {
			return this._makeThreeAudio(pathToAudio, mesh, this.listener);
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

		for (var i = 0; i < audioList.length; i++) {
			var dist = myPos.distanceTo(meshArray[i].position);
			if (dist < distanceThreshold && dist < maxDist) {
				maxDist = dist;
				closestItem = i;
			}
		}

		return closestItem;
	},

	// make a THREE.JS audio element and associate it with a mesh and listener
	// and TURN IT UP
	_makeThreeAudio : function(pathToAudio, mesh, listener) {
		var snd = new THREE.Audio(listener);
		snd.gain.gain.value = this.volumeLevel;
		snd.gain.disconnect();
		snd.gain.connect(this.compressor);
		snd.load(pathToAudio);
		mesh.add(snd);
		return snd;
	}

}