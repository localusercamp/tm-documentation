<template>
  <div>
    <splitpanes class="default-theme">
      <pane min-size="20" size="20" class="content-pane">
        <div class="content">
          <!-- <Spoiler hide tab plate>
            <template v-slot:heading>
              <div class="subheading ru clickable">Композиция</div>
            </template>
            <div class="ru extnd">
              <Swirl>Дублирование классов</Swirl>
              <Swirl>Типизация компонентов</Swirl>
            </div>
          </Spoiler> -->

          <Spoiler hide tab plate>
            <template v-slot:heading>
              <div class="subheading ru clickable">Чистые выдумки</div>
            </template>
            <div class="ru extnd">
              <Swirl
                :active="swirls.state_manager"
                @activated="activatedHandler('state_manager')"
              >
                StateManager
              </Swirl>
            </div>
          </Spoiler>

          <Spoiler hide tab plate>
            <template v-slot:heading>
              <div class="subheading ru clickable">Миксины</div>
            </template>
            <div class="ru extnd">
              <Swirl
                :active="swirls.stateful_component"
                @activated="activatedHandler('stateful_component')"
              >
                StatefulComponent
              </Swirl>
            </div>
          </Spoiler>
        </div>
      </pane>

      <pane min-size="70" max-size="80" size="80">
        <StateManagerExample v-if="swirls.state_manager"></StateManagerExample>
        <StatefulComponentExample v-if="swirls.stateful_component" @activated="activatedHandler"></StatefulComponentExample>
      </pane>
    </splitpanes>
  </div>
</template>

<script>
import { Splitpanes, Pane } from 'splitpanes';
import Spoiler from './Spoiler';
import Swirl from './Swirl';
import StateManagerExample from './examples/StateManagerExample';
import StatefulComponentExample from './examples/StatefulComponentExample';

export default {
  name: 'Frontend',

  components: {
    Splitpanes,
    Pane,
    Spoiler,
    Swirl,
    StateManagerExample,
    StatefulComponentExample,
  },

  data () {
    return {
      swirls: {
        stateful_component: false,
        state_manager: false,
      }
    }
  },

  methods: {
    activatedHandler(swirl) {
      for (const key in this.swirls) this.swirls[key] = false;
      this.swirls[swirl] = true;
    }
  }
}
</script>

<style>
  .plain > .hljs {
    border-radius: 0;
    padding-left: 10px;
  }
</style>
