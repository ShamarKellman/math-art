var drawBoat = function(p) {
    var t;
    p.setup = function() {
        var canvas = p.createCanvas(1024, 680);
        canvas.parent('canvasContainer');
        canvas.id('canvas');
        t = 1;
    };

    p.draw = function() {
        if(t <= 3000) {
            p.translate(p.width/2, p.height/2);
            p.stroke(p.random(255), p.random(255), p.random(255));
            p.line(x1(t), y1(t), x2(t), y2(t));
            t++;
        }
        else {
            p.noLoop();
        }
    };

    function x1(t) {
        return Math.sin(((6 * Math.PI * t) / 2000) + (Math.PI / 4)) + t;
    }

    function y1(t) {
        return Math.sin((12 * Math.PI * t) / 2000) * Math.exp((Math.PI * t) / 4);
    }

    function x2(t) {
      return Math.sin(((4 * Math.PI * t) / 2000) + (Math.PI / 6)) + t;
    }

    function y2(t) {
      return (Math.sin((2 * Math.PI * t) / 2000) + (Math.PI / 3)) * Math.exp((Math.PI * t) / 4);
    }
};