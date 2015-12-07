/**
 *  create audio elements
 */

// return an array of audio elements
var makeAudio = function(pathArray, cam, movieScreenArrayMeshes) {
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

		for (var i = 0; i < pathArray.length; i++) {
			var snd = new THREE.Audio(listener);
			snd.load(pathArray[i]);
			movieScreenArrayMeshes[i].add(snd)
			arr.push(snd);
		}
	}

	return arr;
};