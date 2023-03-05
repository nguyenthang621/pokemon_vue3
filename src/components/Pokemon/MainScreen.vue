<template>
  <div>
    <div class="wrapper">
      <div class="title">
        <h1 class="text">POKE MEMORIES</h1>
        <p class="instruct">Select mode to start game</p>
      </div>
      <div class="modes">
        <div
          class="option"
          v-for="(item, index) in menuData"
          @click="onHandelSelectLevel(item.total)"
          :key="index"
        >
          <span class="level">{{ item.level }}</span>
          <span class="matrix">{{ item.matrix }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { menuData } from "../../data/pokemonData.js";
export default {
  methods: {
    onHandelSelectLevel(totalCard) {
      this.$emit("onStart", { totalCard });
    },
  },
  data() {
    return {
      menuData,
    };
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
  background-color: #212121;

  & .title {
    & .text {
      text-transform: uppercase;
      font-size: 4rem;
    }
    & .instruct {
      font-size: 1.5rem;
      text-align: center;
    }
  }

  & .modes {
    display: flex;
    align-items: center;
    margin-top: 2rem;
    cursor: pointer;

    & .option {
      margin: 0 16px;
      width: 150px;
      height: 150px;
      border: 1px solid #f3f3f3;
      border-radius: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      transition: all 0.3s ease-in-out;
      &:hover {
        background-color: #f3f3f3;
        color: #212121;
      }
      & .level {
        font-size: 1.5rem;
      }
      & .matrix {
        font-size: 1rem;
      }
    }
  }
}
</style>
