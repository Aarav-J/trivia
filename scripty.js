metal = document.querySelector('#metal')
adamanatium = document.querySelector("#adamantium")
vibranium = document.querySelector("#vibranium")
carbonadium = document.querySelector("#carbonadium")

test = document.querySelector("#test")



metal.onclick = function() {
    metal.style.backgroundColor = 'rgb(247, 127, 127)'; 
    adamanatium.style.backgroundColor = '#d9edff'
    vibranium.style.backgroundColor = '#d9edff'
    carbonadium.style.backgroundColor = '#d9edff'
}


adamanatium.onclick = function() {
    adamanatium.style.backgroundColor = 'rgb(247, 127, 127)';
    vibranium.style.backgroundColor = '#d9edff'
    metal.style.backgroundColor = '#d9edff'
    carbonadium.style.backgroundColor = '#d9edff'
}

vibranium.onclick = function() {
    vibranium.style.backgroundColor = 'rgb(119, 236, 119)'
    
    metal.style.backgroundColor = '#d9edff'
    adamanatium.style.backgroundColor = '#d9edff'
    carbonadium.style.backgroundColor = '#d9edff'
}

carbonadium.onclick = function() {
    carbonadium.style.backgroundColor = 'rgb(247, 127, 127)'
    metal.style.backgroundColor = '#d9edff'
    vibranium.style.backgroundColor = '#d9edff'
    adamanatium.style.backgroundColor = '#d9edff'
}


test.addEventListener("submit", function() {
    console.log("hello")
})