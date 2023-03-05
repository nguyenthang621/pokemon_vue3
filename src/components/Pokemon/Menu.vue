<template>
  <div class="menu-container">
    <div class="menu-content">
      <h2>Level</h2>
      <div class="option-container">
        <div
          class="option"
          v-for="(item, index) in menuData"
          :key="index"
          @click="onHandleSelectLevel(item.total)"
        >
          {{ `${item.level} ${item.matrix}` }}
        </div>
        <div class="option" @click="onHandleExit">Exit</div>
      </div>
    </div>
  </div>
</template>

<script>
import { menuData } from "../../data/pokemonData.js";

export default {
  name: "MenuPokemon",
  data() {
    return {
      menuData,
    };
  },
  methods: {
    onHandleSelectLevel(totalCard) {
      this.$emit("onSelect", { totalCard });
    },
    onHandleExit() {
      this.$emit("onExit");
    },
  },
};
</script>

<style lang="scss" scoped>
.menu-container {
  position: absolute;
  left: 32px;
  top: 24px;
  border-radius: 12px;
  background-color: #5e5e5e;
  z-index: 10px;
  & .menu-content {
    padding: 16px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    & h2 {
      font-size: 16px;
      margin-bottom: 16px;
    }
    & .option-container {
      & .option {
        padding: 16px 42px;
        white-space: nowrap;
        &:hover {
          background-color: #212121;
        }
      }
    }
  }
}
</style>
