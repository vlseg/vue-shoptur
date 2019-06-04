<template>
  <v-dialog width="400px" v-model="modal">
    <v-btn class="warning" flat slot="activator">Редактировать</v-btn>

    <v-card>
      <v-container>
        <v-layout row>
          <v-flex xs12>
            <v-card-title>
              <h1 class="text--primary">Редактировать данные</h1>
            </v-card-title>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout row>
          <v-flex xs12>
            <v-card-text>
              <v-text-field
                name="title"
                label="Название"
                type="text"
                v-model="editedTitle"
              ></v-text-field>
              <v-text-field
                name="description"
                label="Описание"
                type="text"
                multi-line
                v-model="editedDescription"
              ></v-text-field>
              <v-text-field
                name="title"
                label="Стоимость тура"
                type="text"
                v-model="editedPrice"
              ></v-text-field>
              <v-text-field
                name="count"
                label="Число отдыхающих"
                type="text"
                v-model="editedCount"
              ></v-text-field>
              <v-text-field
                name="date"
                label="С какого числа"
                type="text"
                v-model="editedDate"
              ></v-text-field>
              <v-text-field
                name="period"
                label="На сколько ночей/дней"
                type="text"
                v-model="editedPeriod"
              ></v-text-field>
            </v-card-text>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout row>
          <v-flex xs12>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn flat @click="onCancel">Отмена</v-btn>
              <v-btn class="success" flat @click="onSave">Сохранить</v-btn>
            </v-card-actions>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ['ad'],
  data () {
    return {
      modal: false,
      editedDescription: this.ad.description,
      editedTitle: this.ad.title,
      editedPrice: this.ad.price,
      editedCount: this.ad.count,
      editedDate: this.ad.date,
      editedPeriod: this.ad.period
    }
  },
  methods: {
    onCancel () {
      this.editedDescription = this.ad.description
      this.editedTitle = this.ad.title
      this.editedPrice = this.ad.price
      this.editedCount = this.ad.count
      this.editedDate = this.ad.date
      this.editedPeriod = this.ad.period
      this.modal = false
    },
    onSave () {
      if (this.editedDescription !== '' && this.editedTitle !== '' && this.editedPrice !== '') {
        this.$store.dispatch('updateAd', {
          title: this.editedTitle,
          description: this.editedDescription,
          price: this.editedPrice,
          count: this.editedCount,
          date: this.editedDate,
          period: this.editedPeriod,
          id: this.ad.id
        })

        this.modal = false
      }
    }
  }
}
</script>
