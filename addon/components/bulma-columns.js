import Ember from 'ember';
import layout from '../templates/components/bulma-columns';

export default Ember.Component.extend({
  layout,
  classNames: ['columns'],
  classNameBindings: ['desktop:is-desktop', 'isDesktop:is-desktop', 'mobile:is-mobile', 'isMobile:is-mobile', 'isMultiline:is-multiline', 'isGapless:is-gapless']
});
