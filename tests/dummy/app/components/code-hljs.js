import Ember from 'ember';
import computed, { readOnly } from 'ember-computed-decorators';

const { run } = Ember;
const { schedule } = run;

export default Ember.Component.extend({
  tagName: 'pre',
  classNames: ['highlight-block'],
  /**

  */
  language: '',

  /**

  */
  _range(start, count) {
    return Array.apply(0, new Array(count))
      .map(function (element, index) {
        return index + start;
      });
  },

  /**

  */
  withLineNumbers: true,

  /**

  */
  lineNumbers: Ember.A([]),

  /**

  */
  _highlight() {
    schedule('afterRender', () => {
      let code = this.$().find('.hljs');
      if (code) {
        this.set('lineNumbers', code ? this._range(1, code.text().split('\n').length + 1) : []);
        console.log(this.get('lineNumbers'));
        hljs.highlightBlock(code[0]);
      }

    });
  },


  didInitAttrs() {
    this._highlight();
  }
});
