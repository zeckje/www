AFRAME.registerComponent('play', {
  
      init: function () {
        
        let audiosource = document.querySelector('#musicpanel');

        let musicplay = () => {
        audiosource.components.sound.playSound()
        }
        
        this.el.addEventListener('click', musicplay);

      }});
    
    AFRAME.registerComponent('stop', {
      init: function () {
      
        let audiosource = document.querySelector('#musicpanel');

        let musicstop = () => {
        audiosource.components.sound.stopSound()
        }
        
        this.el.addEventListener('click', musicstop);
        
      }});
	AFRAME.registerComponent('pause', {
      init: function () {
      
        let audiosource = document.querySelector('#musicpanel');

        let musicpause = () => {
        audiosource.components.sound.pauseSound()
        }
        
        this.el.addEventListener('click', musicpause);
        
      }});