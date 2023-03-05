<template>
  <div class="pokemon-container">
    <div
      class="btn-menu"
      v-if="this.modeScreen === 'INTERACT'"
      @click="this.onToggleMenu"
    >
      <menu-pokemon
        v-if="this.isShowMenu"
        @onSelect="handleStart($event)"
        @onExit="handleRestart"
      />
    </div>
    <main-screen
      v-if="this.modeScreen === 'MAIN'"
      @onStart="handleStart($event)"
    />
    <interact-screen
      v-if="this.modeScreen === 'INTERACT'"
      :arrayCard="initSettings.arrayCard"
      @onEnd="handleEndGame($event)"
    />
    <result-screen
      v-if="this.modeScreen === 'RESULT'"
      :totalTime="this.initSettings.totalTime"
      @onRestart="handleRestart"
    />
  </div>
</template>

<script>
import MainScreen from "./MainScreen.vue";
import InteractScreen from "./InteractScreen.vue";
import ResultScreen from "./ResultScreen.vue";
import MenuPokemon from "./Menu.vue";
import utilsArray from "../../utils/utilsArray.js";

export default {
  components: {
    MainScreen,
    InteractScreen,
    ResultScreen,
    MenuPokemon,
  },
  data() {
    return {
      modeScreen: "MAIN",
      initSettings: {
        totalCard: 0,
        arrayCard: [],
        time: 0,
        totalTime: 0,
      },
      isShowMenu: false,
    };
  },
  methods: {
    handleStart(e) {
      this.initSettings.totalCard = e.totalCard;
      //tạo mảng có totalCard/2 phần tử
      let halfArrayCard = utilsArray.createArr(
        this.initSettings.totalCard / 2,
        1
      );
      //mảng totalCard phần tử
      let arrCard = [...halfArrayCard, ...halfArrayCard];
      // xáo trộn 3 lần các phần tử trong mảng
      this.initSettings.arrayCard = utilsArray.shuffled(
        utilsArray.shuffled(utilsArray.shuffled(arrCard))
      );
      // reset total time
      this.totalTime = 0;
      // bắt đầu tính time
      this.initSettings.time = new Date().getTime();
      // show interact screen
      this.modeScreen = "INTERACT";
    },

    handleEndGame(timeEnd) {
      // tisnh tổng time chơi
      this.initSettings.totalTime = Math.ceil(
        (timeEnd - this.initSettings.time) / 1000
      );
      // show result screen
      this.modeScreen = "RESULT";
    },

    handleRestart() {
      // show main screen
      this.modeScreen = "MAIN";
    },

    onToggleMenu() {
      this.isShowMenu = !this.isShowMenu;
    },
  },
};
</script>

<style lang="scss" scoped>
.pokemon-container {
  width: 100%;
  height: 100vh;
  background-color: #212121;
  color: #f3f3f3;
  position: relative;
  overflow: hidden;
  & .btn-menu {
    background: url("../../assets/icon.svg") no-repeat -843px -30px;
    color: #f3f3f3;
    width: 32px;
    height: 32px;
    position: absolute;
    top: 20px;
    left: 20px;
    cursor: pointer;
  }
}
</style>
