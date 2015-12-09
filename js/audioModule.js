/**
 *  create audio elements
 */


var Audio3d = function() {

	var webAudioEnabled = typeof( (window.AudioContext || window.webkitAudioContext) ) != 'undefined';

	// initialize audio listener and return an array of audio elements
	Audio3d.initAudio = function(pathArray, cam, meshes) {
		var arr = [];

		// if there is no web audio, use html5 audio elements
		if (!webAudioEnabled) {
			for (var i = 0; i < pathArray.length; i++) {
				arr.push( new Audio(pathArray[i]) );
			}
		}

		// if there is web audio, use 3d panner
		else {
			Audio3d.listener = new THREE.AudioListener();
			cam.add( Audio3d.listener );

			for (var i = 0; i < meshes.length; i++) {
				var snd = new THREE.Audio( Audio3d.listener );
				snd.load(pathArray[i]);
				meshes[i].add(snd);
				arr.push(snd);
			}
		}

		return arr;
	};

	// return an audio element
	Audio3d.addAudioToMesh = function(pathToAudio, mesh) {

		if (!webAudioEnabled) {
			return new Audio(pathToAudio);
		}

		else {
			var snd = new THREE.Audio(Audio3d.listener);
			snd.load(pathToAudio);

			mesh.add(snd);

			return snd;
		}
	}

}

Audio3d();