# Documentation for Craft Monkey

# Next.js

It does the tooling for you under the hood like code splitting.

NextJs by default wraps your application in a app component.

1. Persisting layout between page changes
2. Keeping state when navigating pages
3. Custom error handling using componentDidCatch
4. Inject additional data into pages

# CSS in React

I have used CSS styled components for this website. styled-components is the result of wondering how we could enhance CSS for styling React component systems.

styled-components utilises tagged template literals to style your components.

It removes the mapping between components and styles. This means that when you're defining your styles, you're actually creating a normal React component, that has your styles attached to it.

# GraphQL

GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.

Core theme

1. Single endpoint to hit unlike REST endpoints.

```

query{
    items{
        id
        title
    }
    users{
        name
    }
}
```

In the above example, we see that we can get many resources in a single request. Apps using GraphQL are fast and stable because they control the data they get, not the server.

# Prisma

Prisma offers many features enabling you to quickly build high-performance GraphQL servers. Next to its powerful query engine and API, Prisma especially shines when it comes to developer experience.

```
npm i -g prisma

prisma login

prisma init

prisma deploy --help

prisma deploy --env-file variables.env
```
