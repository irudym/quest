
function documentReady() {
    console.log("Light loaded");

    drawString();
}

function drawDivCircle(element, x, y, color) {
    circle = $("<div class='circleBase type1'></div>");
    circle.css({top: y, left: x, display: "none"});
    element.append(circle);
    return circle;
}

function getYsin(x) {
    return height/2-Math.sin(x/(width/12))*(height/10)
}



function drawString() {
    //check if canvas exists
    if($("#canvas").length ) {
        console.log("String of lights");
        //draw string of lights

        width = $("#canvas").width();
        height = $("#canvas").height();

        scale_f = width/630;
        lights = 8;
        ctx = $("#canvas")[0].getContext('2d');


        function drawBulbs(element, x, y) {
            if(x>630) return;
            circle = drawDivCircle($("#canvas").parent(), x, getYsin(x)+10, "#AA3030");
            circle.fadeIn(800, function() {
                new_x = x+(630/lights) *scale_f;
                drawBulbs(element,new_x, getYsin(new_x));
            });
        }

        //draw sin line
        ctx.moveTo(0,height/2);
        for(i = 0;i < width;i++) {
            ctx.lineTo(i,getYsin(i));
        }

        ctx.lineWidth = 2;
        ctx.strokeStyle = "#BABABA";
        ctx.stroke();

        //draw light bulbs
        position = 20;
        drawBulbs($("#canvas").parent(), position, getYsin(position));
    }
}


$(document).ready(documentReady);
$(document).on('page:load', documentReady);