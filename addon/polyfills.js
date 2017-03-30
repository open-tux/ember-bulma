/**
  Extract only the values from an object (placeholder for Object.values)
  https://github.com/tc39/proposal-object-values-entries/blob/master/polyfill.js

  @method objectValues
  @public
  @params
    O: Object
*/
Object.values = (O) => {
  let reduce       = Function.bind.call(Function.call, Array.prototype.reduce);
  let isEnumerable = Function.bind.call(Function.call, Object.prototype.propertyIsEnumerable);
  let concat       = Function.bind.call(Function.call, Array.prototype.concat);
  let [keys]       = Object;

  return reduce(keys(O), (v, k) => concat(v, typeof k === 'string' && isEnumerable(O, k) ? [O[k]] : []), []);
};
