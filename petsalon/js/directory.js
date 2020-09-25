function fetch_name_HTML(thisType,thisName) {
    const dogIcon='<i class="fas fa-dog"></i>';
    const catIcon='<i class="fas fa-cat"></i>';
    const birdIcon='<i class="fas fa-crow"></i>';
    let myHTML = "";
    
    switch(thisType.toLowerCase()) {
        case "dog":
            myHTML = `<h2>${thisName}${dogIcon}</h2>`
        break;

        case "cat":
            myHTML = `<h2>${thisName}${catIcon}</h2>`
        break;

        case "bird":
            myHTML = `<h2>${thisName}${birdIcon}</h2>`
        break;
    }
    return myHTML;
}

function display(aPet){
    // create the vars
    var pets = salon.pets;
    var text ="";
    var myNameHTML = "";
    const elPetSection=document.getElementById("js-petSection");
   
        // create the HTML text
        myNameHTML=fetch_name_HTML(aPet.type, aPet.name)
        text=
        `<tr id="${aPet.id}" class="pet">
                <td> ${myNameHTML} </td>
                <td> ${aPet.age} </td>
                <td> ${aPet.type} </td>
                <td> ${aPet.breed} </td>
                <td> ${aPet.color}</td>
                <td> ${aPet.gender} </td>
                <td> ${aPet.service}</td>
                <td> ${aPet.price}</td>
                <td> ${aPet.ownerName} </td>
                <td> ${aPet.contactPhone} </td>
                <td> <button class="btn btn-danger" onClick="deletePet(${aPet.id});"> Delete </button></td>
        </tr>`;
        console.log(text);
    
    //display the pets on the HTML
    $('#js-petSection').append(text);
    
}

