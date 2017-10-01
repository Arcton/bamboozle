var origImage = [], shattered = [], YLOC = 75;

var originImage = new Image();
originImage.src = "origin.jpg";

var images = [["iphonex","a.png"],["odyssey","b.png"],["solgaleo","c.png"],["bladerunner2049","d.jpg"],["trump","e.png"],["chiron","f.png"]];
var stuff = [explode,boom,scramble,explode2,aaaaaa,aaaaa];
var pieces = [400,500,600,700,700,700];
var sizes = [400,500,400,300,300,300];

function scramble(mx,ox,px,my,oy,py){
    var xstuff = Math.abs(mx-ox);
    var ystuff = Math.abs(my-oy);

    var combinedstuff = Math.sqrt(xstuff*xstuff+ystuff*ystuff);
    combinedstuff= combinedstuff*Math.log(combinedstuff/200+1);

    return [-combinedstuff+2*Math.random()*combinedstuff,  -combinedstuff+2*Math.random()*combinedstuff];
}

function explode(mx,ox,px,my,oy,py){
    var xstuff = (mx-ox);
    var ystuff = (my-oy);
    var expx = px-origImage[currentImg].width/2;
    var expy = py-origImage[currentImg].height/2;
    var xdiff = Math.min(px,origImage[currentImg].width-px);
    var ydiff = Math.min(py,origImage[currentImg].height-py);
    var combinedstuff = Math.sqrt(xstuff*xstuff+ystuff*ystuff);
    var cstuff = Math.sqrt(xdiff*xdiff+ydiff*ydiff);
    var x = 0,y=0;
    if(cstuff < combinedstuff){
        x = expx*((combinedstuff-cstuff)/cstuff);
        y = expy*((combinedstuff-cstuff)/cstuff);
    }
    //console.log(cstuff+" "+combinedstuff);
    return [x, y];
}


function aaaaa(mx,ox,px,my,oy,py){
    var xstuff = (mx-ox);
    var ystuff = (my-oy);
    var expx = px-origImage[currentImg].width/2;
    var expy = py-origImage[currentImg].height/2;
    var mag =  Math.sqrt(expx*expx+expy*expy);
    var xvec = expx / (mag);
    var yvec = expy / (mag);
    var xdiff = Math.min(px,origImage[currentImg].width-px);
    var ydiff = Math.min(py,origImage[currentImg].height-py);
    var combinedstuff = Math.sqrt(xstuff*xstuff+ystuff*ystuff);
    var cstuff = Math.sqrt(xdiff*xdiff+ydiff*ydiff);
    var ang = combinedstuff*cstuff*Math.PI/5000;
    var x = 0,y=0;

    x = xvec*combinedstuff;
    y = yvec*combinedstuff;

    //console.log(cstuff+" "+combinedstuff);
    return [x*Math.cos(ang)-y*Math.sin(ang), x*Math.sin(ang)+y*Math.cos(ang)];
}

function boom(mx,ox,px,my,oy,py){
    var xstuff = (mx-ox);
    var ystuff = (my-oy);
    var expx = px-origImage[currentImg].width/2;
    var expy = py-origImage[currentImg].height/2;
    var mag =  Math.sqrt(expx*expx+expy*expy);
    var xvec = expx / (mag);
    var yvec = expy / (mag);
    var xdiff = Math.min(px,origImage[currentImg].width-px);
    var ydiff = Math.min(py,origImage[currentImg].height-py);
    var combinedstuff = Math.sqrt(xstuff*xstuff+ystuff*ystuff);
    var cstuff = Math.sqrt(xdiff*xdiff+ydiff*ydiff);
    var ang = combinedstuff*cstuff*Math.PI/5000;
    var x = 0,y=0;

    x = xvec*combinedstuff;
    y = yvec*combinedstuff;

    //console.log(cstuff+" "+combinedstuff);
    return [x, y];
}

