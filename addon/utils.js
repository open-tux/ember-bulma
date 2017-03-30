import Ember from 'ember';

const {
  isArray,
  Logger
} = Ember;

/**
  Convert an array to space delimited String

  @method makeString
  @returns String
  @public
*/
export const makeString = (arr, unique = true) => {
  return isArray(arr) ? (unique ? arr.uniq() : arr).toString().replace(/,/g, ' ') : arr;
};

/**
  Camel case a string

  @method camelCase
  @returns String
  @public
*/
export const camelCase = (str) => {
  let arr = str.split('-');
  if (arr.length > 1) {
    return arr.map(camelCase).join('');
  }
  if ((/[a-z]/).test(str)) {
    let arr = str.split('');
    return `${arr[0].toUpperCase()}${arr.slice(1, arr.length)}`.replace(/,/g, '');
  } else {
    return str;
  }
};

/**
  * Deprecation messages util
  *
  * @method deprecations
  * @private
  */
export const deprecations = (items) => {
  let msg = {
    control: 'control=true is no longer supported. Please wrap the component in a bulma-control component, or with a container using the class .control',
    isTextarea: 'isTextarea=true is no longer supported. Please use bulma-textarea component instead',
    isLoading: 'isLoading=true is no longer supported. Please wrap the component in a bulma-control container with the isLoading flag, or any container using the classes .control and .is-loading',
    'key-up': 'key-up is no longer supported as an event. Please use oninput or some other native event handler instead.'
  };

  items.forEach((item) => {
    if (item.value && msg.hasOwnProperty(item.name)) {
      Logger.warn(msg[item.name]);
    }
  });
};
