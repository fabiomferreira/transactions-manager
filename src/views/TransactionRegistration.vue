<template>
  <v-container>
      <h1 class="headline">Nova Transação</h1>
      <v-form>
        <v-text-field
          v-model="transactionValue"
          @input="formatMoney"
          label="Valor"
          :rules="valueRules"
          color="blue darken-3"
          required
          outlined
        ></v-text-field>
        <v-select
          v-model="transactionType"
          :items="['Crédito', 'Débito']"
          :rules="typeRules"
          label="Operação"
          color="blue darken-3"
          required
          outlined
        ></v-select>
        <v-btn
          @click="save"
          block
          color="purple accent-2"
          dark
        >
          Salvar
        </v-btn>
      </v-form>
  </v-container>
</template>

<script>
export default {
    name: 'TransactionRegistration',
    data: () => ({
      transactionType: null,
      transactionValue: '',
      valueRules: [v => !!v || 'Valor é obrigatório'],
      typeRules: [v => !!v || 'Tipo é obrigatório'],
    }),
    methods: {
      formatMoney(eventValue) {
        const value = eventValue
        const onlyNumbersValue = value.replace(/\D/g, '') || '0'
        const moneyValue = (parseFloat(onlyNumbersValue) / 100).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
          minimumFractionDigits: 2
        })
        this.transactionValue = moneyValue
      },
      save() {
        this.$router.push({name: 'home'})
      },
    }
}
</script>

<style>

</style>
