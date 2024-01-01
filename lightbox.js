// function to include html popup code

function includePopupHtml(){

    let html = '<div id="popup"><span id="close" onclick="closePopUp()"><img class="mainbtn" src="close.png" id="closebtn" alt=""></span><img id="leftarrow" class="mainbtn" src="left.png" alt=""><img id="rightarrow" src="right.png" class="mainbtn" alt=""><img id="mainPopImage" src="natureFour.jpg" alt=""></div>'

    let newdiv = document.createElement('div');
    newdiv.innerHTML = html;
    document.body.insertBefore(newdiv, document.body.firstChild);
}

let img;
let current;

function PopupInit(target){
    img = document.body.getElementsByClassName(target);
    for(i = 0; i < img.length; i++){
        img[i].style.cursor = 'pointer'
        img[i].addEventListener('click', function(){
            document.getElementById('mainPopImage').src = this.src;
            document.getElementById('popup').style.display = 'block';
            checkArrow();

        })
    }

    includePopupHtml();

//next image

    document.getElementById('rightarrow').addEventListener('click',function(){
        nextimg();
    });

    //prev image

    document.getElementById('leftarrow').addEventListener('click',function(){
        previmg();
    });

}
// close button
function closePopUp(){
    document.getElementById('mainPopImage').src = "";
    document.getElementById('popup').style.display = 'none';
}

// current button
function getCurrentImage(){
    for(i = 0; i < img.length; i++){
         if(img[i].src == document.getElementById('mainPopImage').src){
            current = i;
         }
    }
}

//next image
function nextimg(){
    getCurrentImage();
    current++;
    document.getElementById('mainPopImage').src = img[current].src;
    checkArrow();
}
//prev image
function previmg(){
    getCurrentImage();
    current--;
    document.getElementById('mainPopImage').src = img[current].src;
    checkArrow();
}

function checkArrow(){
    getCurrentImage();
    if(current == 0){
        document.getElementById('leftarrow').style.display = 'none';
        document.getElementById('rightarrow').style.display = 'block';
    }else if(current == img.length - 1){
        document.getElementById('rightarrow').style.display = 'none';
        document.getElementById('leftarrow').style.display = 'block';
    }else{
        document.getElementById('rightarrow').style.display = 'block';
        document.getElementById('leftarrow').style.display = 'block';
    }
}