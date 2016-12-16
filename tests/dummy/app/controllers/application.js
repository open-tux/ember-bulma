import Ember from 'ember';
import computed from 'ember-computed-decorators';

const {
  Controller,
  get,
  set,
  A,
  run
} = Ember;

export default Controller.extend({

  /**
    Establish when subnav should be visible
    // REVIEW composable helpers

    @property demoSubTabs
    @returns Array
    @public
  */
  @computed('currentPath', 'model.demoTabs')
  demoSubTabs(currentPath, tabs) {
    let filteredByCurrentPath;
    let allTabs = A(tabs);

    allTabs.filterBy('subnav').map((tab) => {
      let filtered = A(get(tab, 'subnav')).filterBy('route', currentPath);
      if (filtered.length) {
        filteredByCurrentPath = get(tab, 'subnav');
        run.schedule('afterRender', function() {
          set(tab, 'isActive', true);
        });
      }
    });
    return filteredByCurrentPath ? filteredByCurrentPath.sortBy('name') : [];
  }
});
