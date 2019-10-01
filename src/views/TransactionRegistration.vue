<template>
  <v-container>
    <h1 class="headline">Nova Transação</h1>
    <v-form v-model="valid">
      <v-text-field
        v-model="transactionValue"
        @input="formatMoney"
        label="Valor"
        :rules="valueRules"
        prefix="R$"
        color="blue darken-3"
        required
        outlined
      ></v-text-field>
      <v-select
        v-model="transactionType"
        :items="transactionTypes"
        :rules="typeRules"
        label="Operação"
        color="blue darken-3"
        required
        outlined
      ></v-select>
      <div class="d-md-flex justify-space-between">
        <v-btn @click="$router.go(-1)" :block="isMobile" :class="{'btn-voltar': isMobile}">Voltar</v-btn>
        <v-btn @click="save" :block="isMobile" color="purple accent-2" dark>Salvar</v-btn>
      </div>
    </v-form>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

const locale = "pt-BR";
export default {
  name: "TransactionRegistration",
  data: () => ({
    valid: false,
    transactionType: null,
    transactionValue: "",
    transactionTypes: [
      {
        text: "Crédito",
        value: 1
      },
      {
        text: "Débito",
        value: 2
      }
    ],
    valueRules: [
      v => !!v || "Valor é obrigatório",
      v =>
        parseFloat(v.replace(/\./g, "").replace(",", ".")) > 0 ||
        "Valor deve ser acima de R$ 0,00"
    ],
    typeRules: [v => !!v || "Tipo é obrigatório"]
  }),
  computed: {
    ...mapGetters(["isMobile"])
  },
  methods: {
    ...mapActions(["openSnackbar"]),
    formatMoney(eventValue) {
      const value = eventValue;
      const onlyNumbersValue = value.replace(/\D/g, "") || "0";
      const moneyValue = (parseFloat(onlyNumbersValue) / 100).toLocaleString(
        locale,
        {
          minimumFractionDigits: 2
        }
      );
      this.$nextTick(() => (this.transactionValue = moneyValue));
    },
    save() {
      if (!this.valid) {
        this.openSnackbar(
          "Campo obrigatórios não foram preenchidos corretamente."
        );
        return;
      }
      try {
        let transactions =
          JSON.parse(localStorage.getItem("transactions")) || [];
        transactions = [
          {
            date: new Date().toLocaleString(locale),
            value: this.transactionValue,
            type: this.transactionType
          },
          ...transactions
        ];
        localStorage.setItem("transactions", JSON.stringify(transactions));
        this.openSnackbar("Transação salva com sucesso!");
        this.$router.push({ name: "home" });
      } catch (e) {
        this.openSnackbar("Erro ao salvar transação!");
        console.error(e);
      }
    },
  },
};
</script>

<style lang="scss">
.btn-voltar {
  margin-bottom: 1rem;
}
</style>
