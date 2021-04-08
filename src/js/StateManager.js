export default class StateManager
{
  currentState = 0;

	constructor(states) {
  	let i = 0;
  	for (let state of states) {
      const real_i = i;
      const state_name  = this.generateValidPropName(state, false);
      const prop_name   = this.generateValidPropName(state);
      const getter_name = `is${prop_name}`;
      const switch_name = `switchTo${prop_name}`;

      Object.defineProperty(this, state_name, {
        get: () => real_i,
        ...StateManager.prop_not_enumerable(),
        ...StateManager.prop_not_configurable(),
        ...StateManager.prop_not_writable(),
      });

      Object.defineProperty(this, getter_name, {
      	get() {
      		return this[state_name] === this.currentState;
        },
        ...StateManager.prop_enumerable(),
        ...StateManager.prop_not_configurable(),
        ...StateManager.prop_not_writable(),
      });

      Object.defineProperty(this, switch_name, {
        value(passthrough) {
          this.fireEvent(`before${prop_name}`, passthrough);
          this.currentState = this[state_name];
          this.fireEvent(`after${prop_name}`, passthrough);
        },
        ...StateManager.prop_enumerable(),
        ...StateManager.prop_not_configurable(),
      });

      i++;
    }
    console.log(this);
  }

  addBeforeHook(state, fn) {
    this['before' + this.generateValidPropName(state)] = fn;
  }

  addAfterHook(state, fn) {
    this['after' + this.generateValidPropName(state)] = fn;
  }


  // ---------- Utils ----------
  fireEvent(event, passthrough) {
    if (!!this[event]) {
      this[event](passthrough);
    }
  }

  generateValidPropName(state_name, uc_first = true) {
    let result = state_name;
    while (true) {
    	let index = result.indexOf('_');
    	if (index === -1) break;
      let start = result.slice(0, index);
      let end   = result.slice(index + 1, result.length);
      end = this.ucFirst(end);
      result = start + end;
    }
    if (uc_first)
      result = this.ucFirst(result);
    return result;
  }

  ucFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static prop_not_writable = () => ({ set: () => { throw new StateManagerError('Trying to write a value into non-writable property!') } })
  static prop_configurable = () => ({configurable: true})
  static prop_enumerable   = () => ({enumerable: true})
  static prop_not_configurable = () => ({configurable: false})
  static prop_not_enumerable   = () => ({enumerable: false})
}

export class StateManagerError extends Error {
  name = 'StateManagerError';
}
