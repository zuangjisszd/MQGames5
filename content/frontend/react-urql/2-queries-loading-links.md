---
title: "Queries: Loading Links"
pageTitle: "Fetching Data using GraphQL Queries with React & urql Tutorial"
description: "Learn how you can use GraphQL queries with urql to load data from a server and display it in your React components."
question: What's the declarative way for running GraphQL queries with React & urql?
answers: ["Using a higher-order component called 'graphql'", "Using the 'useQuery' hook", "Using 'fetch' and putting the query in the body of the request", "Using XMLHTTPRequest and putting the query in the body of the request"]
correctAnswer: 1
videoId: ""
duration: 0		
videoAuthor: ""
---

### Preparing the React components

The first piece of functionality you'll implement in the app is loading and displaying a list of `Link` elements. You'll walk up our way in the React component hierarchy and start with the component that'll render a single link.

<Instruction>

Create a new file called `Link.js` in the `components` directory and add the following code:

```js(path=".../hackernews-react-urql/src/components/Link.js")
import React from 'react'

const Link = ({ link }) => (
  <div>
    <div>
      {link.description} ({link.url})
    </div>
  </div>
)

export default Link
```

</Instruction>

This is a simple React component that expects a `link` in its `props` and renders the link's `description` and `url`. Easy as pie! 🍰

Next, you'll implement the component that renders a list of links.

<Instruction>

Again, in the `components` directory, go ahead and create a new file called `LinkList.js`. Then add the following code:

```js(path=".../hackernews-react-urql/src/components/LinkList.js")
import React from 'react'
import Link from './Link'

const linksToRender = [
  {
    id: '1',
    description: 'Prisma turns your database into a GraphQL API 😎',
    url: 'https://www.prismagraphql.com',
  },
  {
    id: '2',
    description: 'The best GraphQL client',
    url: 'https://formidable.com/open-source/urql/',
  },
]

const LinkList = () => (
  <div>
    {linksToRender.map(link => <Link key={link.id} link={link} />)}
  </div>
)

export default LinkList
```

</Instruction>

Here, you're using local mock data for now to make sure the component setup works. You'll soon replace this with some actual data loaded from the server - patience, young Padawan!

<Instruction>

To complete the setup, open `App.js` and replace the current contents with the following:

```js(path=".../hackernews-react-urql/src/components/App.js")
import React, { Component } from 'react'
import LinkList from './LinkList'

const App = () => <LinkList />

export default App
```

</Instruction>

Run the app to check if everything works so far! The app should now display the two links from the `linksToRender` array:

