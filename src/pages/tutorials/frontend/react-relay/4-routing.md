---
title: Routing
---

In this section, you'll learn how to use the [`react-router`](https://github.com/ReactTraining/react-router) library with Apollo to implement some nagivation functionality!


### Install Dependencies

First add the dependency to the app. Open a Terminal, navigate to your project directory and and type: 

```sh
yarn add react-router-dom
```

### Create a Header

Before you're moving on to configure the different routes for your application, you need to create a `Header` component that users can use to navigate to between the different parts of your app.

Create a new file in `src/components` and call it `Header.js`. Then paste the following code inside of it:

```js
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

class Header extends Component {

  render() {
    return (
      <div className='flex pa1 justify-between nowrap orange'>
        <div className='flex flex-fixed black'>
          <div className='fw7 mr1'>Hacker News</div>
          <Link to='/' className='ml1 no-underline black'>new</Link>
          <div className='ml1'>|</div>
          <Link to='/create' className='ml1 no-underline black'>submit</Link>
        </div>
      </div>
    )
  }

}

export default withRouter(Header)
```

This simply renders two `Link` components that users can use to navigate between the `LinkList` and the `CreateLink` components. 

> Don't get confused by the "other" `Link` component that is used here. The one that you're using in the `Header` has nothing to do with the `Link` component that you wrote before, they just happen to have the same name. This [`Link`](https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/api/Link.md) stems from the `react-router-dom` package and allows to navigate between routes inside of your application.

### Setup routes

You'll configure the different routes for the app in the project's root component: `App`. Open the correspdonding file `App.js` and update `render` to include the `Header` as well as `LinkList` and the `CreateLink` components in different routes:

```js
render() {
  return (
    <Switch>
      <Route exact path='/create' component={CreateLink}/>
      <Route exact path='/' component={LinkList}/>
    </Switch>
  )
}
```

For this code to work, you need to import the required dependencies of `react-router`. Add the following statement to the top of the file:

```
import Header from './Header'
import { Switch, Route } from 'react-router-dom'
```

Now you need to wrap the `App` with with `BrowserRouter` so that all child components of `App` will get access to the routing functionality.

Open `index.js` and add the following import statement to the top:

```js
import { BrowserRouter } from 'react-router-dom'
```

Now update `ReactDOM.render` and wrap the whole app with the `BrowserRouter`:

```js
ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>
  , document.getElementById('root')
)
```

That's it. If you run `yarn start`, you can now access two URLs. `http://localhost:3000/` will render `LinkList` and `http://localhost:3000/create` renders the `CreateLink` component you just wrote in the previous section.

![](http://imgur.com/I16JzwW.png)


### Implement navigation

To wrap up this section, you need to implement an automatic redirect from the `CreateLink` to `LinkList` after a mutation was performed.

Open `CreateLink.js` and update `_createLink` to look as follows:

```js
_createLink = async () => {
  const { description, url } = this.state
  await this.props.createLinkMutation({
    variables: {
      description,
      url
    }
  })
  this.props.history.push(`/`)
}
```

After the mutation was performed, `react-router-dom` will now navigate back to the `LinkList` component that's accessible on the root route: `/`.

