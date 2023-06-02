import { publish } from 'gh-pages';
import { exit } from 'process';

publish('dist', (err) => {
  if (err) {
    console.error('Deploy Error!!!');
    exit(1);
  } else {
    console.log('Deployed!!!');
    exit(0);
  }
});
