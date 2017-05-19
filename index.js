// code solution here
function President(name, politicalParty, yearsInOffice, homeState){
  this.name = name
  this.politicalParty = politicalParty
  this.yearsInOffice = yearsInOffice
  this.homeState = homeState

  this.veto = function(){ return "NO!"}
  this.passBill = function(){ return "You can do that!"}
  this.doCharity = function(){ return "I like to help people."}
  this.conductPressInterview = function(){ return "I am proud to be an American."}
  this.sayHi = function(){ return `Hi, my name is ${this.name}. I am from ${this.homeState}. I represent the ${politicalParty}s, and was in office ${yearsInOffice}.`}
}



// veto — returns NO!
//
// passBill — returns You can do that!
//
// doCharity — returns I like to help people.
//
// conductPressInterview — returns I am proud to be an American.
//
// sayHi — returns Hi, my name is <name>. I am from <homestate>. I represent the <politcalParty>s, and was in office <yearsInOffice>.
