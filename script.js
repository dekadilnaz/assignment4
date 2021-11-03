var calculate = () => {

    const form = document.forms["calc"]
    let error = false;
    Array.prototype.forEach.call(form, element => {
        if(element.value == "blank" && !error){
            alert("Not all fields are choosen/filled!");
            error = true;
        }
    });

    let price = Number(form.elements["starting_bid"].value);
    console.log(price);

    let edu_price = Number(form.elements["education"].value);
    price *= edu_price;
    console.log(price);
    
    let family_price = Number(form.elements["networth"].value);
    price *= family_price;
    console.log(price);

    let caste_price = Number(form.elements["caste"].value);
    price += caste_price;
    console.log(price);

    for (let i = 3; i < 7; i++) {
        if(form.elements[i].checked == true){
            price += Number(form.elements[i].value);
        }
    }
    console.log(price);

    let selectedAge = Number(form.elements["age"].value);
    if (selectedAge != '') {
        price *= selectedAge;
    }
    console.log(price);

    for (let i = 10; i < 12; i++) {
        if(form.elements[i].checked == true){
            price *= Number(form.elements[i].value) ;
        }
    }
    console.log(price);
    if (form.elements[12].checked == true) {
        price += Number(form.elements[12].value);
    }
    console.log(price);

    return price;
}

function setResults() {
    let price = calculate();
    let name = document.forms["calc"].elements["name"].value;
    let love_letter = document.forms["calc"].elements["loveletter"].value;
    

    let person = {
        bride_name: name,
        bride_price: price,
        letter_to_bride: love_letter
    }

    document.getElementById('results').innerHTML = `<h1> ${person.bride_name} </h1><h2> ${person.bride_price}$ </h2><p>${person.letter_to_bride}</p>`; 

}
