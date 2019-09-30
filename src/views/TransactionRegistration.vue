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
        <v-btn
          @click="$router.go(-1)"
          block
        >
          Voltar
        </v-btn>
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
import {mapActions} from 'vuex';

const locale = 'pt-BR';
export default {
    name: 'TransactionRegistration',
    data: () => ({
      valid: false,
      transactionType: null,
      transactionValue: '',
      transactionTypes: [
        {
          text: 'Crédito',
          value: 1
        },
        {
          text: 'Débito',
          value: 2
        },
      ],
      valueRules: [
        v => !!v || 'Valor é obrigatório',
        v => parseFloat(
          v
          .replace('.', '')
          .replace(',', '.')
        ) > 0 || 'Valor deve ser acima de R$ 0,00'
      ],
      typeRules: [v => !!v || 'Tipo é obrigatório'],
    }),
    methods: {
      ...mapActions(['openSnackbar']),
      formatMoney(eventValue) {
        const value = eventValue
        const onlyNumbersValue = value.replace(/\D/g, '') || '0'
        const moneyValue = (parseFloat(onlyNumbersValue) / 100).toLocaleString(locale, {
          minimumFractionDigits: 2
        })
        this.$nextTick(() => 
          this.transactionValue = moneyValue
        )
      },
      save() {
        if(!this.valid) {
          this.openSnackbar('Campo obrigatórios não foram preenchidos corretamente.')
          return;
        }
        try {
          let transactions = JSON.parse(localStorage.getItem('transactions')) || []
          transactions = [
            {
              date: new Date().toLocaleString(locale),
              value: this.transactionValue, 
              type: this.transactionType
            },
            ...transactions
          ]
          localStorage.setItem('transactions', JSON.stringify(transactions))
          this.openSnackbar('Transação salva com sucesso!')
          this.$router.push({name: 'home'})
        } catch(e) {
          this.openSnackbar('Erro ao salvar transação!')
          console.error(e)
        }
      },
    }
}
</script>

<style>

</style>
