<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Question 04</title>
</head>
<body>
    <div>
        <h1>AREA FOR RECTANGLE</h1>
        <input type="number" name="" id="1" placeholder="Length">
        <input type="number" name="" id="2" placeholder="Width">
        <p id="rect"></p>
        <br>
        <h1>AREA OF SQUARE</h1>
        <input type="number" name="" id="3" placeholder="SIdes Of Square">
        <p id="sq"></p>
        <br>
        <h1>AREA OF TRIANGLE</h1>
        <input type="number" name="" id="4" placeholder="Base">
        <input type="number" name="" id="5" placeholder="Height">
        <p id="tri"></p>
        <br>
        <h1>AREA OF CIRCLE</h1>
        <input type="number" name="" id="6" placeholder="Radius">
        <p id="cir"></p>
        <br>
        <h1>AREA OF TRAPEZOID</h1>
        <input type="number" name="" id="7" placeholder="Base 1">
        <input type="number" name="" id="8" placeholder="Base 2">
        <input type="number" name="" id="9" placeholder="Vertical Height">
        <p id="trap"></p>
        <br>
        <h1>AREA OF ELLIPSE</h1>
        <input type="number" name="" id="10" placeholder="Radius Of Major Axis">
        <input type="number" name="" id="11" placeholder="Radius Of Minor Axis">
        <p id="ell"></p>
        <br>
        <button type="submit" onclick="myfunc()">RESULT</button>
    </div>

    <script>
        function myfunc() {
         var length = document.getElementById("1").value;
         var width = document.getElementById("2").value;
         var rect = eval(parseFloat(length) * parseFloat(width));
         document.getElementById("rect").innerHTML = rect;

         var sides = document.getElementById("3").value;
         var sq = eval(parseFloat(sides) * parseFloat(sides));
         document.getElementById("sq").innerHTML = sq;

         var base = document.getElementById("4").value;
         var height = document.getElementById("5").value;
         var tri = eval(parseFloat(0.5) * parseFloat(base) * parseFloat(height));
         document.getElementById("tri").innerHTML = tri;

         var radius = document.getElementById("6").value;
         var cir = eval(parseFloat(3.142) * parseFloat(radius));
         document.getElementById("cir").innerHTML = cir;

         var base1 = document.getElementById("7").value;
         var base2 = document.getElementById("8").value;
         var verheight = document.getElementById("9").value;
         var trap = eval(parseFloat(0.5) * parseFloat(base1 + base2) * parseFloat(verheight));
         document.getElementById("trap").innerHTML = trap;

         var major = document.getElementById("10").value;
         var minor = document.getElementById("11").value;
         var ell = eval(parseFloat(3.142) * parseFloat(major) * parseFloat(minor));
         document.getElementById("ell").innerHTML = ell;
        }
    </script>
</body>
</html>
