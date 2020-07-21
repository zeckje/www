 AFRAME.registerComponent('sphereexpand', {
    
   init: function () {

      let homeworldelements = document.querySelectorAll(".homeworld");
      let sky = document.querySelector("#sky");

      let sphereloader = () => {
      sky.setAttribute("src", "#bordeauxtheater");
      homeworldelements.forEach((homeworldelement) => {
      homeworldelement.setAttribute("visible", false)})
      }

      this.el.addEventListener('click', sphereloader);
        
   }});
   
   AFRAME.registerComponent('clicktext1', {
			init: function () {
				 let myVideo = document.querySelector('.blocktarget');
				 let blockhere = () => {
                  myVideo.setAttribute("style","opacity:10%");
                  }
                  this.el.addEventListener('click', blockhere);
				
			}
		});
   
    AFRAME.registerComponent('sphereexpand2', {
    
   init: function () {

      let homeworldelements = document.querySelectorAll(".homeworld");
	  let homeworld2elements = document.querySelectorAll(".homeworld2");
	  let homeworld3elements = document.querySelectorAll(".homeworld3");
      let sky = document.querySelector("#sky");
	 

      let sphereloader = () => {
      sky.setAttribute("src", "#classa2");
	  homeworldelements.forEach((homeworldelement) => {
      homeworldelement.setAttribute("visible", false);
	  homeworldelement.setAttribute("position","-10 0 -100")})
      homeworld2elements.forEach((homeworld2element) => {
      homeworld2element.setAttribute("visible", true);
	  homeworld2element.setAttribute("position","-10 0 -12")})
	  homeworld3elements.forEach((homeworld3element) => {
      homeworld3element.setAttribute("visible", false);
	  homeworld3element.setAttribute("position","-10 0 -100")})
      }
	  
	  
      
      this.el.addEventListener('click', sphereloader);
    
        
   }});
  
    AFRAME.registerComponent('sphereexpand3', {
    
   init: function () {

      let homeworldelements = document.querySelectorAll(".homeworld");
	  let homeworld2elements = document.querySelectorAll(".homeworld2");
	  let homeworld3elements = document.querySelectorAll(".homeworld3");
      let sky = document.querySelector("#sky");
	 

      let sphereloader = () => {
      sky.setAttribute("src", "#jam");
      homeworldelements.forEach((homeworldelement) => {
      homeworldelement.setAttribute("visible", false);
	  homeworldelement.setAttribute("position","-10 0 -100")})
      homeworld2elements.forEach((homeworld2element) => {
      homeworld2element.setAttribute("visible", false);
	  homeworld2element.setAttribute("position","-10 0 -100")})
	  homeworld3elements.forEach((homeworld3element) => {
      homeworld3element.setAttribute("visible", true);
	  homeworld3element.setAttribute("position","-10 0 -12")})
      }
	  
     
      this.el.addEventListener('click', sphereloader);
    
        
   }});
   
     AFRAME.registerComponent('sphereexpand4', {
    
   init: function () {

      let homeworldelements = document.querySelectorAll(".homeworld");
	  let homeworld2elements = document.querySelectorAll(".homeworld2");
	  let homeworld3elements = document.querySelectorAll(".homeworld3");
      let sky = document.querySelector("#sky");
	 

      let sphereloader = () => {
      sky.setAttribute("src", "#classa1");
      homeworldelements.forEach((homeworldelement) => {
      homeworldelement.setAttribute("visible", true);
	  homeworldelement.setAttribute("position","-10 0 -12")})
      homeworld2elements.forEach((homeworld2element) => {
      homeworld2element.setAttribute("visible", false);
	  homeworld2element.setAttribute("position","-10 0 -100")})
	  homeworld3elements.forEach((homeworld3element) => {
      homeworld3element.setAttribute("visible", false);
	  homeworld3element.setAttribute("position","-10 0 -100")})     
      }
	  
     
      this.el.addEventListener('click', sphereloader);
    
        
   }});
   
        AFRAME.registerComponent('sphereexpand5', {
    
   init: function () {

      let homeworldelements = document.querySelectorAll(".homeworld");
	  let homeworld2elements = document.querySelectorAll(".homeworld2");
	  let homeworld3elements = document.querySelectorAll(".homeworld3");
      let sky = document.querySelector("#sky");
	 

      let sphereloader = () => {
      sky.setAttribute("src", "#jam");
      homeworldelements.forEach((homeworldelement) => {
      homeworldelement.setAttribute("visible", false);
	  homeworldelement.setAttribute("position","-10 0 -100")})
      homeworld2elements.forEach((homeworld2element) => {
      homeworld2element.setAttribute("visible", false);
	  homeworld2element.setAttribute("position","-10 0 -100")})
	  homeworld3elements.forEach((homeworld3element) => {
      homeworld3element.setAttribute("visible", true);
	  homeworld3element.setAttribute("position","-10 0 -12")})      
      }
	  
     
      this.el.addEventListener('click', sphereloader);
    
        
   }});
   
           AFRAME.registerComponent('sphereexpand6', {
    
   init: function () {

      let homeworldelements = document.querySelectorAll(".homeworld");
	  let homeworld2elements = document.querySelectorAll(".homeworld2");
	  let homeworld3elements = document.querySelectorAll(".homeworld3");
      let sky = document.querySelector("#sky");
	 

      let sphereloader = () => {
      sky.setAttribute("src", "#classa1");
      homeworldelements.forEach((homeworldelement) => {
      homeworldelement.setAttribute("visible", true);
	  homeworldelement.setAttribute("position","-10 0 -12")})
      homeworld2elements.forEach((homeworld2element) => {
      homeworld2element.setAttribute("visible", false);
	  homeworld2element.setAttribute("position","-10 0 -100")})
	  homeworld3elements.forEach((homeworld3element) => {
      homeworld3element.setAttribute("visible", false);
	  homeworld3element.setAttribute("position","-10 0 -100")})     
      }
	  
     
      this.el.addEventListener('click', sphereloader);
    
        
   }});
   
              AFRAME.registerComponent('sphereexpand7', {
    
   init: function () {

      let homeworldelements = document.querySelectorAll(".homeworld");
	  let homeworld2elements = document.querySelectorAll(".homeworld2");
	  let homeworld3elements = document.querySelectorAll(".homeworld3");
      let sky = document.querySelector("#sky");
	 

      let sphereloader = () => {
      sky.setAttribute("src", "#classa2");
      homeworldelements.forEach((homeworldelement) => {
      homeworldelement.setAttribute("visible", false);
	  homeworldelement.setAttribute("position","-10 0 -100")})
      homeworld2elements.forEach((homeworld2element) => {
      homeworld2element.setAttribute("visible", true);
	  homeworld2element.setAttribute("position","-10 0 -12")})
	  homeworld3elements.forEach((homeworld3element) => {
      homeworld3element.setAttribute("visible", false);
	  homeworld3element.setAttribute("position","-10 0 -100")})      
      }
	  
     
      this.el.addEventListener('click', sphereloader);
    
        
   }});
   
   
  
  

