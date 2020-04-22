class Form {
  constructor() 
  {
    this.input = createInput("Name");
    this.input1 = createInput("YES/NO");
    this.input2 = createInput("Email ID");
    this.button = createButton('Submit Survey');
    this.greeting = createElement('h3');
    this.greeting1 = createElement('h3');
    this.greeting2 = createElement('h3');
  }

  display(){
    var title = createElement('h2');
    title.html("Survey Center");
    title.position(130, 0);
    
    
    
    this.input.position(130, 160);
    this.input1.position(130,220);
    this.input2.position(130,190)
    this.button.position(250, 270);

    this.button.mousePressed(()=>{
    this.input.hide();
    this.input1.hide();
    this.input2.hide();
    this.button.hide();

      citizen.name = this.input.value();
      vote1 = this.input1.value();
      email = this.input2.value();
      citizenCount+=1;
      citizen.index = citizenCount;
      citizen.update();
      citizen.updateCount(citizenCount);
      this.greeting.html("Hello " + citizen.name);
      this.greeting.position(20, 160);
      this.greeting2.html("Your Email ID:- " + email);
      this.greeting2.position(20,190);
      this.greeting1.html("Your Vote is " + vote1);
      this.greeting1.position(20,220);
    });

  }
  hide()
  {
    this.button.hide();
    this.input.hide();
    this.input1.hide();
    this.input2.hide();
    this.greeting.hide();
  }
}
