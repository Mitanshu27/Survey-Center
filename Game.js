class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      citizen = new Citizen();
      var citizenCountref = await database.ref('citizenCount').once("value")
      if(citizenCountref.exists())
      {
        citizenCount = citizenCountref.val();
        citizen.getCount();
      }
      form = new Form()
      form.display();
      
    }

  }
}
