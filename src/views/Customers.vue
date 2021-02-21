<template>
  <div class="home">
    <h1 class="pl-0 pb-6">{{ $t("table.tableHeader") }}</h1>
    <Table></Table>
  </div>
</template>

<script>
import Table from "@/components/Table";

export default {
  name: "Customers",
  components: {
    Table
  }
};
</script>
