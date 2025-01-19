# React Native Asynchronous State Access Error

This repository demonstrates a common error in React Native applications: attempting to access state variables before they've been fully initialized due to asynchronous operations.  The example showcases an asynchronous data fetch, and the error arises when trying to render data before it's populated.

## Problem

The `bug.js` file shows a component that fetches data asynchronously.  However, the component attempts to render the data immediately after fetching starts, resulting in a `TypeError` because the state variable is still `null`.

## Solution

The `bugSolution.js` file provides a solution by using optional chaining (?.) or nullish coalescing (??) operators to safely access the data only after it's been fetched.  This prevents the error by handling cases where `data` might still be `null` or `undefined`.

## How to Reproduce

1. Clone this repository.
2. Navigate to the project directory.
3. Run `npx react-native run-android` or `npx react-native run-ios` (depending on your environment).
4. Observe the error in the `bug.js` example.
5. Switch to the `bugSolution.js` example and see how the error is resolved.