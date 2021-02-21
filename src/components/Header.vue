<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center">
      <a href="#" class="ml-12" @click="setLocale('en')"
        ><flag iso="us"></flag
      ></a>
      <a href="#" class="ml-4" @click="setLocale('cz')"
        ><flag iso="cz"></flag
      ></a>
    </div>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      currentRoute: null
    };
  },
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale;
      this.$router.replace(`/${this.$i18n.locale}/`);
      this.$router.go();
    }
  }
};
</script>
