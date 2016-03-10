var drawHeart = function(p) {
    var t;
    p.setup = function() {
        var canvas = p.createCanvas(1024, 680);
        canvas.parent('canvasContainer');
        canvas.id('canvas');
        t = 1;
    };

    p.draw = function() {
        if(t <= 601) {
            p.translate(p.width/2, p.height/2);
            p.stroke(p.random(255), p.random(255), p.random(255));
            p.line(x1(t), y1(t), x2(t), y2(t));
            //line(y1(t), x1(t), y2(t), x2(t));
            //line(x2(t), y1(t), x1(t), y2(t)); //nice
            t++;
        }
        else {
            p.noLoop();
        }
    };

    function x1(t) {
        return Math.sin((10 * Math.PI * (t + 699))/2000) * 300;
    }

    function y1(t) {
        return Math.cos((8 * Math.PI * (t + 699))/2000) * 300;
    }

    function x2(t) {
      return Math.sin((12 * Math.PI * (t + 699))/2000) * 300;
    }

    function y2(t) {
      return Math.cos((10 * Math.PI * (t + 699))/2000) * 300;
    }
};