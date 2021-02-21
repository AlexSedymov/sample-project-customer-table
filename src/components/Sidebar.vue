<template>
  <v-navigation-drawer v-model="drawer" app>
    <v-sheet color="grey lighten-4" class="pa-4">
      <h3>{{ $t("customers") }}</h3>
    </v-sheet>

    <v-divider></v-divider>

    <v-list>
      <v-list-item
        v-for="(link, index) in links"
        :key="index"
        router
        :to="`/${$i18n.locale}${link.url}`"
      >
        <v-list-item-title>{{ link.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      drawer: null,
      links: [
        { title: this.$t("table.tableHeader"), url: "/" },
        { title: this.$t("inputTable.inputTable"), url: "/new_data" }
      ]
    };
  }
};
</script>
