<template>
  <validation-observer ref="observer">
    <form @submit.prevent="submit">
      <validation-provider
        v-slot="{ errors }"
        name="Name"
        rules="required|max:20"
      >
        <v-text-field
          v-model="name"
          :counter="20"
          :error-messages="errors"
          label="Name"
          required
        ></v-text-field>
      </validation-provider>
      <validation-provider
        v-slot="{ errors }"
        name="Phone number"
        :rules="{
          required: true,
          digits: 9
        }"
      >
        <v-text-field
          v-model="phoneNumber"
          :counter="9"
          :error-messages="errors"
          label="Phone Number"
          required
        ></v-text-field>
      </validation-provider>
      <validation-provider
        v-slot="{ errors }"
        name="Email"
        rules="required|email"
      >
        <v-text-field
          v-model="email"
          :error-messages="errors"
          label="E-mail"
          required
        ></v-text-field>
      </validation-provider>

      <validation-provider
        v-slot="{ errors }"
        name="Description"
        rules="required|max:320"
      >
        <v-text-field
          v-model="description"
          :counter="320"
          :error-messages="errors"
          label="Description"
          required
        ></v-text-field>
      </validation-provider>

      <v-btn class="mr-4 mt-4" type="submit">
        {{ $t("inputTable.submit") }}
      </v-btn>
      <v-btn class="mt-4" @click="clear">
        {{ $t("inputTable.clear") }}
      </v-btn>
    </form>
  </validation-observer>
</template>

<script>
import newCustomerData from "@/service/postNewCustomer";
// import checkNewData from "@/service/checkNewData";
import { required, digits, email, max, regex } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode
} from "vee-validate";

setInteractionMode("eager");

extend("digits", {
  ...digits,
  message: "{_field_} needs to be {length} digits. ({_value_})"
});

extend("required", {
  ...required,
  message: "{_field_} can not be empty"
});

extend("max", {
  ...max,
  message: "{_field_} may not be greater than {length} characters"
});

extend("regex", {
  ...regex,
  message: "{_field_} {_value_} does not match {regex}"
});

extend("email", {
  ...email,
  message: "Email must be valid"
});

export default {
  name: "InputTable",
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data: () => ({
    name: "",
    phoneNumber: "",
    email: "",
    description: ""
  }),

  methods: {
    submit() {
      this.$refs.observer.validate();
      newCustomerData({
        id: "",
        name: this.name,
        phone: this.phoneNumber,
        email: this.email,
        description: this.description
      });

      // TODO! New customer submit success checker
      // checkNewData(newId);

      this.clear();
    },
    clear() {
      this.name = "";
      this.phoneNumber = "";
      this.email = "";
      this.description = "";
      this.$refs.observer.reset();
    }
  }
};
</script>

<style scoped></style>
