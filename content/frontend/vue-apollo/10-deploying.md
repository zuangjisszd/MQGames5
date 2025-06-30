---
title: Deploying
pageTitle: "Deploying a Vue + Apollo app with Surge.sh"
description: "Learn how to deploy an application built with VueJS and Graphcool through Surge.sh."
question: ""
answers: []
correctAnswer: 3
---

Finally, let's learn how we can easily deploy VueJS applications with [Surge.sh](http://surge.sh/).


## Installing and running Surge

Let's first install Surge globally.

<Instruction>

Open up a terminal window and run:

```bash
npm install -g surge
```

</Instruction>


Now you need to build your application for production.

<Instruction>

Open up a terminal and navigate to your project directory and run the following:

```bash
npm run build
```

</Instruction>


This command will build your app for production and output the results into the `/dist` directory.

Finally, you need to run Surge within this newly created `/dist` directory.

<Instruction>

Open up a terminal and navigate to `/dist` and run the following:

```bash
surge
```

</Instruction>

You may be asked to login or create an account. After you do so, you will be presented with a URL for your deployed app. Paste this URL into your browser and you will see your app up and running. Share this link with your friends to show them the sweet new app you just created through HowToGraphQL!
