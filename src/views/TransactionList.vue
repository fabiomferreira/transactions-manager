<template>
  <v-container>
      <h1 class="headline">Lista de Transações</h1>
       <v-simple-table>
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
                        <td>{{transaction.type}}</td>
                    </tr>
                </tbody>
            </template>
       </v-simple-table>
  </v-container>
</template>

<script>
export default {
    name: 'TransactionList',
    data: () => ({
        transactions: []
    }),
    created() {
        this.transactions = JSON.parse(localStorage.getItem('transactions'))
    }
}
</script>

<style>

</style>