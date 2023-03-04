<template>
  <div class="result-container">
    <div class="wrapper">
      <h1>✨ Congratulations ✨</h1>
      <p class="total-time">{{ this.totalTime }} seconds</p>
      <button class="btn-restart" @click="onHandleReStart">Start Again</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    totalTime: {
      type: [Number, String],
      require: true,
    },
  },
  methods: {
    onHandleReStart() {
      this.$emit("onRestart");
    },
  },
};
</script>

<style lang="scss" scoped>
.result-container {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  & .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #f3f3f3;
    & h1 {
      font-size: 3rem;
    }
    & .total-time {
      margin-top: 1rem;
      font-size: 3rem;
    }
    & .btn-restart {
      padding: 1rem 1.25rem;
      cursor: pointer;
      border-radius: 0.5rem;
      background-color: #212121;
      color: #f3f3f3;
      border: 1px solid #f3f3f3;
      font-family: "Odibee Sans", cursive;
      margin-top: 20px;
      &:hover {
        background-color: #f3f3f3;
        color: #212121;
      }
    }
  }
}
</style>
