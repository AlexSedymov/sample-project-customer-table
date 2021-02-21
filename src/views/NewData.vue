<template>
  <div>
    <h1>{{ $t("inputTable.inputTable") }}</h1>
    <InputTable></InputTable>
  </div>
</template>

<script>
import InputTable from "@/components/InputTable";

export default {
  name: "NewData",
  components: {
    InputTable
  }
};
</script>
