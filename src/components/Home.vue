<template>
  <div v-if="!loading">
    <v-container align-content-space-around>
      <v-layout row>
        <v-flex xs12>
          <br>
          <p class="display-2 text-xs-center">Внимание! Горячие туры на лучшие курорты мира</p>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid>
      <v-layout v-bind="binding">
        <v-flex xs8 sm12>
          <v-carousel
            :hide-delimiters="hideDelimiters"
          >
            <v-carousel-item
              v-for="ad in promoAds"
              :key="ad.id"
              :src="ad.imageSrc"
            >
                  <v-flex class="ad-price">
                    <v-card light
                      width="168px"
                      elevation="12"
                      height="120px"
                      class="pa-2 accent"
                    >
                      <div class="headline pr-2" style="height: 35px;text-align: center">{{ ad.price }}</div>
                      <hr>
                      <div class="subheading pr-2">{{ ad.count }} взрослых</div>
                      <div class="subheading pr-2">с {{ ad.date }}</div>
                      <div class="subheading pr-2">на {{ ad.period }}</div>
                    </v-card>
                  </v-flex>
              <v-flex class="car-link ">
                <v-btn class="error" :to="'/ad/' + ad.id">{{ ad.title }}</v-btn>
              </v-flex>
            </v-carousel-item>
          </v-carousel>
        </v-flex>

        <v-flex xs4
          class="ml-4 pt-2 accent hidden-sm-and-down"
        >
          <p class="display-1 text-xs-center pa-2">Спешите выбрать!</p>
          <p class="headline ml-4">Ниже представлены предложения от лучших туроператоров по сниженным ценам</p>
          <hr>
          <p class="display-1 text-xs-center pa-2">Туроператорам...</p>
          <p class="headline ml-4">Для размещения своих предложений, зарегистрируйе свой аккаунт</p>
        </v-flex>
      </v-layout>

    </v-container>

    <v-container align-content-space-around>
      <v-layout row>
        <v-flex xs12>
          <p class="display-2 text-xs-center accent">Текущие предложения</p>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex
          xs12
          sm6
          md4
          v-for="(ad, index) of ads"
          :key="ad.id"
          :index="index"
        >
          <v-card>
            <v-card-media
              :src="ad.imageSrc"
              height="200px"
            >
            </v-card-media>
            <v-card-title
              primary-title
              style = "height: auto;"
            >
              <div >
                <h3 class="headline mb-0">{{ad.title}}</h3>
                <div v-html="ad.description"
                  style = "height: 130px; overflow: hidden;">
                </div>
              </div>
            </v-card-title>
            <v-card-actions>
              <div class="wrapbutt">
                <button
                  @click="buttOpen($event)"
                  class="butt"
              >...</button>
              </div>
              <v-spacer></v-spacer>
              <v-btn v-if="btnVisible" flat :to="'/ad/' + ad.id">Карточка</v-btn>
              <app-buy-modal :ad="ad"></app-buy-modal>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
  <div v-else>
    <v-container>
      <v-layout row>
        <v-flex xs12 class="text-xs-center pt-5">
          <v-progress-circular
            indeterminate
            :size="100"
            :width="4"
            color="purple"
          ></v-progress-circular>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  computed: {
    hideDelimiters () {
      if (this.$vuetify.breakpoint.xsOnly) return true
    },
    binding () {
      const binding = {}
      if (this.$vuetify.breakpoint.smAndDown) binding.column = true
      return binding
    },
    btnVisible () {
      return this.$store.getters.btnAd
    },
    promoAds: function () {
      let valueAds = this.$store.getters.promoAds
      for (let i = 0; i < valueAds.length; i++) {
        let valueAdsItem = this.$store.getters.promoAds[i].description
        valueAds[i].description = valueAdsItem.replace(new RegExp('\n', 'g'), '<br>')
      }
      return valueAds
    },
    ads () {
      return this.$store.getters.ads
    },
    loading () {
      return this.$store.getters.loading
    }
  },
  methods: {
    buttOpen: function (e) {
      let buttOpenVal, buttOpenValText, buttOpenButt
      buttOpenVal = e.target.parentElement.parentElement.parentElement.children[1]
      buttOpenValText = buttOpenVal.children[0].children[1]
      buttOpenButt = e.target

      if (buttOpenValText.style.overflow === 'hidden') {
        buttOpenValText.style.height = 'auto'
        buttOpenValText.style.overflow = 'visible'
        buttOpenButt.style.top = '-12px'
        buttOpenButt.innerHTML = ' ↑ '
      } else {
        buttOpenValText.style.height = '130px'
        buttOpenValText.style.overflow = 'hidden'
        buttOpenButt.style.top = '-25px'
        buttOpenButt.innerHTML = '...'
      }
    }
  }
}
</script>

<style scoped lang="stylus">
  .car-link
    position: absolute;
    bottom: 50px;
    left: 50%;
    background: rgba(0, 0, 0, .5);
    transform: translate(-50%, 0);
    padding: 5px 15px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;

  .wrapbutt
    position: absolute;
    height: 16px;
    bottom: 38px;
    left: 15px;
    overflow: hidden;
    width: 24px;

  .butt
    font-size: 30px;
    position: absolute;
    top: -25px;
    width: 44px;
    margin-left: -10px;

  .ad-price
    text-align: right;
    position: absolute;
    right: 10px;
    top: 10px;


</style>
