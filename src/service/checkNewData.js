import { HTTP } from "@/service/index";

function checkCustomerData(id) {
  HTTP.get(`customers/check/`, id)
    .then(response => {
      this.customers = response.data.data;
    })
    .catch(e => {
      this.errors.push(e);
    });
}

export default checkCustomerData;
