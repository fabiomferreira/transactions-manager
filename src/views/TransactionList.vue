<template>
  <v-container>
      <h1 class="headline">Transações</h1>
       <v-simple-table v-if="!!transactions.length">
            <template v-slot:default>
                <thead>
                    <tr>
                        <th align="left">Data/Hora</th>
                        <th align="left">Valor</th>
                        <th align="left">Tipo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(transaction, key) in transactions" :key="key">
                        <td>{{transaction.date}}</td>
                        <td>R$ {{transaction.value}}</td>
                        <td>{{transaction.type === 1 ? 'Crédito' : 'Débito' }}</td>
                    </tr>
                </tbody>
            </template>
       </v-simple-table>
       <v-alert v-else type="info">
           <strong>Você ainda não possui nenhuma transação.</strong>
           Clique em <strong>Nova Transação</strong> no canto superior 
           direito para adicionar uma nova transação
        </v-alert>
        <section class="saldo" :class="{red: onRed}">
            <strong>Saldo: </strong>
            <span>{{this.balance}}</span>
        </section>
  </v-container>
</template>

<script>
const CREDITO = 1
const DEBITO = 2

export default {
    name: 'TransactionList',
    data: () => ({
        transactions: [],
        balance: 'R$ 0,00',
        onRed: false
    }),
    created() {
        this.transactions = JSON.parse(localStorage.getItem('transactions')) || []
        this.calculateBalance()
        console.log(this.balance > 0)
    },
    methods: {
        calculateBalance() {
            let total = 0
            this.transactions.forEach(transaction => {
                const value = parseFloat(transaction.value.replace('.', '').replace(',', '.'))
                if(transaction.type === CREDITO) {
                    total += value
                } else {
                    total -= value
                }
            });
            this.onRed = total < 0
            this.balance = total.toLocaleString('pt-BR', {
                currency: 'BRL',
                style: 'currency',
                maximumFractionDigits: 2
            })
        }
    }
}
</script>

<style lang="scss">
@import "../assets/styles/styles";
.saldo {
    background: $color-base;
    color: white;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    padding: 1rem;
    justify-content: space-between;
    font-size: 24px;
}
</style>