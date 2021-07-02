metal = document.querySelector('#metal')
adamanatium = document.querySelector("#adamantium")
vibranium = document.querySelector("#vibranium")
carbonadium = document.querySelector("#carbonadium")
correct1 = document.querySelector("#correct1")
incorrect1 = document.querySelector("#incorrect1")


submit = document.querySelector("#submit")
input = document.querySelector("#input")
correct2 = document.querySelector("#correct2")
incorrect2 = document.querySelector("#incorrect2")




metal.onclick = function() {
    metal.style.backgroundColor = 'rgb(247, 127, 127)'; 
    adamanatium.style.backgroundColor = '#d9edff'
    vibranium.style.backgroundColor = '#d9edff'
    carbonadium.style.backgroundColor = '#d9edff'
    correct1.style.display = "none"
    incorrect1.style.display = "block"
}


adamanatium.onclick = function() {
    adamanatium.style.backgroundColor = 'rgb(247, 127, 127)';
    vibranium.style.backgroundColor = '#d9edff'
    metal.style.backgroundColor = '#d9edff'
    carbonadium.style.backgroundColor = '#d9edff'

    correct1.style.display = "none"
    incorrect1.style.display = "block"
}

vibranium.onclick = function() {
    vibranium.style.backgroundColor = 'rgb(119, 236, 119)'
    
    metal.style.backgroundColor = '#d9edff'
    adamanatium.style.backgroundColor = '#d9edff'
    carbonadium.style.backgroundColor = '#d9edff'

    correct1.style.display = "block"
    incorrect1.style.display = "none"
}

carbonadium.onclick = function() {
    carbonadium.style.backgroundColor = 'rgb(247, 127, 127)'
    metal.style.backgroundColor = '#d9edff'
    vibranium.style.backgroundColor = '#d9edff'
    adamanatium.style.backgroundColor = '#d9edff'
    correct1.style.display = "none"
    incorrect1.style.display = "block"
}


submit.onclick = function() {
    let value = input.value.toLowerCase()

    if(value === "thunder") {
        incorrect2.style.display = "none";
        correct2.style.display = "block";
        input.style.backgroundColor = 'rgb(119, 236, 119) '
    }

    else
    {
        incorrect2.style.display = "block";
        correct2.style.display = "none";

        input.style.backgroundColor = 'rgb(247, 127, 127)'
    }
}