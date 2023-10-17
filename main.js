    //Create "mouseEvent" variable and set it as “Empty”.
    var mouseEvent = "";
    //Create two variables "last_position_of_x" and  "last_position_of_y".
   var last_position_of_x, last_position_of_y;
    //Define two variables color and width_of_line and assign values.
    var width_of_line = 2;
    var color = "black";
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    canvas.addEventListener("mousedown", my_mousedown);

    function my_mousedown(e)
    {
        //Addictonal Activity start
        
        //Addictonal Activity ends

        mouseEvent = "mousedown";
    }

    //Create the addEventListener() function for mouseup(). 
    canvas.addEventListener("mouseup", my_mouseup);
    function my_mouseup(e)
    {
        mouseEvent = "mouseUP";
    }

    

    //Create the addEventListener() function for mouseleave(). 
    canvas.addEventListener("mouseleave", my_mouseleave);
    function my_mouseleave(e)
    {
        mouseEvent = "mouseleave";
    }




    //Create the my_mouseup() function. Assign “mouseUP” in the variable mouseEvent.
    canvas.addEventListener("mousemove", my_mousemove);
    
    function my_mousemove(e)
    {
        current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
        current_position_of_mouse_y = e.clientY - canvas.offsetTop;

        //Check whether the mouseEvent is "mousedown".  
        if (mouseEvent == "mousedown") {
            ctx.beginPath();
            ctx.strokeStyle = color;
            ctx.lineWidth = width_of_line;
          
            console.log("Last position of x and y coordinates = ");
            console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
            ctx.moveTo(last_position_of_x, last_position_of_y);

            console.log("Current postion of x and y coordinates = ");
            console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
            ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
            ctx.stroke();
          }
          last_position_of_x = current_position_of_mouse_x;
          last_position_of_y = current_position_of_mouse_y;
        }
