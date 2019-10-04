
function Carousel(parentElement){
    this.parentElement = parentElement;
    this.left = null;
    this.right = null;
    this.imageList = [];
    this.wrapperWidth = 0;
    this.imageCount = null;
    this.wrapperElement = null;
    this.controller = null;
    this.controllerList = [];


    this.init = function(){
        this.left = document.createElement('button');
        this.right = document.createElement('button');
        this.controller = document.createElement('ul');
        this.wrapperElement = this.parentElement.getElementsByClassName('wrapper')[0];
        this.imageList = this.wrapperElement.children;
        this.imageCount = this.wrapperElement.children.length;
        this.setContainerProperty();
        this.setImageProperty();
        this.setWrapperProperty();
        
        this.setButtonProperty();
        this.setControllerProperty();
        
        this.parentElement.appendChild(this.left);
        this.parentElement.appendChild(this.right);
        
    }

    this.setContainerProperty = function(){
        Object.assign(this.parentElement.style,{
            width:'40%',
            position:'relative',
            overflow:'hidden'
        });
        
        this.parentElement.classList.add('clearfix');
        
    }

    this.setWrapperProperty = function(){
        for (var i = 0;i<this.imageCount;i++){
            this.wrapperWidth = this.wrapperWidth + this.imageList[i].width;
        }
        console.log(this.wrapperWidth);
        Object.assign(this.wrapperElement.style,{
            position:'absolute',
            left:'0px',
            width:this.wrapperWidth+'px'
        });
        
        this.wrapperElement.classList.add('clearfix');
    }

    this.setImageProperty = function(){
        imageWidth = this.parentElement.clientWidth;
        for(var i = 0; i<this.imageCount; i++){
            this.imageList[i].style.left = `${i*imageWidth}px`;
            this.imageList[i].style.position = 'absolute';
            this.imageList[i].style.width = this.wrapperElement.style.width + '%';
            
        }
    }

    this.setButtonProperty = function(){
        this.left.innerHTMl = 'left';
        Object.assign(this.left.style,{
            float:'left',
            width:'45px',
            padding:'5px',
            background:'transparent',
            position:'relative',
            marginTop:'140px',
            marginLeft:'-240px',
            left:'0px',
            cursor:'pointer'
        });
        this.onLeftButtonClick(this.wrapperElement,this.wrapperWidth);
        

        this.right.innerHTMl = 'right';
        Object.assign(this.right.style,{
            float:'right',
            width:'45px',
            padding:'5px',
            background:'transparent',
            position:'relative',
            marginTop:'140px',
            cursor:'pointer'
        });
        this.onRightButtonClick(this.wrapperElement,this.wrapperWidth);
    }

    this.setControllerProperty = function(){
        for(var i = 0; i<this.imageCount;i++){
            this.controllerList[i]=document.createElement('li');
            this.controllerList[i].style.width = '5px';
            this.controllerList[i].style.float ='left';
            //this.controllerList[i].style.backgroundImage =  'url("./images/right.png")';
            this.controllerList[i].style.backgroundColor = 'grey';
            this.controllerList[i].style.display = 'block';
            this.controllerList[i].style.cursor = 'pointer';
            this.controllerList[i].style.position='relative';
            this.controllerList[i].style.marginRight='5px';
            this.controllerList[i].style.borderRadius = '50%';
            this.controllerList[i].style.top = '250px';
            this.controllerList[i].style.fontSize = '14px';
            this.controllerList[i].style.padding ='5px 5px';
            this.controllerList[i].setAttribute('id',i);
            this.getCurrentSlide(this.controllerList[i]);
            this.controller.appendChild(this.controllerList[i]);
        }
        this.parentElement.appendChild(this.controller);
        this.parentElement.getElementsByTagName('li').innerHTMl = 'o';
        this.controller.classList.add('ulClass');
        
    }

    
    this.onLeftButtonClick = function(wrapperElement,wrapperWidth){
        this.left.onclick = function(){
            var counter = 0;
            var interval = setInterval(function(){
                var left = wrapperElement.style.left;
        
                wrapper_left_pos = parseInt(left.substring(0,left.length-2));
                    if(wrapper_left_pos<= (-wrapperWidth)){
                        wrapperElement.style.left= 0 +'px';
                        wrapper_left_pos = wrapperElement.style.left;
                    }
                    
                wrapperElement.style.left = (wrapper_left_pos-50)+ 'px';
                console.log(wrapperElement.style.left);
                counter++;
                if(counter>=10){
                    clearInterval(interval);
                }
            },100);
        }
    }

    this.onRightButtonClick = function(wrapperElement,wrapperWidth){
        this.right.onclick = function(){
            var counter = 0;
            var interval = setInterval(function(){
                var left = wrapperElement.style.left;
        
                wrapper_left_pos = parseInt(left.substring(0,left.length-2));
                    if(wrapper_left_pos>=0 ){
                        wrapperElement.style.left= (-wrapperWidth) +'px';
                        wrapper_left_pos = wrapperElement.style.left;
                    }
                wrapperElement.style.left = (wrapper_left_pos+50)+ 'px';
                console.log(wrapperElement.style.left);
                counter++;
                if(counter>=10){
                    clearInterval(interval);
                }
            },100);
        }
    }

    this.getCurrentSlide = function(controllerList){
        controllerList.onclick = function(){

            list_ID = controllerList.id;
            
            
            console.log(controllerList.id);

            for(var i=0;i<this.imageCount;i++){
                if(i==list_ID){
                controllerList.style.backgroundImage = "none"; 
                controllerList.style.backgroundColor = "black";
                }
                else{
                    this.controllerList[i].style.backgroundColor = 'grey';
                }
            }
            
            // console.log(list_ID);
            // var wrapper_left_pos= list_ID*500;
            // console.log(wrapper_left_pos);
            // this.wrapperElement.style.left = `${-wrapper_left_pos}px`;
            // console.log(wrapper.style.left);
        }
        
    }
    

}

var carouselOne = document.getElementById('carousel-one');
var carouselTwo = document.getElementById('carousel-two');
var carouselThree = document.getElementById('carousel-three');
var carouselFour = document.getElementById('carousel-four');

carousel1 = new Carousel(carouselOne);
carousel2 = new Carousel(carouselTwo);
carousel3 = new Carousel(carouselThree);
carousel4 = new Carousel(carouselFour);

carousel1.init();
carousel2.init();
carousel3.init();
carousel4.init();




