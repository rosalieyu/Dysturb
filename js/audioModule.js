/**
 *  create audio elements
 */

// initialize audio listener and return an array of audio elements
var makeAudio = function(pathArray, cam, meshes) {
	var arr = [];
	var webAudioEnabled = typeof( (window.AudioContext || window.webkitAudioContext) ) != 'undefined';

	// if there is no web audio, use html5 audio elements
	if (!webAudioEnabled) {
		for (var i = 0; i < pathArray.length; i++) {
			arr.push(new Audio(pathArray[i]));
		}
	}

	// if there is web audio, use 3d panner
	else {
		var listener = new THREE.AudioListener();
		cam.add( listener );

		for (var i = 0; i < meshes.length; i++) {
			var snd = new THREE.Audio(listener);
			snd.load(pathArray[i]);
			meshes[i].add(snd);
			arr.push(snd);
		}
	}

	return arr;
};

// return an audio element
function addAudioToMesh(pathToAudio, mesh, cam) {
	var webAudioEnabled = typeof( (window.AudioContext || window.webkitAudioContext) ) != 'undefined';

	// if there is no web audio, use html5 audio elements
	if (!webAudioEnabled) {
		return new Audio(pathArray[i]);
	}

	else {
		var listener = cam.children.filter(
			function(obj) {
				return obj instanceof THREE.AudioListener;
			}
		)[0];

		var snd = new THREE.Audio(listener);
		snd.load(pathToAudio);

		mesh.add(snd);

		return snd;
	}
}