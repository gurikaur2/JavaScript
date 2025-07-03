const accountID=144553
let accountEmail="itsgurnoor@gmail.com"
var accountPwd ="1234"
accountCity = "Jaipur"

//accountID=2

accountEmail="hc@hc.com"
/* console.log(accountID);
console.log(accountEmail);
console.table(["ID","Email","Password","City"],[accountID,accountEmail,accountPwd,accountCity]) 
 */

// Create an array of objects, where each object is a row
// and the keys are your desired column names.
const data = [
    {
      "ID": accountID,
      "Email": accountEmail,
      "Password": accountPwd,
      "City": accountCity
    }
  ];
  
  console.table(data);