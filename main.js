//*FOR LOOP*//
//Every number LESS THAN 10 will be logged in the Console.
//To make #10 be part of the result log (i <= 10;).
for(var i = 0; i < 10; i++){
   console.log(i);
}

var i = 0;
while(i < 10){
  console.log(i);
  i++
}

**************************
== = is
&& = and
|| = or

1 = 1 //Assigning Right-side to Left-side.
1 == 1 //Compairing - 1 is 1, if 1 = 2 then false.
1 === 1 //Same as double-equal, however the two data-types (1 and 1) have to match.

var var1 = 3;
var var2 = 4;
if(var1 == var2){
  console.log('This is true');
} else {
  console.log('This is false'); //This would be the answer.
}

var var1 = 3;
var var2 = 3;
if(var1 == var2){
  console.log('This is true'); //This would be the answer.
} else {
  console.log('This is false');
}

var var1 = 3;
var var2 = 3;//If this was 4 the following would be incorrect:
if(var1 == var2 && var1 == 3){ //In this case var1 has to also be equal to 3.
  console.log('This is true'); //This would be the answer.
} else {
  console.log('This is false');
}

**************************

var fruit = 'apples';//apples will make case number 2 alert.
                     //banana will make case number 1 alert.
                     //grapes or any other fruit unlisted will make default alert.
switch(fruit){
  case "banana":
      alert('I hate bananas');
      break;
  case "apple":
      alert('I love apples');
      break;
  default:
      alert('I love all other fruits');
      break;
}

**************************
//Object Literal
var person = {
  firstName: 'Norbert',
  lastName: 'Kosinski',
  age: 17,
  loves: ['Planes', 'Computers', 'Family']
  address: {
    street: '123 Something St',
    city: 'Birmingham',
    zipCode: 'B18 ***'
  }
  fullName: function() {
      return this.firstName +" "+this.lastName;//'this' Is used in many programming langs, it's used to refer to object in this case 'person'
                                               //+" "+ concatinates whatever.
                                               //This function will return fullName - 'Norbert Kosinski'
  }
}
console.log(person.firstName);//Console will output 'Norbert'
console.log(person.loves[0]);//Console will output 'Planes'
console.log(person.address);//Console will output entire abject 'address'
console.log(person.address.city);//Console will output just the city 'Birmingham'

*************************
//Object Constructor
var apple = new Object();
apple.color = 'red';
apple.shape = 'round';

apple.describe = function() {
  return 'An apple is the color '+this.color+' and is the shape '+this.shape+;
}
console.log(apple.describe());//Console would output a proper sentence featuring color (red) and shape (round).
