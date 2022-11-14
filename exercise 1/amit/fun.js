items = [
  {
    id: 0,
    name: "Chicken Pizza",
    price: 700,
  },
  {
    id: 1,
    name: "Vegetable Pizza",
    price: 500,
  },
  {
    id: 2,
    name: "Chicken Kottu",
    price: 300,
  },
  {
    id: 3,
    name: "Vegetable Kottu",
    price: 200,
  },
  {
    id: 4,
    name: "Water Bottle",
    price: 70,
  },
];

result = [];

var id = 0;

item1.addEventListener("change", (e) => {
  id = e.target.value;
});

q1.addEventListener("blur", (e) => {
  const qty = e.target.value;

  items.forEach((item) => {
    if (item.id == id) {
      const price = item.price * qty;
      document.getElementById("p1").value = price;
      result.push({
        price: price,
      });
    }
  });
});

item2.addEventListener("change", (e) => {
  id = e.target.value;
});

q2.addEventListener("blur", (e) => {
  const qty = e.target.value;

  items.forEach((item) => {
    if (item.id == id) {
      const price = item.price * qty;
      document.getElementById("p2").value = price;
      result.push({
        price: price,
      });
    }
  });
});

item3.addEventListener("change", (e) => {
  id = e.target.value;
});

q3.addEventListener("blur", (e) => {
  const qty = e.target.value;

  items.forEach((item) => {
    if (item.id == id) {
      const price = item.price * qty;
      document.getElementById("p3").value = price;
      result.push({
        price: price,
      });
    }
  });
});

item4.addEventListener("change", (e) => {
  id = e.target.value;
});

q4.addEventListener("blur", (e) => {
  const qty = e.target.value;

  items.forEach((item) => {
    if (item.id == id) {
      const price = item.price * qty;
      document.getElementById("p4").value = price;
      result.push({
        price: price,
      });
    }
  });
});

document
  .getElementById("createBill")
  .addEventListener("click", function (event) {
    event.preventDefault();

    var tot = 0;

    for (var i = 0; i < result.length; i++) {
      tot += result[i].price;

      document.getElementById("totalAmt").innerHTML = tot;
    }
  });
