window.onload = function() {
		var context = new AudioContext();
		}
		
		AFRAME.registerComponent('play', {
			init: function () {
				var entity = document.querySelector('#test');
				this.el.addEventListener('click', function () {
					entity.components.sound.playSound();
					  context.resume().then(() => {
    console.log('Playback resumed successfully');
  });
				});
			}
		});
		AFRAME.registerComponent('pause', {
			init: function () {
				var entity = document.querySelector('#test');
				this.el.addEventListener('click', function () {
					entity.components.sound.pauseSound();
					context.resume().then(() => {
    console.log('Playback resumed successfully');
  });
				});
			}
		});
		AFRAME.registerComponent('stop', {
			init: function () {
				var entity = document.querySelector('#test');
				this.el.addEventListener('click', function () {
					entity.components.sound.stopSound();
					context.resume().then(() => {
    console.log('Playback resumed successfully');
  });
				});
			}
		});