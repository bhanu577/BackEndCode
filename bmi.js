const fs = require("fs");
const users=require("./userData")
    for(let i in users){
    var heightMm=users[i].HeightCm/100;
    var bmi=(users[i].WeightKg/(heightMm*heightMm)).toFixed(2);
    var bmiCat="BMI Category"
    var helCat="Health Risk"
    if(bmi<=18.4){
        users[i].bmiCat="Under weight";
        users[i].helCat="Malnutrition risk";
    }
    else if(bmi>=18.5 && bmi<=24.9){
        users[i].bmiCat="Normal weight";
        users[i].helCat="Low risk";
    }
    else if(bmi>=25 && bmi<=29.9){
        users[i].bmiCat="Over weight";
        users[i].helCat="Enhanced risk";
    }
    else if(bmi>=30 && bmi<=34.9){
        users[i].bmiCat="Moderately obese";
        users[i].helCat="Medium risk";
    }
    else if(bmi>=35 && bmi<=39.9){
        users[i].bmiCat="Severel obese";
        users[i].helCat="High risk";
    }
    else{
        users[i].bmiCat="Very severely obese";
        users[i].helCat="Very High risk";
    }
    }
fs.writeFile("data.json",JSON.stringify(users),err=>{
    if(err) throw err;
});
function check(bmiCheck){
    var count=0
        for(let i in users){
            //console.log(users[i].bmiCat);
            if(users[i].bmiCat==bmiCheck){
                count++;
            }
        }
        //console.log("entered");
        return count;
}
console.log("select one option to check how many people are having which BMI category\n\n1.Under Weight\n2.Normal Weight\n3.Over Weight\n4.Moderately Obese\n5.Severel Obese\n6.Very Severely Obese\n0.To Exist");
var readlineSync=require("readline-sync");
var op=readlineSync.question();
do{
switch(op){
    case '1':
        var x=check("Under weight");
        console.log("people with underweight",x);
        break;
    case '2':
        var x=check("Normal weight");
        console.log("people with Normal weight",x);
        break;
    case '3':
        var x=check("Over weight");
        console.log("people with Over weight",x);
        break;
    case '4':
        var x=check("Moderately obese");
        console.log("people with Moderately obese",x);
        break;
    case '5':
        var x=check("Severel obese");
        console.log("people with Severel obese",x);
        break;
    case '6':
        var x=check("Very severely obese");
        console.log("people with Very Severely obese",x);
        break;
    default:
        break;
}
console.log("select one option to check how many people are having which BMI category\n\n1.Under Weight\n2.Normal Weight\n3.Over Weight\n4.Moderately Obese\n5.Severel Obese\n6.Very Severely Obese\n0.To Exist");
var readlineSync=require("readline-sync");
var op=readlineSync.question();
}while(Number(op)!=0);