function aaaaaa(mx,ox,px,my,oy,py){
    var xstuff = (mx-ox);
    var ystuff = (my-oy);
    var expx = px-origImage[currentImg].width/2;
    var expy = py-origImage[currentImg].height/2;
    var mag =  Math.sqrt(expx*expx+expy*expy);
    var xvec = expx / (mag);
    var yvec = expy / (mag);
    var xdiff = Math.min(px,origImage[currentImg].width-px);
    var ydiff = Math.min(py,origImage[currentImg].height-py);
    var combinedstuff = Math.sqrt(xstuff*xstuff+ystuff*ystuff);
    var cstuff = Math.sqrt(xdiff*xdiff+ydiff*ydiff);
    var ang = combinedstuff*Math.PI/50;
    var x = 0,y=0;

    x = xvec*combinedstuff;
    y = yvec*combinedstuff;

    //console.log(cstuff+" "+combinedstuff);
    return [x*Math.cos(ang)-y*Math.sin(ang), x*Math.sin(ang)+y*Math.cos(ang)];
}

function something(mx,ox,px,my,oy,py){
    var xstuff = (mx-ox);
    var ystuff = (my-oy);
    var expx = px-origImage[currentImg].width/2;
    var expy = py-origImage[currentImg].height/2;
    var xdiff = Math.min(px,origImage[currentImg].width-px);
    var ydiff = Math.min(py,origImage[currentImg].height-py);
    var combinedstuff = Math.sqrt(xstuff*xstuff+ystuff*ystuff);
    var cstuff = Math.sqrt(xdiff*xdiff+ydiff*ydiff);
    var x = 0,y=0;
    x = expx * (Math.sin(xstuff*ystuff/1000) * Math.log(combinedstuff/10+1));
    y = expy * (Math.sin(xstuff*ystuff/1000)* Math.log(combinedstuff/10+1));
    //console.log( Math.log(combinedstuff/10+1)+" "+Math.sin(xstuff*ystuff/10000));
    return [-x+2*x*Math.random(), -y+2*y*Math.random()];
}

function explode1(mx,ox,px,my,oy,py){
    var xstuff = (mx-ox);
    var ystuff = (my-oy);
    var expx = px-origImage[currentImg].width/2;
    var expy = py-origImage[currentImg].height/2;
    var combinedstuff = Math.sqrt(xstuff*xstuff+ystuff*ystuff);
    var x = 0,y=0;
    if(1 < combinedstuff){
        x = expx*Math.pow(Math.abs(expx),0.8)*combinedstuff/1000;
        y = expy*Math.pow(Math.abs(expy),0.8)*combinedstuff/1000;
    }
    //console.log(cstuff+" "+combinedstuff);
    return [x, y];
}

function explode2(mx,ox,px,my,oy,py){
    var xstuff = (mx-ox);
    var ystuff = (my-oy);
    var expx = px - origImage[currentImg].width/2;
    var expy = py - origImage[currentImg].height/2;
    var m2ox = expx - xstuff;
    var m2oy = expy - ystuff;
    var combinedstuff = Math.sqrt(xstuff*xstuff+ystuff*ystuff);

    var x = 0,y=0;
    if( combinedstuff > 1){
        x =  (m2ox*Math.pow(Math.abs(m2ox),0.8)*Math.abs(combinedstuff)/1500);
        y =  (m2oy*Math.pow(Math.abs(m2oy),0.8)*Math.abs(combinedstuff)/1500) ;
    }
    //console.log(mx,ox,px,my,oy,py,origImage[currentImg].width,origImage[currentImg].height)
    // console.log(x,y,m2ox,m2oy,xstuff,ystuff,expx,expy);
    //console.log(cstuff+" "+combinedstuff);
    return [x, y];
}

var currentImg = 0;

