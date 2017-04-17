const fs = require('fs');
const highland = require('highland');

highland(fs.createReadStream('customers.csv', 'utf8'))
  .split()  //split each line into a seperate entity
  .map(line => line.split(';')) //Splits each entity into array parts
  .map(parts => ({              //maps parts to an object
    name: parts[0],
    numPurchases: parts[1]
  }))
  .filter(customer => customer.numPurchases > 2) //Filters below 2
  .map(customer => customer.name) //removes all properties but name
  .each(x => console.log('each', x))  //prints the result
