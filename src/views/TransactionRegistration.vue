<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
      Nova Transação
      <v-form>
        <v-text-field
          v-model="transactionValue"
          label="Valor"
          :rules="valueRules"
          required
        ></v-text-field>
        <v-select
        v-model="select"
        :items="['Crédito', 'Débito']"
        :rules="typeRules"
        label="Operação"
        required
      ></v-select>
      </v-form>
    </v-layout>
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
    })
}
</script>

<style>

</style>
