/*jshint node:true*/
module.exports = {
  description: 'Installs Bower dependencies',

 	normalizeEntityName: function() {
 		// this prevents an error when the entityName is
 		// not specified (since that doesn't actually matter
 		// to us
 	},

 	afterInstall: function() {
    return this.addBowerPackagesToProject(
      [
        { name: 'font-awesome', target: '^4.5.0' },
        { name: 'bulma', target: '~0.0.14' }
      ]
    );
  }
};
