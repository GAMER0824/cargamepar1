AFRAME.registerComponent('car-move',{


    init:function(){
        document.addEventListener("keydown", (e)=>{

            var car=document.querySelector("#car")
            var position=car.getAttribute('position')
            var rotation=car.getAttribute('rotation');

            var camera = document.querySelector("#cam")
            var car3D=document.querySelector("#car").object3D;
            
            //get the camera direction as Three.js Vector
            var direction = new THREE.Vector3();
            car3D.getWorldDirection(direction);

            


             //Moving Car Forward
           if(e.key=="ArrowUp" || e.key=='w'){
                position.z+=1
                car.setAttribute('position',position);
           }
           
           //Moving Car Left
           if(e.key=="ArrowLeft" || e.key=="a"){

                //get the camera direction as Three.js Vector
                var direction = new THREE.Vector3();
                car3D.getWorldDirection(direction);

                //console.log(direction)
                // position.x+=1
                // car.setAttribute("position",position)
                rotation.y+=5
                car.setAttribute('rotation',rotation)  
                camera.setAttribute('rotation',rotation)     
           }
           
           //Moving Car Reverse
           if(e.key=="ArrowDown" || e.key=="s"){
                position.z-=1
                car.setAttribute("position",position)
           }    

            //Moving Car Right
           if(e.key=="ArrowRight" || e.key=="d"){

           // position.x-=1
           // car.setAttribute("position",position)

            rotation.y-=5
            car.setAttribute("rotation",rotation)
            camera.setAttribute('rotation',rotation)     
           }
           
        })
    }
})