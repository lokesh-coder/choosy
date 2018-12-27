const ghpages = require('gh-pages');
ghpages.publish(
  './dist/choosy-app',
  {
    repo: 'https://' + process.env.GH_TOKEN + '@github.com/lokesh-coder/choosy.git',
    add: true
  },
  function(err) {
    if (err) {
      console.log('Error occured during gh pages push', err);
    } else {
      console.log('Pushed to ghpages!');
    }
  }
);
