<template>
  <div
    class="card-container"
    :class="{ disable: isDisable }"
    :style="{
      height: `${(820 - 16 * 4) / Math.sqrt(arrayCard.length) - 16}px`,
      width: `${
        (((1000 - 16 * 4) / Math.sqrt(arrayCard.length) - 16) * 3) / 4
      }px`,
    }"
  >
    <div
      class="wrapper"
      :class="this.isFlipped && 'flipped'"
      @click="onToggleFlipCard(card.value)"
    >
      <div class="card-face card-font">
        <div
          class="card-content"
          :style="{
            backgroundSize: `${
              (((1000 - 16 * 4) / Math.sqrt(arrayCard.length) - 16) * 3) / 4 / 3
            }px`,
          }"
        ></div>
      </div>
      <div class="card-face card-back">
        <div
          class="card-content"
          :style="{
            backgroundImage: `url(${require('@/assets/img/' +
              urlBackFaceCard)})`,
          }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardFlip",
  props: {
    urlBackFaceCard: {
      type: String,
      required: true,
    },
    card: {
      type: [Array, String, Object, Number],
      required: true,
    },
    rules: {
      type: Array,
    },
    arrayCard: {
      type: [Array, Object],
      default: () => [],
    },
  },
  data() {
    return {
      isFlipped: false,
      isDisable: false,
    };
  },
  methods: {
    onToggleFlipCard() {
      if (this.isDisable) return;
      if (this.rules.length >= 2) return;
      // if (this.rules.length >= 2) return;
      this.isFlipped = !this.isFlipped;
      if (this.isFlipped) this.$emit("onFlip", this.card);
    },
    onCloseCard() {
      this.isFlipped = false;
    },
    onDisableCard() {
      this.isDisable = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.card-container {
  margin-right: 1rem;
  margin-bottom: 1rem;
  width: 90px;
  height: 90px;

  & .wrapper {
    width: 100%;
    height: 100%;
    transition: transform 0.7s;
    transform-style: preserve-3d;
    cursor: pointer;
    position: relative;

    & .card-face {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      overflow: hidden;
      border-radius: 1rem;
      padding: 1rem;
      box-shadow: 0 3px 18px 3px rgba(0, 0, 0, 0.2);
    }
    & .card-font {
      & .card-content {
        background: url("../../assets/img/icon_back.png") no-repeat center
          center;
        // background: url("../../assets/images/4.png") no-repeat center center;
        width: 100%;
        height: 100%;
        background-size: 40px 40px;
      }
    }

    & .card-back {
      background-color: #f3f3f3;
      color: #000;
      transform: rotateY(-180deg);
      & .card-content {
        background-position: center center;
        background-repeat: no-repeat;
        background-size: contain;
        height: 100%;
        width: 100%;
      }
    }
  }

  .flipped {
    transform: rotateY(-180deg);
  }
  .disable {
    cursor: default;
  }
}
</style>
