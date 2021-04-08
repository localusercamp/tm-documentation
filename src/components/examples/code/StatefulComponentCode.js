const js =
`import {StatefulComponent} from '../../js/StatefulComponent';

const STATE = {
  FORM1: 'form1',
  FORM2: 'form2',
};

export default {

  mixins: [
    StatefulComponent([STATE.FORM1, STATE.FORM2]),
  ],

}`;

export {
  js,
}
