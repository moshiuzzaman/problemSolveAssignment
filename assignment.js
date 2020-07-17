 

// ************ feetToMile fuction here ************
function feetToMile(feet){
        
        if(feet>=0){
                // [ 1 Mile =5280 Feet ]
                var mile= feet/5280;
        }
        else{
                var mile= "you enterd Nagative number"
        }

        return mile;
}


// ************ woodCalculator fuction here ************
function woodCalculator(chair,table,bed){
       if(chair>=0 && table>=0 && bed>=0){
                var chairWoodCalculate= chair*1;
                var tableWoodCalculate= table*3;
                var bedWoodCalculate= bed*5;

                var totalWood = chairWoodCalculate + tableWoodCalculate + bedWoodCalculate ;
       }
       else{
              var totalWood = "you enterd Invalid number"
       }
        return totalWood;
}



// ************ brickCalculator fuction here ************
function brickCalculator(floor){
        if(floor<=10){
                var brickCount=floor*15*1000;
                var totalBricks = brickCount;
        }
        if(floor>10 && floor<=20){
                var tenUpFloor= floor-10;
                var brickCount=tenUpFloor*12*1000;
                var totalBricks=brickCount + 150000;
        }
        if (floor>20){
                 var maxUpFloor= floor-20;
                var brickCount=maxUpFloor*10*1000;
                var totalBricks=brickCount + 270000;               
        }
        else{
                totalBricks="you enterd Nagative number"
        }

        return totalBricks;
}



// ************ tinyFriend fuction here ************
function tinyFriend(name){

        var smallName=name[0];
        var smallNameLength=smallName.length;
        for(var i=0; i<name.length; i++){
                var newName=name[i];
                var newNameLength=newName.length;

                if(newNameLength<smallNameLength){
                        smallName=newName;
                        smallNameLength=newNameLength;
                }
                
        }
        if(smallName==" " || smallName=="  " ){
                smallName= "Tiny Friend Name Is not valid";
        }
        else{
                smallName= "Tiny Friend Name Is " +  smallName;
        }
        return smallName;
}





// ************ feetToMile fuction call and console.log here ************
var mileResult=feetToMile(-15840);
console.log(mileResult);

// ************ woodCalculator fuction call and console.log here ************
var woodCalculateResult = woodCalculator(2,-4,6);
console.log(woodCalculateResult);

// ************ brickCalculator fuction call and console.log here ************
var brickCalculateResult= brickCalculator(-50);
console.log(brickCalculateResult);

// ************ tinyFriend fuction call and console.log here ************
var friendsName=["Mikail" , "Miaraj" , "Naim" , "pagla" , "raj"  ," ", "Musfiqur", ];
var tinyFriendName=tinyFriend(friendsName);
console.log(tinyFriendName);