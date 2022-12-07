(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2
            let area = Math.PI* Math.sqrt(this.radius);
            // console.log(area);


            // console.log(area);
            return area; // TODO: return the proper value
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.
            let roundedNum, areaNum;
            // if(typeof (doRounding)==='number'){
            //     // areaNum = this.getArea(this.radius);
            //     // roundedNum = areaNum.toFixed(2);
            // }
            areaNum = this.getArea(this.radius);


            // return roundedNum;
            roundedNum = areaNum.toFixed(2);

            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

            console.log("Area of a circle with radius: " + this.radius + ", is: "+roundedNum);
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();