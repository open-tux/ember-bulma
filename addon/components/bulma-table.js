import SortFilterTable from 'ember-sort-filter-table/components/sort-filter-table';

export default SortFilterTable.extend({
  layoutName: 'components/sort-filter-table',
  classNames: ['table'],
  classNameBindings: ['isBordered:is-bordered', 'bordered:is-bordered', 'isStriped:is-striped', 'striped:is-striped', 'isNarrow:is-narrow', 'narrow:is-narrow']
});
