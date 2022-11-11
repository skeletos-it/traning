// const itemsData = {
//     "Australia": "",
//     "Canada": "",
//     "UK": "",
//     "USA": ""
//   }


// const items = document.getElementById("items").value;


// for (let key in itemsData) {
//     let option = document.createElement("option");
//     option.setAttribute('value', data[key]);
  
//     let optionText = document.createTextNode(key);
//     option.appendChild(optionText);
  
//     items.appendChild(option);
//   }

items= [
    {
        "id" : 0,
        "name" : "Chicken Pizza",
        "price" : 700
    },
    {
        "id" : 1,
        "name" : "Vegetable Pizza",
        "price" : 500
    },
    {
        "id" : 2,
        "name" : "Chicken Kottu",
        "price" : 300
    },
    {
        "id" : 3,
        "name" : "Vegetable Kottu",
        "price" : 200
    },
    {
        "id" : 4,
        "name" : "Water Bottle",
        "price" : 70
    }
]

selectedItems = {
    id : 0,
    qty: 0,
    price:0
}

item1.addEventListener("change", e => {
     selectedItems.id = e.target.value
 })


   q1.addEventListener("blur", e => {
    selectedItems.qty = e.target.value

    items.forEach(item => {
    if(item.id == selectedItems.id){
        selectedItems.price = item.price * selectedItems.qty;
        document.getElementById("p1").value =  selectedItems.price;

    }
   });
})


item2.addEventListener("change", e => {
    selectedItems.id = e.target.value
})


  q2.addEventListener("blur", e => {
   selectedItems.qty = e.target.value

   items.forEach(item => {
   if(item.id == selectedItems.id){
       selectedItems.price = item.price * selectedItems.qty;
       document.getElementById("p2").value =  selectedItems.price;

   }
  });
})

item3.addEventListener("change", e => {
    selectedItems.id = e.target.value
})


  q3.addEventListener("blur", e => {
   selectedItems.qty = e.target.value

   items.forEach(item => {
   if(item.id == selectedItems.id){
       selectedItems.price = item.price * selectedItems.qty;
       document.getElementById("p3").value =  selectedItems.price;

   }
  });
})


item4.addEventListener("change", e => {
    selectedItems.id = e.target.value
})


  q4.addEventListener("blur", e => {
   selectedItems.qty = e.target.value

   items.forEach(item => {
   if(item.id == selectedItems.id){
       selectedItems.price = item.price * selectedItems.qty;
       document.getElementById("p4").value =  selectedItems.price;

   }
  });
})






function createBill(){
    var index=0;
    var quantities = ["null", "null", "null", "null"];
    var prices = ["null", "null", "null", "null"];
    var items = ["null", "null", "null", "null"];

    var e1 =document.getElementById("item1");
    var itemselected1 = e1.options[e1.selectedIndex].value;
    if(itemselected1 != 1){
        items[index] = itemselected1;
        quantities[index] = document.getElementById("q1").value;
        prices[index] = document.getElementById("p1").value;
        index++;
    }

    var e2 =document.getElementById("item2");
    var itemselected2 = e2.options[e2.selectedIndex].value;
    if(itemselected2 != 1){
        items[index] = itemselected2;
        quantities[index] = document.getElementById("q2").value;
        prices[index] = document.getElementById("p2").value;
        index++;
    }

    var e3 =document.getElementById("item3");
    var itemselected3 = e3.options[e3.selectedIndex].value;
    if(itemselected3 != 1){
        items[index] = itemselected3;
        quantities[index] = document.getElementById("q3").value;
        prices[index] = document.getElementById("p3").value;
        index++;
    }

    var e4 =document.getElementById("item4");
    var itemselected4 = e4.options[e4.selectedIndex].value;
    if(itemselected4 != 1){
        items[index] = itemselected4;
        quantities[index] = document.getElementById("q4").value;
        prices[index] = document.getElementById("p4").value;
        index++;
    }




    var fTot=0;
for(var i=0;i<index;i++){

var tot=parseInt(qty[i])*parseInt(price[i]);
document.write("<td>"+tot+"</td>");
fTot+=tot;
document.write("</tr>");
}
}