function drawDivCircle(element, x, y, color) {
    circle = $("<div class='circleBase type1'></div>");
    circle.css({top: y, left: x, display: "none", background: color});
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

        var colors = ["#68AFC5", "#D0DFEF", "#EFEA86", "#F7CEE8"];


        width = $("#canvas").width();
        height = $("#canvas").height();

        scale_f = width/630;
        lights = 8;
        ctx = $("#canvas")[0].getContext('2d');

        var light_count = 0;

        function drawBulbs(element, x, y) {
            if(x>630) return;
            console.log("Draw lihgt: " + light_count + " with color (" + light_count %4  + "): " + colors[light_count % 4]);
            circle = drawDivCircle($("#canvas").parent(), x, getYsin(x)+10, colors[light_count % 4]);
            light_count++;
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



function documentReady() {
    console.log("script loaded");

    function fadeScreen() {
        console.log("Fade the screen");
        $("html").fadeOut(1600, function() {
            $(location).attr('href','/zodiac/light');
        });
    }

    drawString();

    //if l == 0 them moveTo else lineTo
    pisces = [{x:68, y: 71, l:0}, {x:70, y: 49, l:1}, {x: 61, y: 58, l:1}, {x: 68,y: 71, l:1}, {x: 50, y: 108,l:1}, {x:33, y:135,l:1}, {x: 18, y: 161, l:1},
        {x: 42, y: 149, l:1}, {x: 68, y: 138,l:1}, {x: 94, y: 142, l:1}, {x: 140, y: 140, l:1}, {x:162, y: 144, l:1}, {x:178, y: 138, l:1},
        {x:186, y: 140, l:1}, {x:189, y:150, l:1}, {x:179, y:158,l:1}, {x:165, y: 160,l:1}, {x:162, y: 144,l:1}];

    aquarius = [{x:22,y:143,l:0}, {x:46,y:116,l:1}, {x:52,y:108,l:1}, {x:52,y:81,l:1}, {x:36,y:69,l:1}, {x:90,y:57,l:1},
        {x:98,y:58,l:1}, {x:104,y:67,l:1}, {x:123,y:66,l:1}, {x:146,y:98,l:1}, {x:191,y:126,l:1}, {x:123,y:66,l:0},
        {x:108,y:100,l:1}, {x:107,y:129,l:1}];

    capricorn =[{x:172,y:81,l:0}, {x:144,y:162,l:1}, {x:85,y:150,l:1}, {x:38,y:122,l:1}, {x:80,y:116,l:1}, {x:108,y:110,l:1},
        {x:172,y:81,l:1}, {x:174,y:66,l:1}];

    sigittarius = [{x:35, y:189, l:0}, {x:19, y:151, l:1}, {x:86, y:100, l:1}, {x:104, y:88, l:1}, {x:120, y:96, l:1},
        {x:96, y:116, l:1}, {x:68, y:178, l:1}, {x:19, y:151, l:1}, {x:68, y:178, l:0}, {x:74, y:202, l:1}, {x:64, y:25, l:0},
        {x:59, y:40, l:1}, {x:82, y:60, l:1}, {x:105, y:88, l:1}, {x:100, y:58, l:1}, {x:82, y:60, l:1}, {x:120, y:96, l:0},
        {x:148, y:111, l:1}, {x:170, y:120, l:1}, {x:163, y:58, l:1}, {x:144, y:88,l:1}, {x:148, y:111, l:1}, {x:141, y:138, l:1},
        {x:152, y:156, l:1}, {x:170, y:120, l:1}];

    aries = [{x:19, y:47, l:0}, {x:150, y:119, l:1}, {x:188, y:160, l:1}, {x:190, y:183, l:1}];

    taurus = [{x:144, y:180, l:0}, {x:126, y:163, l:1}, {x:146, y:144, l:1}, {x:186, y:138, l:1}, {x:190, y:156, l:1},
        {x:146, y:144, l:0}, {x:118, y:127, l:1}, {x:116, y:114, l:1}, {x:110, y:111, l:1}, {x:106, y:105, l:1},
        {x:90, y:85, l:1}, {x:36, y:50, l:1}, {x:118, y:127, l:0}, {x:110, y:125, l:1}, {x:96, y:122, l:1}, {x:18, y:91, l:1}];

    virgo = [{x:24, y:165, l:0}, {x:56, y:154, l:1}, {x:68, y:174, l:1}, {x:122, y:156, l:1}, {x:128, y:124, l:1},
        {x:151, y:96, l:1}, {x:128, y:80, l:1}, {x:93, y:116, l:1}, {x:122, y:156, l:1}, {x:151, y:96, l:0},
        {x:172, y:83, l:1}, {x:199, y:58, l:1}, {x:196, y:37, l:1}, {x:169, y:36, l:1}, {x:128, y:80, l:0},
        {x:108, y:52, l:1}, {x:93, y:116, l:0}, {x:61, y:116, l:1}, {x:9, y:134, l:1}];

    gemini = [{x:187, y:137, l:0}, {x:169, y:136, l:1}, {x:131, y:107, l:1}, {x:48, y:34, l:1}, {x:21, y:62, l:1},
        {x:89, y:138, l:1}, {x:134, y:184, l:1}, {x:156, y:154, l:1}, {x:169, y:136, l:1}];

    scorpius = [{x:98, y:192, l:0}, {x:66, y:193, l:1}, {x:38, y:187, l:1}, {x:23, y:171, l:1}, {x:26, y:161, l:1},
        {x:36, y:142, l:1}, {x:46, y:144, l:1}, {x:82, y: 148, l:1}, {x:86, y:131, l:1}, {x:112, y:90, l:1},
        {x:123, y:76, l:1}, {x:155, y:43, l:1}, {x:162, y:36, l:1}, {x:172, y:61, l:0}, {x:136, y:73, l:1},
        {x:123, y:76, l:1}, {x:171, y:89, l:1}];

    libra = [{x:42, y:106, l:0}, {x:64, y:120, l:1}, {x:88, y:90, l:1}, {x:102, y:29, l:1}, {x:174, y:57, l:1},
        {x:184, y:142, l:1}, {x:102, y:29, l:1}, {x:184, y:142, l:0}, {x:143, y:186, l:1}, {x:134, y:192, l:1}, {x:142, y:205, l:1}];

    leo = [{x:201, y:76, l:0}, {x:189, y:61, l:1}, {x:155, y:78, l:1}, {x:148, y:102, l:1}, {x:68, y:98, l:1},
        {x:10, y:136, l:1}, {x:66, y:130, l:1}, {x:166, y:154, l:1}, {x:148, y:102, l:1}];

    cancer = [{x:48, y:146, l:0}, {x:96, y:118, l:1}, {x:113, y:99, l:1}, {x:140, y:48, l:1}, {x:105, y:207, l:0},
        {x:96, y:118, l:1}];

    function drawConstellation(context, vertex) {
        $(context).show();

        var canvas = context.getContext("2d");
        canvas.clearRect(0, 0, context.width, context.height);

        for (var i = 0; i < vertex.length; i++) {
            //console.log(vertex[i]);
            if(vertex[i].l == 0) canvas.moveTo(vertex[i].x, vertex[i].y);
                else canvas.lineTo(vertex[i].x, vertex[i].y);
        }
        canvas.strokeStyle = "#cefcf6";
        canvas.lineWidth = 2;
        canvas.setLineDash([15, 5]);
        canvas.stroke();

        $(context).fadeOut(4600);
    }

    function animate_sign(sign) {
        sign.show().animate({
            opacity: 1
        }, 100, function() {
        $(this).animate({
            opacity: 0
        }, 800, function() {
            $(this).hide();
            //console.log("sign.attr.class: " + sign.attr('class'));
            if(sign.attr('class') == 'gemini-sign sign') fadeScreen();
        })
    });
    }

    $(".constellation").click(function() {
        //console.log("click on: " + $(this).children().next().attr("id"));
        var c = document.getElementById($(this).children().next().attr("id"));
        var ctx = c.getContext("2d");

        var vertex = null;

        switch($(this).children().next().attr("id")) {
            case "canvas1": vertex = pisces; {
                animate_sign($(".pisces-sign"));
            }; break;
            case "canvas2": vertex = aquarius; animate_sign($('.aquarius-sign')); break;
            case "canvas3": vertex = capricorn; animate_sign($('.capricorn-sign')); break;
            case "canvas4": vertex = sigittarius; animate_sign($('.sagittarius-sign')); break;
            case "canvas5": vertex = aries; animate_sign($('.aries-sign')); break;
            case "canvas6": vertex = taurus; animate_sign($('.taurus-sign')); break;
            case "canvas7": vertex = virgo; animate_sign($('.virgo-sign')); break;
            case "canvas8": vertex = gemini; animate_sign($('.gemini-sign')); break;
            case "canvas9": vertex = scorpius; animate_sign($('.scorpio-sign')); break;
            case "canvas10": vertex = libra; animate_sign($('.libra-sign')); break;
            case "canvas11": vertex = leo; animate_sign($('.leo-sign')); break;
            case "canvas12": vertex = cancer; animate_sign($('.cancer-sign')); break;
        }

        if(vertex) drawConstellation(c,vertex);

    });

    //scroll to bottom
    $("html, body").animate({ scrollTop: $(document).height() }, 4400);

}

$.fn.preload = function() {
    this.each(function() {
       $('<img/>')[0].src = this;
    });
}



$(document).ready(documentReady);
$(document).on('page:load', documentReady);