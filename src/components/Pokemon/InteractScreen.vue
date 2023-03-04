<template>
  <div class="interact-container">
    <card-flip
      v-for="(card, index) in arrayCard"
      :key="index"
      :ref="`card-${index}`"
      :urlBackFaceCard="`${card}.png`"
      :card="{ index, value: card }"
      @onFlip="onHandleRules($event)"
      :rules="this.rules"
    />
  </div>
</template>

<script>
import CardFlip from "./Card.vue";
export default {
  components: {
    CardFlip,
  },
  props: {
    arrayCard: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      rules: [],
      results: [],
    };
  },
  methods: {
    onHandleRules(card) {
      if (this.rules.length === 2) return false;

      this.rules.push(card);
      if (
        this.rules.length === 2 &&
        this.rules[0].value === this.rules[1].value
      ) {
        // thêm class disable
        this.$refs[`card-${this.rules[0].index}`][0].onDisableCard();
        this.$refs[`card-${this.rules[1].index}`][0].onDisableCard();
        // add to array results
        this.results = [...this.results, ...this.rules];

        // reset rules
        this.rules = [];
        // check end game
        if (this.results.length === this.arrayCard.length) {
          setTimeout(() => {
            // time end
            let timeEnd = new Date().getTime();
            this.$emit("onEnd", timeEnd);
            // reset results
            this.results = [];
          }, 900);
        }
      } else if (
        this.rules.length === 2 &&
        this.rules[0].value !== this.rules[1].value
      ) {
        // delay(800ms)
        setTimeout(() => {
          // Đóng 2 thẻ đó lại
          this.$refs[`card-${this.rules[0].index}`][0].onCloseCard();
          this.$refs[`card-${this.rules[1].index}`][0].onCloseCard();
          // reset rules
          this.rules = [];
        }, 700);
      } else return;
    },
  },
};
</script>

<style lang="scss" scoped>
.interact-container {
  display: flex;
  flex-wrap: wrap;
  margin: 2rem auto;
}
</style>
