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

          ctx.beginPath();
        ctx.rect(350,430,0,51);
        ctx.stroke();
        ctx.fillStyle="#beefff";
        ctx.closePath();
        ctx.fill();
                      

       //Ligne des triangles horizontal
        ctx.beginPath();
        ctx.rect(335,445,31,0);
        ctx.stroke();
        ctx.fillStyle="#beefff";
        ctx.closePath();
        ctx.fill();
                                      
        ctx.beginPath();
        ctx.moveTo(500,380);
        ctx.stroke();
        ctx.fillStyle="#beefff";
        ctx.closePath();
        ctx.fill();
                                   
     //les carrees de la maison 
        ctx.beginPath();
        ctx.rect(320,560,70,100);
        ctx.stroke();
        ctx.fillStyle="#beefff";
        ctx.closePath();
        ctx.fill();
                      
        ctx.beginPath();
        ctx.rect(430,560,50,100);
        ctx.stroke();
        ctx.fillStyle="#beefff";
        ctx.closePath();
        ctx.fill();
                      
      