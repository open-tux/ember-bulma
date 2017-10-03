import Ember from 'ember';
import layout from '../templates/components/bulma-control';
import { _helpers } from '../constants';

const {
  Component
} = Ember;

export default Component.extend({
  layout,
  tagName: 'p',
  classNames: ['control'],
  classNameBindings: [
    'isLoading:is-loading',
    'isDisabled:is-disabled',
    'disabled:is-disabled',
    'loading:is-loading',
    'hasAddons:has-addons',
    'hasAddonsCentered:has-addons-centered',
    'hasAddonsRight:has-addons-right',
    'isGroup:is-group',
    'isExpanded:is-expanded',
    'isHorizontal:is-horizontal'
  ].concat(_helpers)
});
