<template>
  <v-app>
    <Header></Header>
    <Sidebar></Sidebar>

    <v-main>
      <v-container ma-auto>
        <router-view></router-view>
      </v-container>
    </v-main>

    <Footer></Footer>
  </v-app>
</template>

<script>
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
export default {
  name: "App",
  components: {
    Header,
    Sidebar,
    Footer
  }
};
</script>