function resize(imageNum,newHeight){
    if (origImage[imageNum]!=null&&origImage[imageNum].height == newHeight){
        return;
    };
    var temp = new Image();
    temp.onload = function(){
        if(this.isFirstTime==null){
            var theight = this .height;
            resizeI(this,newHeight);
            console.log("resizing from " +theight+" to " +this.height);
            this.isFirstTime = 1;
        }
    };
    console.log(imageNum);
    temp.src = 'images/' + images[imageNum][1];
    temp.crossOrigin="anonymous";
    origImage[imageNum] = temp;
}

function resizeI(image,newHeight){
    var tempcan = document.createElement('canvas');

    var ctx = tempcan.getContext("2d");

    newWidth = Math.floor(image.width / image.height * newHeight);
    tempcan.width = newWidth;
    tempcan.height = newHeight;

    ctx.drawImage(image, 0, 0, newWidth, newHeight);

    image.src = tempcan.toDataURL();
    image.width = newWidth;
    image.height = newHeight;
}
var mainContainer = $('.pageContent');
var originX,originY;
$(document).ready(function(){
    $('.pageContent').mousemove(function(event){
        placeShatterFunc(shattered[0], div[0],event);
        var p = mainContainer.offset();
    });
    for (i = 0; i < images.length; i++) {
        var temp = new Image();
        temp.daheight = i;
        temp.onload = function(){
            if(this.isFirstTime==null){
                var theight = this .height;
                resizeI(this,sizes[this.daheight]);
                console.log("resizing from " +theight+" to " +this.height);
                this.isFirstTime = 1;
            }else{

                setTimeout(function() {
                    if(shattered.length ==0){
                        var shatter = createShatter();
                        placeShatterRandom(shatter, div[0]);
                    }
                }, 500);
            }
        };
        temp.src = 'images/' + images[i][1];
        temp.crossOrigin="anonymous";
        origImage.push(temp);
    };

    YLOC = $('.pageContent').offset().top;

    setOrigin();

    //console.log(YLOC);
});

$('.pageContent').mousedown(function(event){
    originImage.style.display = "";
});
$('.pageContent').mouseup(function(event){
    originImage.style.display = "none";
});


function setOrigin(){
    var p = mainContainer.offset();
    originX = Math.random()*(mainContainer.width()-200)+p.left+100;
    originY = Math.random()*(mainContainer.height()-200)+p.top+100;
    originImage.remove();
    originImage.style.position = 'absolute';
    originImage.style.left = originX + 'px';
    originImage.style.top = originY + 'px';
    document.querySelector('.pageContent').appendChild(originImage);
    originImage.style.display = "none";
    console.log("Origin is " +originX+"x "+originY+"y");
};

// jGravity seems to disable input even though ignored
// a simulated click seems to fix it
$('#numPieces').click();

$('.answer').on('click', function() {
    var answer = $('#whatIsIt').val();

    answer = answer.replace(/\W+/g,"").toLowerCase();

    if(answer.indexOf(images[currentImg][0])!==-1){
        currentImg+=1;
        console.log("Woop");
        document.getElementById('whatIsIt').value= "";
        shattered.forEach(function(shatter) {
            if (shatter.src) {
                shatter.remove();
            } else {
                shatter.images.forEach(function(image) {
                    // box2d remove method
                    image.image.remove();
                });
            }
        });
        shattered = [];
        setOrigin();
        placeShatterRandom(createShatter(), div[0]);
    }
});

function createShatter(){
    var shatter = new Shatter(origImage[currentImg], pieces[currentImg], 1, false);
    shatter.setFunc(stuff[currentImg]);
    shattered.push(shatter);

    return shatter;
}

var div = document.querySelectorAll('.shatter');

