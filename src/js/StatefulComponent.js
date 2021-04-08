import StateManager, {StateManagerError} from './StateManager';

export default function StatefulComponent (states) {
  if (!Array.isArray(states)) throw new StateManagerError('StatefulComponent accepts only array as parameter');
  if (states.some((state) => typeof state !== 'string'))
    throw new StateManagerError('StateManager state must be a string');

  return {
    data() {
      return {
        state: new StateManager(states)
      }
    },

    beforeMount() {
      if (!!this.stateHooks) this.stateHooks();
    }
  }
}
