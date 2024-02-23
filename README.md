# Understanding Redux (In-depth)

This is my Redux guide from Zero to (emerging) Hero:p

In this repository, I have maintained the flow in which I learned Redux, with minimal complexity. The goal is to understand the core idea of how [redux](https://www.npmjs.com/package/redux) works behind-the-scenes and how its integration with [react](https://www.npmjs.com/package/react) can be streamlined by using [react-redux](https://www.npmjs.com/package/react-redux) and [redux-toolkit](https://www.npmjs.com/package/@reduxjs/toolkit) libraries. I've implemented the classic example of a simple counter app in below chapters (branches):

- [vanilla](https://github.com/Kalpana98/redux-refresher/tree/vanilla) - No Redux, No React, Mocked a Custom Redux Store with Plain JS.
- [react+redux](https://github.com/Kalpana98/redux-refresher/tree/react+redux) - React (Babel) + Redux
- [react-redux](https://github.com/Kalpana98/redux-refresher/tree/react-redux) - React (Babel) + ReactRedux
- [redux-toolkit](https://github.com/Kalpana98/redux-refresher/tree/redux-toolkit) - React (Babel) + ReactRedux + RTK
- [async-thunk](https://github.com/Kalpana98/redux-refresher/tree/async-thunk) - React (Babel) + ReactRedux + RTK + AsyncThunk

### Setup

I've used the latest CDNs for all the libraries. No installation or setup is required to run this, **simply run with a Live Server**:)

### Todo

Build a real-world application that should leverage the complex parts of Redux.