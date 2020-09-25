// create an object literal for the pet salon (name,address,hours)
var salon={
    salonName:'The Fashion Pet',
    address:{
        street:'Av. University',
        number:"215-B"
    },
    hours:{
        open:"8 a.m.",
        close:"5 p.m."
    },
    pets:[]
}

var c=1;
//object constructor
class Pet{
    constructor(name,age,type,breed,color,gender,service,price,ownerName,contactPhone){
        this.name=name;
        this.age=age;
        this.type=type;
        this.breed=breed;
        this.color=color;
        this.gender=gender;
        this.service=service;
        this.price=price;
        this.ownerName=ownerName;
        this.contactPhone=contactPhone;
        this.id=c;
        c++;
    }
}

var scooby = new Pet("Scooby",50,"Dog","Dane","Brown","Male","Full Service",300,"Shaggy","5555555555");
var scrappy = new Pet("Scrappy",10,"Dog","Dane","Brown","Male","Full Service",300,"Shaggy","5555555555");
var tweety = new Pet("Tweety",30,"Bird","Canary","Yellow","Male","Full Service",300,"Granny","5555555555");


// get the inputs and store them in variables
var txtName = document.getElementById('petName');
var txtAge = document.getElementById('petAge');
var txtType = document.getElementById('petType');
var txtBreed = document.getElementById('petBreed');
var txtColor = document.getElementById('petColor');
var txtGender = document.getElementById('petGender');
var txtService = document.getElementById('petService');
var txtPrice = document.getElementById('petPrice');
var txtOwner = document.getElementById('petOwner');
var txtContact = document.getElementById('petContact');

function register(){
    // create thePet 
    var thePet=new Pet(txtName.value,txtAge.value,txtType.value,txtBreed.value,txtColor.value,txtGender.value,txtService.value,Number(txtPrice.value),txtOwner.value,txtContact.value);
   console.log(thePet);
    // push thePet into the array
    salon.pets.push(thePet);
    display(thePet);
    salonprofit();
    clear();
}
    
function clear(){
    txtName.value="";
    txtAge.value="";
    txtType.value="";
    txtBreed.value="";
    txtColor.value="";
    txtGender.value="";
    txtService.value="";
    txtPrice.value="";
    txtOwner.value="";
    txtContact.value="";
}

// function to display on the console the names of the pets (travel the array)

function salonpets(){
    for(var i=0;i<salon.pets.length;i++){
        console.log(salon.pets[i].name);
    }
    displayNumberofElements();
}
function displayNumberofElements(){
    console.log(`There are ${salon.pets.length}`);
}
salonpets();


function salonprofit(){
    var total = 0;
    for(var i=0;i<salon.pets.length;i++){
        total = total + salon.pets[i].price;
    }
document.getElementById("salprof").innerHTML=`The total profit for the shop is $${total}`;
}

function deletePet(petId) {
    // select the html element
    var tr = $("#"+petId);
    var indexDelete;
    // travel the array (search function) --> petId===salon.pets[i].id
    for(var i=0;i<salon.pets.length;i++){
        var selected = salon.pets[i];
        if(selected.id===petId){
            indexDelete=i;
        }
    }
    // delete teh pet from the array splice()
    salon.pets.splice(indexDelete,1);
    // delete the pet from the html
    tr.remove();
}

function searchPet(){
    var ss=$('#petSearch').val();
    var searchString=ss.toLowerCase();
    for(var i=0;i<salon.pets.length;i++){
        var selected=salon.pets[i];
        if(selected.name.toLowerCase().includes(searchString) || selected.service.toLowerCase().includes(searchString)){
            $('#'+selected.id).addClass('active');
            console.log(selected.id);
        }
        else{
            $('#'+selected.id).removeClass('active');
        }
    }
}

function init(){
    // default
    console.log('script');
    salon.pets.push(scooby);
    salon.pets.push(scrappy);
    salon.pets.push(tweety);
    display(scooby);
    display(scrappy);
    display(tweety);
    salonprofit();
    // hook events
    $('#register-btn').on('click',register);

    $('#petContact').keypress(function(e){
        if(e.key==="Enter"){
            register();
        }
    });

    $('#search-btn').on('click',searchPet);

    $('#petSearch').keypress(function(e){
        console.log(e.key);
        if(e.key==="Enter"){
            console.log("Search the pet");
            searchPet();
        }
    });
}

window.onload=init;