<template>
  <v-data-table
    dense
    :headers="headers"
    :items="customers"
    item-key="name"
    class="elevation-1"
  ></v-data-table>
</template>

<script>
import { HTTP } from "@/service";

export default {
  name: "Table",
  data() {
    return {
      search: "",
      customers: [],
      headers: [
        { text: this.$t("table.name"), value: "name" },
        { text: this.$t("table.phone"), value: "phone" },
        { text: this.$t("table.email"), value: "email" },
        { text: this.$t("table.description"), value: "description" }
      ]
    };
  },
  mounted() {
    this.getCustomerData();
  },
  methods: {
    async getCustomerData() {
      await HTTP.get(`customers/list`)
        .then(response => {
          this.customers = response.data.data;
        })
        .catch(e => {
          this.errors.push(e);
        });
    }
  }
};
</script>

<style scoped></style>
