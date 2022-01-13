---
title: Introduction
question: Can you choose the first answer to this question?
answers: ["That sounds too easy", "I think this question is fake", "When are the real questions ready", "No"]
correctAnswer: 0
description: "In this chapter we discuss the basics."
---

## Introduction

[GraphQL](http://www.graphql.org/) is a new API standard that provides a more efficient, powerful and flexible alternative to REST. It was developed and [open-sourced by Facebook](https://facebook.github.io/react/blog/2015/02/20/introducing-relay-and-graphql.html) and is now maintained by a large community of companies and individuals from all over the world.

> APIs have become ubiquitous components of software infrastructures. In short, an **API** defines how a **client** can load data from a **server**. 

Most applications today have the need to fetch data from a backend where that data is stored in a database. It’s the responsibility of the API to provide an interface to the stored data that fits an application’s needs.

GraphQL is often confused with being a database technology. This is a misconception, GraphQL is a *query language* for APIs - not databases. In that sense it's database agnostic and effectively can be used in any context where an API is used.

[REST](https://en.wikipedia.org/wiki/Representational_state_transfer) has been a popular way to expose data from a server. When the concept of REST was developed, client applications were relatively simple and the development pace wasn’t nearly where it is today. REST thus a was a good fit for many applications. However, the API landscape has radically changed over the last couple of years. In particular, there are three factors that have been challenging the way how APIs are designed:

* increased mobile usage creates need for efficient data loading
* variety of different frontend frameworks and platforms on the client-side make for heterogeneous API access
* fast development speed and expectation to rapidly deliver features on the frontend

Increased mobile usage, low-powered devices and sloppy networks were the initial reasons why Facebook developed GraphQL. GraphQL minimizes the amount of data that needs to be transferred over the network and thus majorly improves applications operating under these conditions.

The heterogeneous landscape of frontend frameworks and platforms that run client applications makes it difficult to build and maintain one API that would fit the requirements of all. With GraphQL, each client can access precisely the data it needs.

Continuous deployment has become a standard for many companies, rapid iterations and frequent product updates are indispensable. With REST APIs, the way how data is exposed by the server often needs to be modified to account for specific requirements and design changes on the client-side. This hinders fast development practices and product iterations.

### History, Context & Adoption

Facebook started working on GraphQL already in 2012 in the context of their native mobile apps. It was developed out of the need to make data transfer more efficient, especially with respect to low-powered devices and bad network conditions. 

The first time Facebook publicly spoke about GraphQL was at [React.js Conf 2015](https://www.youtube.com/watch?v=9sc8Pyc51uU) and shortly after announced their [plans to open source](https://facebook.github.io/react/blog/2015/05/01/graphql-introduction.html) it. Because Facebook always used to speak about GraphQL in the context of [React](https://facebook.github.io/react/), it took a while for non-React developers to understand that GraphQL was by no means a technology that was limited to usage with React. 

In fact, GraphQL is a technology that can be used everywhere where a client communicates with an API. Interestingly, other companies like [Netflix](https://medium.com/netflix-techblog) or [Coursera](https://building.coursera.org/) were working on comparable ideas to make API interactions more efficient. Coursera envisioned a similar technology to let a client specify its data requirements and Netflix even open-sourced their solution called [Falcor](https://github.com/Netflix/falcor). After GraphQL was open-sourced, Coursera completely cancelled their own efforts and hopped on the GraphQL train.

Today, GraphQL is used in production by [lots of different companies](http://graphql.org/users/) such as GitHub, Twitter, Yelp or Shopify - to name only a few. There are entire conferences dedicated to GraphQL such as [GraphQL Summit](https://summit.graphql.com/) or [GraphQL Europe](https://graphql-europe.org/) and more resources like the [GraphQL Radio](https://graphqlradio.com/) podcast and [GraphQL Weekly](https://graphqlweekly.com/) newsletter. 

![](http://imgur.com/J8gweUb.png)

