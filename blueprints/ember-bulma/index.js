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
        { name: 'bulma', target: '^0.0.26' }
      ]
    );
  }
};
