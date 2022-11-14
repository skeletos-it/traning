const balance = document.getElementById("balance");
const money_plus = document.getElementById("money-plus");
const money_minus = document.getElementById("money-minus");
const list = document.getElementById("list");
const Descripation = document.getElementById("Descripation");
const amount = document.getElementById("amount");
const addButton = document.getElementById("addButtton");
var dummyTransactions = [
  { id: 1, text: "Flower", amount: 20, minus: true },
  { id: 2, text: "Salary", amount: 300, minus: false },
  { id: 3, text: "Book", amount: 10, minus: true },
  { id: 4, text: "Camera", amount: 150, minus: false },
];

getList(dummyTransactions);

function getList(dummyTransactions) {
  var result = "";
  var expenses = 0;
  var income = 0;
  for (let i = 0; i <= dummyTransactions.length; i++) {
    result =
      result +
      `<li class="${dummyTransactions[i].minus == true ? "minus" : "plus"}">` +
      dummyTransactions[i].text +
      "<span>" +
      dummyTransactions[i].amount +
      "</span>" +
      "</li>";
    list.innerHTML = result;
    if (dummyTransactions[i].minus == true) {
      expenses = expenses + dummyTransactions[i].amount;
      money_minus.innerHTML = "" + "$" + expenses;
      console.log(income, expenses);
      var mainbalance = income - expenses;
      balance.innerHTML = "" + "$" + mainbalance;
    } else {
      income = income + dummyTransactions[i].amount;
      money_plus.innerHTML = "" + "$" + income;
      console.log(income, expenses);
      var mainbalance = income - expenses;
      balance.innerHTML = "" + "$" + mainbalance;
    }
  }
}
function addEntry() {
  // console.log('hello');
  let text1 = Descripation.value;
  let amount1 = amount.value;
  let minus1 = false;
  if (amount1 < 0) {
    minus1 = true;
  }
  dummyTransactions.push({
    id: dummyTransactions.length + 1,
    text: text1,
    amount: Math.abs(amount1),
    minus: minus1,
  });
  console.log(dummyTransactions);
  getList(dummyTransactions);
}