![](https://imgur.com/VJzRyjq.png)

### Writing the GraphQL query

Next you'll load the actual links that are stored in the database. The first thing you need to do for that is define the GraphQL query you want to send to the API.

Here is what it looks like:

```graphql
{
  feed {
    links {
      id
      createdAt
      description
      url
    }
  }
}
```

You could now simply execute this query in a [Playground](https://www.prisma.io/docs/graphql-ecosystem/graphql-playground/overview-chaha125ho) (against the _application schema_) and retrieve the results from your GraphQL server. But how can you use it inside your JavaScript code?

### Queries with urql

When using urql, you've got two several of sending queries to the server. The React bindings for urql call methods on the Client that return a "stream" of results. These methods are called `executeQuery`, `executeMutation`, and `executeSubscription`. The returned stream of results is implemented using the [Wonka library, which you can read more about on its site](https://wonka.kitten.sh/).

A practical example of using these is a little longer than using the React bindings, but would look as follows:

```js(nocopy)
import { createRequest } from 'urql
import { pipe, subscribe } from 'wonka'

const request = createRequest(gql`
  {
    feed {
      links {
        id
      }
    }
  }
`, {
  // ... variables
});

pipe(
  client.executeQuery(request),
  subscribe(response => {
    console.log(response.data.allLinks);
  })
);
```

> **Note**: `urql` is planned expose helper methods on its Client that internally call `useRequest` for you eventually, but since it is primarily meant to be used with its React bindings, these methods haven't been implemented yet. Stay tuned!

The more declarative way when using React however is to use [`urql`'s hook APIs](https://formidable.com/open-source/urql/docs/api/#react-components-and-hooks) to manage your GraphQL data just using components.

Depending on whether you're using queries, mutations, or subscriptions there are three corresponding hooks: `useQuery`, `useMutation`, and `useSubscription`. All three also have corresponding components with render prop APIs.

When it comes to data fetching, you will need to pass your GraphQL query as an option to `useQuery` with some optional variables. The hook will internally tell the client to execute your query and the cache will also be able to proactively send updates to your components, when the data changes or the cached data is invalidated.

In general, the process for you to add some data fetching logic will be very similar every time:

1. write the query as a JavaScript constant using the `gql` parser function
1. use the `useQuery` hook passing the GraphQL query and variables as `{ query, variables }`
1. access the query results that the hook returns, `const [result] = useQuery(...)`

<Instruction>

Open up `LinkList.js` and add the query to the top of the file:

```js(path=".../hackernews-react-urql/src/components/LinkList.js")
const FEED_QUERY = gql`
  {
    feed {
      links {
        id
        createdAt
        url
        description
      }
    }
  }
`
```

</Instruction>
<Instruction>

And replace the current `LinkList` component with the following:

```js(path=".../hackernews-react-urql/src/components/LinkList.js")
const LinkList = () => {
  useQuery({ query: FEED_QUERY });

  return (
    <div>
        {linksToRender.map(link => <Link key={link.id} link={link} />)}
    </div>
  );
};
```

</Instruction>

What's going on here?

1. First, you create the JavaScript constant called `FEED_QUERY` that stores the query. The `gql` function is used to parse the plain string that contains the GraphQL code (if you're unfamiliar with the backtick-syntax, you can read up on JavaScript's [tagged template literals](http://wesbos.com/tagged-template-literals/)).
1. Finally, you add the `useQuery` hook to the component, passing `FEED_QUERY` to the `query` option.

> **Note**: Notice that we're still returning `linksToRender` as a function result, as we haven't written any code yet to use the result from `useQuery`.

<Instruction>

For this code to work, you also need to import the corresponding dependencies. Add the following two lines to the top of the file, right below the other import statements:

```js(path=".../hackernews-react-urql/src/components/LinkList.js")
import { useQuery } from 'urql'
import gql from 'graphql-tag'
```

</Instruction>

Awesome, that's all your data fetching code. If you check your app now you can see that a request is sent to your GraphQL API. But as you can see, `LinkList` not using the server data yet, so let's make it happen 🤩

You can now finally remove the mock data and render actual links that are fetched from the server.

<Instruction>

Still in `LinkList.js`, update the `LinkList` component as follows:

```js{2-3,4-5,7}(path=".../hackernews-react-urql/src/components/LinkList.js")
const LinkList = () => {
  const [result] = useQuery({ query: FEED_QUERY })
  const { data, fetching, error } = result
  
  if (fetching) return <div>Fetching</div>
  if (error) return <div>Error</div>
  
  const linksToRender = data.feed.links

  return (
    <div>
      {linksToRender.map(link => <Link key={link.id} link={link} />)}
    </div>
  )
}
```

</Instruction>

Let's walk through what's happening in this code. As expected, `useQuery` returns an array with the result as the first item. It returns this array because the second value of any hook that `urql` exposes is always an `execute` function that can be used to refetch queries.

The properties of the result tell us more about the result of your query and pass you the data that it has received from your GraphQL API:

1. `fetching`: Is `true` as long as the request is still ongoing and the response hasn't been received.
1. `error`: In case the request fails, this field will contain a `CombinedError` that tells you what exactly went wrong.
1. `data`: This is the actual data that was received from the server. It has the `links` property from our query which represents a list of `Link` elements.

> If you'd like to learn more about the second element in the hooks returned array, `executeQuery`, then [read more about it on the urql docs](https://formidable.com/open-source/urql/docs/getting-started/#refetching-data).

### Add a React Suspense boundary

Usually this would be it, but since we've added the `@urql/exchange-suspense` extension, we also need to set up a separate loading boundary.

With suspense, when you mount a component that uses `useQuery`, instead of the component mounting and the result fetching, React suspends and the query loads in the background. This means that you will never see `result.fetching === true` which makes your local component logic a lot simpler!

When a component suspends it can be wrapped with `<React.Suspense>` which accepts a `fallback` prop with a React element that is rendered whenever anything inside the suspense element suspends.

Let's create a fetching component that adds a small loading screen whenever one of your queries is loading:

<Instruction>

Create a new file called `LoadingBoundary.js` in the `components` directory and add the following code:

```js(path=".../hackernews-react-urql/src/components/LoadingBoundary.js")
import React from 'react'

const LoadingBoundary = ({ children }) => {
  const placeholder = <div>Fetching</div>
  return <React.Suspense fallback={placeholder}>{children}</React.Suspense>
}

export default LoadingBoundary
```

</Instruction>

To actually use this boundary let's add it to the `App` component, so that any `useQuery`
inside `App` or a component inside it renders a consistent loading screen:

<Instruction>

In `App.js`, update the `App` component as follows:

```js(path=".../hackernews-react-urql/src/components/App.js")
import LoadingBoundary from './LoadingBoundary'

const App = () => <LoadingBoundary><LinkList /></LoadingBoundary>

export default App
```

</Instruction>

Lastly you can remove the `if (fetching)` logic from the `LinkList` component. This is optional and your component will still work _with_ it, although it'll never be truthy.

That's it! You should see the exact same screen as before! 🤩
And to summarize, in this section you've:

- created a `Link` and `LinkList`
- added a `useQuery` hook to load some feed data from your GraphQL API
- added a loading screen to the `App`

> **Note**: If the browser on `http://localhost:4000` only says error and is empty otherwise, you probably forgot to have your server running. Note that for the app to work the server needs to run as well - so you have two running processes in your terminal: One for the server and one for the React app. To start the server, navigate into the `server` directory and run `yarn start`.
