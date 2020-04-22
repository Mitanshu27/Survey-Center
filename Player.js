class Citizen {
  constructor(){
    this.index = null;
    this.name = null;
  }

  getCount(){
    var citizenCountRef = database.ref('citizenCount');
    citizenCountRef.on("value",(data) => {
      citizenCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      citizenCount: count
    });
  }

  update(){
    var citizenIndex = "citizens/citizen" + this.index;
    database.ref(citizenIndex).set({
      name:this.name,
      vote:vote1,
      email:email
    });
  }
  static getPlayerinfo()
  {
    var citizeninforef = database.ref('citizens');
    citizeninforef.on("value",(data) => 
    {
      allplayers = data.val();
    })
  }
}
