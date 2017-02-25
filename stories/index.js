/*globals module*/
import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Button from './Button';
import QuizResult from '../src/components/quiz/QuizResult';
import { WithNotes } from '@kadira/storybook-addon-notes';

storiesOf('Button', module)
	.add('with text', () => (
		<Button onClick={action('clicked')}>Hello Button</Button>
	))
	.add('with some emoji', () => (
		<Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
	));

storiesOf('Quiz Results', module)
	.addDecorator((story) => (
		<div className="container">
			<div className="col-xm-12 col-md-8">
				{story()}
			</div>
		</div>
	))
	.add('Score 0-1', () => (
		<WithNotes notes={'Score between 0 and 1'}>
			<QuizResult score={1} resetQuiz={action('button-click')}/>
		</WithNotes>
	))
	.add('Score 2-4', () => (
		<QuizResult score={3} resetQuiz={action('button-click')}/>
	))
	.add('Score 5', () => (
		<QuizResult score={5} resetQuiz={action('button-click')}/>
	));

storiesOf('Results combinations', module)
	.addDecorator((story) => (
		<div className="container">
			<div className="col-xm-12 col-md-8">
				{story()}
			</div>
		</div>
	))
  .addWithPropsCombinations(
    'Results',
    // provide your component
    QuizResult,
    {
      score: [0,1,2,3,4,5],
      resetQuiz: [action('clicked')],
    }
  );
