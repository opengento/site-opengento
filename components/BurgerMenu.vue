<template>
  <button
    class="menu relative h-8 w-8 p-0 m-0 border-0 appearance-none text-white"
    :class="{active : menuOpened}"
    @click="toggleMenu"
  >
    <svg class="block absolute -top-1.5 -left-3 w-16 h-12 stroke-current stroke-[4px] fill-[none]" viewBox="0 0 64 48">
      <path d="M19,15 L45,15 C70,15 58,-2 49.0177126,7 L19,37" />
      <path d="M19,24 L45,24 C61.2371586,24 57,49 41,33 L32,24" />
      <path d="M45,33 L19,33 C-8,33 6,-2 22,14 L45,37" />
    </svg>
  </button>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'BurgerMenu',
  computed:
    mapState({
      menuOpened: state => state.menuOpened
    }),
  methods: {
    ...mapActions([
      'toggleMenu'
    ])
  }
}
</script>

<style lang="scss">
    .menu {
        path {
            transition: stroke-dasharray var(--duration, .85s) var(--easing, ease) var(--delay, 0s), stroke-dashoffset var(--duration, .85s) var(--easing, ease) var(--delay, 0s);
            stroke-dasharray: var(--array-1, 26px) var(--array-2, 100px);
            stroke-dashoffset: var(--offset, 126px);
            transform: translateZ(0);

            &:nth-child(2) {
                --duration: .7s;
                --easing: ease-in;
                --offset: 100px;
                --array-2: 74px;
            }

            &:nth-child(3) {
                --offset: 133px;
                --array-2: 107px;
            }
        }

        &.active {

            path {
                --offset: 57px;
                &:nth-child(1),
                &:nth-child(3) {
                    --delay: .15s;
                    --easing: cubic-bezier(.2, .4, .2, 1.1);
                }
                &:nth-child(2) {
                    --duration: .4s;
                    --offset: 2px;
                    --array-1: 1px;
                }
                &:nth-child(3) {
                    --offset: 58px;
                }
            }
        }
    }
</style>
