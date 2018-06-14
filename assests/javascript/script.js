var luke = 110, obi=120,vader=130,maul=180;
$(document).ready(()=>{
  $("#start").on("click",()=>{
    alert("You will now select characters");
  });
  //select character and hide rest
  //show your enemies
  $(".obi-wan-kenobi-image").on("click",()=>{
    $("#chosen-characters").prepend($('<img>', {class:"obi-wan-kenobi-image", src:"./assests/images/obi-wan-kenobi.jpeg"}));
    $("#health").html(obi);

    $(".darth-vader-image").hide();
    $(".luke-skywalker-image").hide();
    $(".darth-maul-image").hide();
    

    $("#chosen-enemy-1").append($('<img>', {class:"darth-vader-image", src:"./assests/images/darth-vader.jpeg"}));
    $("#health-1").html(vader);
    
    $("#chosen-enemy-2").append($('<img>', {class:"luke-skywalker-image", src:"./assests/images/luke-skywalker.jpeg"}))
    $("#health-2").html(luke);

    $("#chosen-enemy-3").append($('<img>', {class:"darth-maul-image", src:"./assests/images/dart-maul2.jpeg"}))
    $("#health-3").html(maul);

    //obi vs other characters
    //obi vs leftcharacter
    $("#leftCharac").on('click',()=>{
      vader -= 20;
      $("#health-1").html(vader);
      obi -=5;
      $("#health").html(obi);
      if(vader<=0)
      {
        alert("You killed Vader!!!!");
        $(".darth-vader-image").hide();
      }
      if(obi<=0)
      {
        alert("You killed yourself!!!!");
        $(".obi-wan-kenobi-image").hide();
        $('.disableRight').off('click');
        $('.disableLeft').off('click');
        $('.disableMiddle').off('click');
        //refresh function needed
      }
    });
    //obi vs middle 
    $("#middleCharac").on('click',()=>{
      luke -= 20;
      $("#health-2").html(luke);
      obi -=2;
      $("#health").html(obi);
      if(luke<=0)
      {
        alert("You killed Luke!!!!");
        $(".luke-skywalker-image").hide();
      }
      if(obi<=0)
      {
        alert("You killed yourself!!!!");
        $(".obi-wan-kenobi-image").hide();
        $('.disableRight').off('click');
        $('.disableLeft').off('click');
        $('.disableMiddle').off('click');
        //refresh function needed
      }
    });
    //obi vs right
    $("#rightCharac").on('click',()=>
    {
      maul -= 20;
      $("#health-3").html(maul);
      obi -=10;
      $("#health").html(obi);
      if(maul<=0)
      {
        alert("You killed Maul!!!!");
        $("./assests/images/dart-maul2.jpeg").hide();
      }
      if(obi<=0)
      {
        alert("You killed yourself!!!!");
        $(".obi-wan-kenobi-image").hide();
        $('.disableRight').off('click');
        $('.disableLeft').off('click');
        $('.disableMiddle').off('click');
        //refresh function needed
      }
    });
  });
  //select character and hide rest
  //show your enemies
  $(".luke-skywalker-image").on("click",()=>{
    $("#chosen-characters").prepend($('<img>', {class:"luke-skywalker-image", src:"./assests/images/luke-skywalker.jpeg"}));
    $("#health").html(luke);

    $(".darth-vader-image").hide();
    $(".obi-wan-kenobi-image").hide();
    $(".darth-maul-image").hide();

    $("#chosen-enemy-1").append($('<img>', {class:"darth-vader-image", src:"./assests/images/darth-vader.jpeg"}));
    $("#health-1").html(vader);
    
    $("#chosen-enemy-2").append($('<img>', {class:"obi-wan-kenobi-image", src:"./assests/images/obi-wan-kenobi.jpeg"}));
    $("#health-2").html(obi);
    
    $("#chosen-enemy-3").append($('<img>', {class:"darth-maul-image", src:"./assests/images/dart-maul2.jpeg"}));
    $("#health-3").html(maul);

    //Luke vs other characters
    //luke vs leftcharacter
    $("#leftCharac").on('click',()=>{
      vader -= 10;
      $("#health-1").html(vader);
      luke -=5;
      $("#health").html(luke);
      if(vader<=0)
      {
        alert("You killed Vader!!!!");
        $(".darth-vader-image").hide();
        $('.disableLeft').off('click');
      }
      if(luke<=0)
      {
        alert("You killed yourself!!!!");
        $(".luke-skywalker-image").hide();
        $('.disableRight').off('click');
        $('.disableLeft').off('click');
        $('.disableMiddle').off('click');
        //refresh function needed
      }
    });
    //luke vs middle 
    $("#middleCharac").on('click',()=>{
      obi -= 10;
      $("#health-2").html(obi);
      luke -=2;
      $("#health").html(luke);
      if(obi<=0)
      {
        alert("You killed OBI!!!!");
        $(".obi-wan-kenobi-image").hide();
        $('.disableMiddle').off('click');
      }
      if(luke<=0)
      {
        alert("You killed yourself!!!!");
        $(".luke-skywalker-image").hide();
        $('.disableRight').off('click');
        $('.disableLeft').off('click');
        $('.disableMiddle').off('click');
        //refresh function needed
      }
    });
    //luke vs right
    $("#rightCharac").on('click',()=>
    {
      maul -= 10;
      $("#health-3").html(maul);
      luke -=10;
      $("#health").html(luke);
      if(maul<=0)
      {
        alert("You killed Maul!!!!");
        $(".darth-maul-image").hide();
        $('.disableRight').off('click');
      }
      if(luke<=0)
      {
        alert("You killed yourself!!!!");
        $(".luke-skywalker-image").hide();
        $('.disableRight').off('click');
        $('.disableLeft').off('click');
        $('.disableMiddle').off('click');
        //refresh function needed
      }
    });
  });
  //select character and hide rest
  //show your enemies
  $(".darth-vader-image").on("click",()=>{
    $("#chosen-characters").prepend($('<img>', {class:"darth-vader-image", src:"./assests/images/darth-vader.jpeg"}));
    $("#health").html(vader);

    $(".luke-skywalker-image").hide();
    $(".obi-wan-kenobi-image").hide();
    $(".darth-maul-image").hide();

    $("#chosen-enemy-1").append($('<img>', {class:"obi-wan-kenobi-image", src:"./assests/images/obi-wan-kenobi.jpeg"}))
    $("#health-1").html(obi);
    
    $("#chosen-enemy-2").append($('<img>', {class:"luke-skywalker-image", src:"./assests/images/luke-skywalker.jpeg"}));
    $("#health-2").html(luke);
    
    $("#chosen-enemy-3").append($('<img>', {class:"darth-maul-image", src:"./assests/images/dart-maul2.jpeg"}));
    $("#health-3").html(maul);

    //vader vs other characters
    //vader vs leftcharacter
    $("#leftCharac").on('click',()=>{
      obi -= 30;
      $("#health-1").html(obi);
      vader -=5;
      $("#health").html(vader);
      if(obi<=0)
      {
        alert("You killed OBI!!!");
        $(".obi-wan-kenobi-image").hide();
        $('.disableLeft').off('click');
      }
      if(vader<=0)
      {
        alert("You killed yourself!!!!");
        $(".darth-vader-image").hide();
        $('.disableRight').off('click');
        $('.disableLeft').off('click');
        $('.disableMiddle').off('click');
        //refresh function needed
      }
    });
    //vader vs middle 
    $("#middleCharac").on('click',()=>{
      luke -= 30;
      $("#health-2").html(luke);
      vader -=2;
      $("#health").html(vader);
      if(luke<=0)
      {
        alert("You killed LUKE!!!!");
        $(".luke-skywalker-image").hide();
        $('.disableMiddle').off('click');
      }
      if(vader<=0)
      {
        alert("You killed yourself!!!!");
        $(".darth-vader-image").hide();
        $('.disableRight').off('click');
        $('.disableLeft').off('click');
        $('.disableMiddle').off('click');
        //refresh function needed
      }
    });
    //vader vs right
    $("#rightCharac").on('click',()=>
    {
      maul -= 30;
      $("#health-3").html(maul);
      vader -=10;
      $("#health").html(vader);
      if(maul<=0)
      {
        alert("You killed Maul!!!!");
        $(".darth-maul-image").hide();
        $('.disableRight').off('click');
      }
      if(vader<=0)
      {
        alert("You killed yourself!!!!");
        $(".luke-skywalker-image").hide();
        $('.disableRight').off('click');
        $('.disableLeft').off('click');
        $('.disableMiddle').off('click');
        //refresh function needed
      }
    });

  });
  //select character and hide rest
  //show your enemies
  $(".darth-maul-image").on("click",()=>
  {
    $("#chosen-characters").prepend($('<img>', {class:"darth-maul-image", src:"./assests/images/dart-maul2.jpeg"}));
    $("#health").html(maul);

    $(".luke-skywalker-image").hide();
    $(".obi-wan-kenobi-image").hide();
    $(".darth-vader-image").hide();

    $("#chosen-enemy-1").append($('<img>', {class:"darth-vader-image", src:"./assests/images/darth-vader.jpeg"})).addClass('enemy-image');
    $("#health-1").html(vader);
    
    $("#chosen-enemy-2").append($('<img>', {class:"luke-skywalker-image", src:"./assests/images/luke-skywalker.jpeg"})).addClass('enemy-image');
    $("#health-2").html(luke);
    
    $("#chosen-enemy-3").append($('<img>', {class:"obi-wan-kenobi-image", src:"./assests/images/obi-wan-kenobi.jpeg"})).addClass('enemy-image');
    $("#health-3").html(obi);

    //mauil vs other characters
    //maul vs leftcharacter
    $("#leftCharac").on('click',()=>{
      vader -= 40;
      $("#health-1").html(vader);
      maul -=10;
      $("#health").html(maul);
      if(vader<=0)
      {
        alert("You killed VADER!!!");
        $(".darth-vader-image").hide();
        $('.disableLeft').off('click');
      }
      if(maul<=0)
      {
        alert("You killed yourself!!!!");
        $(".darth-maul-image").hide();
        $('.disableRight').off('click');
        $('.disableLeft').off('click');
        $('.disableMiddle').off('click');
        //refresh function needed
      }
    });
    //maul vs middle 
    $("#middleCharac").on('click',()=>{
      luke -= 30;
      $("#health-2").html(luke);
      maul -=2;
      $("#health").html(maul);
      if(luke<=0)
      {
        alert("You killed LUKE!!!!");
        $(".luke-skywalker-image").hide();
        $('.disableMiddle').off('click');
      }
      if(maul<=0)
      {
        alert("You killed yourself!!!!");
        $(".darth-maul-image").hide();
        $('.disableRight').off('click');
        $('.disableLeft').off('click');
        $('.disableMiddle').off('click');
        //refresh function needed
      }
    });
    //maul vs right
    $("#rightCharac").on('click',()=>
    {
      obi -= 40;
      $("#health-3").html(obi);
      maul -=10;
      $("#health").html(maul);
      if(obi<=0)
      {
        alert("You killed Obi!!!!");
        $(".obi-wan-kenobi-image").hide();
        $('.disableRight').off('click');
      }
      if(maul<=0)
      {
        alert("You killed yourself!!!!");
        $(".darth-maul-image").hide();
        $('.disableRight').off('click');
        $('.disableLeft').off('click');
        $('.disableMiddle').off('click');
        //refresh function needed
      }
    });
 
  });
});