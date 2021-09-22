var c = document.getElementById("mon_canavas");
     var ctx = c.getContext("2d");





       
         

        
         ctx.beginPath();
         ctx.moveTo(350,400);
         ctx.lineTo(500,500);
         ctx.lineTo(500,700);
         ctx.lineTo(200,700);
         ctx.lineTo(200,500);
         ctx.lineTo(350,400);
         ctx.lineWidth=2;
         ctx.stroke();
         ctx.fillStyle="#ffd66b";
         ctx.closePath();
         ctx.strokeStyle="bleu";
         ctx.fill();
      