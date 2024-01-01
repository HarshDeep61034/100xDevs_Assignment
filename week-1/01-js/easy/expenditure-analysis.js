/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/
function calculateTotalSpentByCategory(transactions) {
  let catArr = [];
  let arr = [];
  for(let i=0; i<transactions.length; i++){
    if(!catArr.includes(transactions[i].category)){
      arr.push({
        category: transactions[i].category,
        totalSpent: transactions[i].price
      })
      catArr.push(transactions[i].category);
    }
    else{
      let index = catArr.indexOf(transactions[i].category);
      arr[index].totalSpent += transactions[i].price;
    }
  }
  return arr;
}



module.exports = calculateTotalSpentByCategory;
