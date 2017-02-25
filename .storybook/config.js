/*global require module*/
import { configure, setAddon } from '@kadira/storybook';
import withPropsCombinations from 'react-storybook-addon-props-combinations'

setAddon(withPropsCombinations)

function loadStories() {
  require('../stories');
}

configure(loadStories, module);
