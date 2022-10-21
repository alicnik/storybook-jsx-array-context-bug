# Storybook Bug Repro

This is a minimum reproduction of a Storybook bug where an array of JSX elements causes Storybook to crash in the browser.

There are two stories:

`FooComponent`

The story for this component has a Context provider with a value of an array of JSX elements. When you try to click on the control for the prop `lightText`, or click anywhere else in the Storybook UI, the app stops running.

`BarComponent`

This is exactly the same as the `FooComponent` except that the story has a Context provider with a value of a JSX exlement (not in an array). It works without issue.
