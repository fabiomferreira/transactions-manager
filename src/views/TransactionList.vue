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
  </v-container>
</template>

<script>
export default {
    name: 'TransactionList',
    data: () => ({
        transactions: []
    }),
    created() {
        this.transactions = JSON.parse(localStorage.getItem('transactions')) || []
    }
}
</script>

<style>

</style>