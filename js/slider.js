//getting elements from user
var container = document.getElementsByClassName("container")[0];
var wrapper = document.getElementsByClassName("wrapper")[0];
wrapper.classList.add('clearfix');

var images = wrapper.children;

//styling elements
Object.assign(wrapper.style,{
    width:'500px',
    height:'195px',
    left:'0px',
    position:'absolute'
});

Object.assign(container.style,{
    width:'500px',
    height:'195px',
    position:'relative',
    overflow:'hidden',
    margin:'0 auto'
});

for(var i=0;i<images.length;i++){
    images[i].style.left = `${i*500}px`;
    images[i].style.position = "absolute";
    images[i].style.width="500px";
}

//Adding slider button 
container.classList.add('clearfix');

var left_btn,right_btn;

container.appendChild(left_btn=document.createElement("button"));
container.appendChild(right_btn=document.createElement("button"));

;

//Styling slider button
Object.assign(left_btn.style,{
    float:'left',
    width:'45px',
    height:'45px',
    backgroundImage:'url("./images/left.png")',
    backgroundRepeat:'no-repeat',
    background:'transparent',
    position:'relative',
    marginTop:'70px',
    borderRadius:'50%',
    cursor:'pointer'
});

Object.assign(right_btn.style,{
    float:'right',
    width:'45px',
    height:'45px',
    backgroundImage:'url("./images/right.png")',
    backgroundRepeat:'no-repeat',
    position:'relative',
    background:'transparent',
    marginTop:'70px',
    borderRadius:'50%',
    cursor:'pointer'
});

 
//slide left function
function slideLeft(){
    var counter = 0;
    var interval = setInterval(function(){
        var left = wrapper.style.left;
        wrapper_left_pos = parseInt(left.substring(0,left.length-2));
        if(wrapper_left_pos== (-1450)){
            wrapper.style.left=`${0}px`;
            wrapper_left_pos = wrapper.style.left;
        }
        
        wrapper.style.left = `${wrapper_left_pos-50}px`;
        counter++;
        if(counter>=10){
            clearInterval(interval);
        }
    },100);
}

//slide right function
function slideRight(){
    var counter = 0;
        var interval = setInterval(function(){
            var left = wrapper.style.left;
            wrapper_left_pos = parseInt(left.substring(0,left.length-2));
            if(wrapper_left_pos == 0){
                wrapper.style.left=`${-1450}px`;
                wrapper_left_pos = wrapper.style.left;
            }
            wrapper.style.left = `${wrapper_left_pos+50}px`;
            counter++;
            if(counter>=10){
                clearInterval(interval);
            }
        },100);
}

// automatic slide function
function automaticSlide(){
    var interval = setInterval(function(){
        var counter = 0;
        var left = wrapper.style.left;
        wrapper_left_pos = parseInt(left.substring(0,left.length-2));
        if(wrapper_left_pos == 0){
            wrapper.style.left=`${-1450}px`;
            wrapper_left_pos = wrapper.style.left;
        }
        wrapper.style.left = `${wrapper_left_pos+50}px`;
        counter++;
        if(counter>=10){
            clearInterval(interval);
        }
    },100);
}


function stopAutomaticSlide(){
    main_body.removeAttribute("onload","automaticSlide()");
}

//function to get respective images on click
function getCurrentSlide(){
    list_ID = event.srcElement.id;
    list = document.getElementsByTagName('li');
    list_item = document.getElementById(list_ID);
    for(var i=0;i<images.length;i++){
        if(i==list_ID){
        list_item.style.backgroundImage = "none"; 
        list_item.style.backgroundColor = "grey";
        }
        else{
            list[i].style.backgroundImage = 'url("./images/right.png")';
        }
    }
    
    console.log(list_ID);
    var wrapper_left_pos= list_ID*500;
    console.log(wrapper_left_pos);
    wrapper.style.left = `${-wrapper_left_pos}px`;
    console.log(wrapper.style.left);
}


//Adding onclick event to left and right slider buttton
left_btn.setAttribute("onClick","slideLeft()");
right_btn.setAttribute("onClick","slideRight()");

//Adding controllers for each images
list = document.createElement('ul');
list_item=[];
for (var i=0;i<images.length;i++){
    list_item[i]=document.createElement('li');
    list_item[i].style.backgroundImage = 'url("./images/right.png")';
    list_item[i].style.backgroundRepeat = 'norepeat';
    list_item[i].style.height = '15px';
    list_item[i].style.width = '15px';
    list_item[i].style.float ='left';
    list_item[i].style.display = 'block';
    list_item[i].style.cursor = 'pointer';
    list_item[i].style.position='relative';
    list_item[i].style.marginRight='5px';
    list_item[i].style.borderRadius = '50%';
    //list_item[i].style.top = '150px';
    list_item[i].setAttribute("onclick","getCurrentSlide()");
    list_item[i].setAttribute('id',i);
    list.appendChild(list_item[i]);
}
container.appendChild(list);

Object.assign(list.style,{
    listStyle:'none',
    height:'50px',
    width:'500px',
    marginLeft:'180px'
});

// var main_body = document.getElementsByTagName('body')[0];
// console.log(main_body);
// main_body.setAttribute("onload","automaticSlide()");

