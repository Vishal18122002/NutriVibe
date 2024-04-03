var jsonData = [
    {
        "fname": "Banana",
        "img": "banana.jpeg",
        "content": ["Vitamin B1", "Vitamin B2", "Vitamin B6", "Vitamin C"]
    },
    {
        "fname": "Apple",
        "img": "apple.jpeg",
        "content": ["Vitamin C", "Vitamin K", "Vitamin B1", "Vitamin B2", "Vitamin B6"]
    },
    {
        "fname": "Orange",
        "img": "orange.jpeg",
        "content": ["Vitamin C"]
    },
    {
        "fname": "Mango",
        "img": "mango.jpeg",
        "content": ["Vitamin A", "Vitamin C", "Vitamin E"]
    },
    {
        "fname": "Strawberry",
        "img": "strawberry.jpeg",
        "content": ["Vitamin C", "Vitamin K"]
    },
    {
        "fname": "Pineapple",
        "img": "pineapple.jpeg",
        "content": ["Vitamin C"]
    },
    {
        "fname": "Kiwi",
        "img": "kiwi.jpeg",
        "content": ["Vitamin C", "Vitamin K", "Vitamin E"]
    },
    {
        "fname": "Grapefruit",
        "img": "grapefruit.jpeg",
        "content": ["Vitamin C"]
    },
    {
        "fname": "Watermelon",
        "img": "watermelon.jpeg",
        "content": ["Vitamin A", "Vitamin C"]
    },
    {
        "fname": "Blueberry",
        "img": "blueberry.jpeg",
        "content": ["Vitamin C", "Vitamin K", "Vitamin B1", "Vitamin B2", "Vitamin B6"]
    },
    {
        "fname": "Avocado",
        "img": "vocado.jpeg",
        "content": ["Vitamin K", "Vitamin E"]
    }

];
function searchfun() {

    if (document.getElementById('search').value!==""){
        document.querySelector(".container1").innerHTML=" "
        var searchValue = document.getElementById('search').value.toLowerCase();

        var filterList = jsonData.filter(function(listItem) {
            return listItem.fname.toLowerCase().includes(searchValue) || listItem.content.some(function(vitamin) {
                return vitamin.toLowerCase().includes(searchValue);
            });
        })
        if (filterList.length===0){
            var n = document.createElement("div");
            n.classList="res";
            n.innerHTML=`<p>No result found.</p>`;
            n.style.cssText="color:gray;font-size:20px;margin:0px auto;text-align: center";
            document.querySelector(".container").appendChild(n);
            document.getElementById('search').value='';
        }
        else{
        displayItem(filterList);}
    }
    else{
        document.querySelector(".container").innerHTML=" "
        alert("Enter any input for search");
    }
}
function displayItem(item) {
    var container = document.querySelector(".container1");
    container.innerHTML = "";
    item.map(function(listItem) {
        var card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img src="images/${listItem.img}" alt="${listItem.fname}">
            <h2>${listItem.fname}</h2>
            <h4>${listItem.content.join(", ")}</h3>
        `;
        container.appendChild(card);
        document.getElementById('search').value = '';
    });
}