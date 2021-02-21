import { HTTP } from "@/service";
const uuid = require("uuid");

function newCustomerData(customerData) {
  customerData["id"] = uuid.v4();
  console.log(customerData);
  HTTP.post("customers/new", customerData)
    .then(function(response) {
      console.log(response);
      // status = response.status;
    })
    .catch(function(error) {
      console.log(error);
    });
}

export default newCustomerData;
