import Ember from 'ember';

const {
  isArray,
  A
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
  if(arr.length > 1) {
    return arr.map(camelCase).join('');
  }
  if ((/[a-z]/).test(str)) {
    let arr = str.split('');
    return `${arr[0].toUpperCase()}${arr.slice(1, arr.length)}`.replace(/,/g, '');
  } else {
    return str;
  }
};

const blacklist = A(['tagName', 'removeChild']);

export const nativeAttrs  = {
  /**
    * Iterates through the prototype properties of an html element (while considering blacklisted items)
    *
    * @method attrsFor
    * @private
    */
  attrsFor: (htmlElement) => {
    let a = [];
    for (var attr in htmlElement) {
      if (!blacklist.contains(attr)) {
        a.push(attr);
      }
    };
    return a;
  },

  /**
    * A list of all of the attributes of a native textarea
    *
    * @property textarea
    * @private
    */
  get textarea() {
    return this.attrsFor(window.HTMLTextAreaElement.prototype);
  },

  /**
    * A list of all of the attributes of a native textarea
    *
    * @property input
    * @private
    */
  get input() {
    return this.attrsFor(window.HTMLInputElement.prototype);
  }
}

/**
  * Deprecation messages util
  *
  * @method deprecations
  * @private
  */
export const deprecations = (items) => {
  let msg = {
    control: `control=true is no longer supported. Please wrap the component in a bulma-control component, or with a container using the class .control`,
    isTextarea: `isTextarea=true is no longer supported. Please use bulma-textarea component instead`,
    isLoading: `isLoading=true is no longer supported. Please wrap the component in a bulma-control container with the isLoading flag, or any container using the classes .control and .is-loading`,
    'key-up': `key-up is no longer supported as an event. Please use oninput or some other native event handler instead.`
  };

  items.forEach((item) => {
    if (item.value && msg.hasOwnProperty(item.name)) {
      console.warn(msg[item.name]);
    }
  });
}