function placeShatterFunc (shatter, domElement,event) {
    if (shatter == null)return;

    // adjustment to center image on screen
    var adjustment = (window.innerWidth / 2) - origImage[currentImg].width / 2;

    for (var i = 0; i < shatter.images.length; i++) {
        offsets = shatter.images[i].func(event.pageX,originX,shatter.images[i].x+shatter.images[i].image.width/2,event.pageY,originY,shatter.images[i].y+shatter.images[i].image.height/2);
        var xoff = offsets[0];
        var yoff = offsets[1];

        //console.log(xoff +" "+ yoff);
        placeImageAbsolute(shatter.images[i].image,
                           domElement,
                           shatter.images[i].x,
                           shatter.images[i].y,
                           adjustment+xoff,
                           YLOC+yoff);
    }
}

function placeShatterMouse2 (shatter, domElement,event) {
    if (shatter == null)return;

    // adjustment to center image on screen
    var adjustment = (window.innerWidth / 2) - origImage[currentImg].width / 2;
    var xstuff = Math.abs(event.pageX-originX);
    var ystuff = Math.abs(event.pageY-originY);

    var combinedstuff = Math.sqrt(xstuff*xstuff+ystuff*ystuff);
    combinedstuff= combinedstuff*Math.log(combinedstuff/200+1);

    for (var i = 0; i < shatter.images.length; i++) {
        var xoff = -combinedstuff+2*Math.random()*combinedstuff;
        var yoff = -combinedstuff+2*Math.random()*combinedstuff;

        placeImageAbsolute(shatter.images[i].image,
                           domElement,
                           shatter.images[i].x,
                           shatter.images[i].y,
                           adjustment+xoff,
                           YLOC+yoff);
    }
}


// Make new shatter object
$('.explode').on('click', function() {

    setOrigin();

    var shatter = createShatter();

    placeShatterRandom(shatter, div[0]);

});

function reSize() {
    var sizeofimg = $('#sizeOfImg').val();
    resize(currentImg,sizeofimg || 200);
    console.log("resizing to "+sizeofimg);
};

// clear out all shattered images
$('.remove-all').on('click', function() {
    shattered.forEach(function(shatter) {
        if (shatter.src) {
            shatter.remove();
        } else {
            shatter.images.forEach(function(image) {
                // box2d remove method
                image.image.remove();
            });
        }
    });
    shattered = [];
});

function placeShatterRandom (shatter, domElement) {
    // adjustment to center image on screen
    var adjustment = (window.innerWidth / 2) - origImage[currentImg].width / 2;
    for (var i = 0; i < shatter.images.length; i++) {
        var xoff = -250+Math.random()*500;
        var yoff = -250+Math.random()*500;

        placeImageAbsolute(shatter.images[i].image,
                           domElement,
                           shatter.images[i].x,
                           shatter.images[i].y,
                           adjustment+xoff,
                           YLOC+yoff);
    }
}


/**
 * Places given shatter objects images into the specified dom element
 *
 * @param {object} shatter - Shatter object
 * @param {object} domElement - The dom element to append images to
 */
function placeShatter (shatter, domElement) {
    // adjustment to center image on screen
    var adjustment = (window.innerWidth / 2) - origImage[currentImg].width / 2;
    for (var i = 0; i < shatter.images.length; i++) {
        placeImageAbsolute(shatter.images[i].image,
                           domElement,
                           shatter.images[i].x,
                           shatter.images[i].y,
                           adjustment,
                           YLOC);
    }
}

/**
 * Places an image into dom element and absolutely positions
 *
 * @param {object} image - image to append to dom
 * @param {object} domElement - dom element to append image
 * @param {number} x - x coordinate to position image at
 * @param {number} y - y coordinate to position image at
 * @param {number} xOff - x offset added to x coordinate
 * @param {number} yOff - y offset added to x coordinate
 */
function placeImageAbsolute (image, domElement, x, y, xOff, yOff) {
    xOff = xOff || 0;
    yOff = yOff || 0;
    image.style.position = 'absolute';
    image.style.left = x + xOff + 'px';
    image.style.top = y + yOff + 'px';
    domElement.appendChild(image);
}
