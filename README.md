


# CraftMonkey-Alpha-1
CraftMonkey is an online apparel store using React and GraphQl and is in it's alpha version.
Based on Courses by Wes Bos: https://advancedreact.com/ and Andrew Mead: https://www.udemy.com/graphql-bootcamp/


Project Snapshots:

# Home Page
![HomePage1](https://user-images.githubusercontent.com/15992276/56465293-e3ebc800-63c8-11e9-8ae5-71028ab402b0.JPG)
![HomePage2](https://user-images.githubusercontent.com/15992276/56465294-e3ebc800-63c8-11e9-8e7b-df308737fbc2.JPG)


# Customize your Orders
 ![Customize](https://user-images.githubusercontent.com/15992276/56465292-e3ebc800-63c8-11e9-8c20-36ec8b0795a4.JPG)
 
 
# Add to Cart

![AddToCart](https://user-images.githubusercontent.com/15992276/56465220-85721a00-63c7-11e9-9006-7ad7a9fb0058.JPG)

# Payment Setup with Stripe

![PaymentGateway](https://user-images.githubusercontent.com/15992276/56465225-860ab080-63c7-11e9-832d-905f8a288375.JPG)


# Your Orders History Page
![Orders](https://user-images.githubusercontent.com/15992276/56465376-16e28b80-63ca-11e9-8ab4-ff3beb339a20.JPG)


# Search For Products 
![Search](https://user-images.githubusercontent.com/15992276/56465226-860ab080-63c7-11e9-8dd5-612eddccb523.png)



# User Authentication

![Signup](https://user-images.githubusercontent.com/15992276/56465227-860ab080-63c7-11e9-8d22-a8a893de9fa1.JPG)










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

 Why use GraphQL?

1. Open Source and Created by Facebook
2. Gives clients the power to describe what
   data they want
3. Strongly typed
4. Enables excellent developer tooling and experiences
5. Can sit in front of any existing API because it's just
   a query languages
6. Ecosystem is fantastic

# GraphQL vs REST

1. GraphQL has only one URL. It does not need a resource+verb combo..
2. In REST, the shape and size combo is determined by the server. In GraphQL, it is determined by the request

  GraphQL APIs are organized in terms of types and fields

```javascript
  Type Query{
      user:User
  }

  Type User{
      name:String
      age:Int
      friends:[User]
  }

```

# A simple example

```javascript
  type Cat{
      name:String
  }


  type Query{
      myCat:Cat
  }

  schema{
      query:Query
  }

resolvers:{
    Query:{
        myCat(){
            return {name:'Garfield'}
        }
    }
}

# In the GraphQL Playground,
  {
      myCat{
          name
      }
  }

Output:
"data":{
    "myCat":{
        "name":"Garfield"
    }
}

```

A schema defines the stucture for the client app and resolvers
name match the schema that actually do the work of querying the database.

A DB Schema is for keeping data consistent when entering our data
GraphQL schema is for defining what resources are available for querying, how they
relate and how you can query them.

GraphQL Schema sits in front of the DB Query. It validates incoming request queryies.

# Schema Definition Language

Scalar Types are built in primitive
String, Int, Float, Boolean, ID

Object Types are custom shapes with fields

# Query and Mutation Types

Query type descibes the different queries your API is capable of
A query operation is just a name with possible arguments that evenutually return a type

```javascript
type Query{
    myCat:Cat
    cats:[Cat]
    hello:String
}

```

Mutation is the the same thing with the intent of mutation the DB

```javascript
type Mutation{
    newCat(input:Input):NewCat!
}
```

# Resolvers

Like controllers, but instead types all the way down
They are responsible for retrieving data.

# graphql-yoga

(https://github.com/prismagraphql/graphql-yoga)

# Scalar Types

1. String
2. Boolean
3. int
4. Float
5. ID (Used to represent unique idenntifiers)

# Operations in graphQL

```javascript
typeDefs=`
type Query{
greeting(name:String!):String!
}
  `
const resolovers={
    Query: {
        greeting (args){
            if (args.name){
                return `Hello, ${args.name}!`
            }
        }
    }
}


```

# Input type

Passing object as properties as input values. We define an input type and reference it in the argument list.

# Subscriptions

Subscriptions allows the clients to subscribe to data changes in the server.

graphql-subscription library provides us with the pubsub utility to allow communication.

```javascript
export const pubsub=new PubSub();

```

1.  Set up a subscription
2.  Publish data to it

pubsub.asyncIterator() sets up a channel and pubsub.publish allows the subscribers to listen for updates.

# Prisma

ORM stands for Object Relational Mapping like Mongoose which connects Nodejs to MongoDB. We can model our data and setup validations and migrate our data over time with ORM's.

Prisma is a GraphQL ORM which allows use to work on any database.

The server serves like a thin layer between the client and the database.

npm i prisma
prisma init

Prisma generates three files

1. datamodel-prisma
2. docker-compose.yml
3. prisma.yml

# Integrating Node with GraphQL

GraphQL can very well interact with Postgres but we want to use Node as a thin layer between GraphQL and Postgres and flesh out the code for the
communication.

# Prisma Bindings

It gives us bindings for Nodejs. It gives us a set of Nodejs methods which we can use to interact with Prisma and GraphQL.

# GraphQL-CLI

Gives us a set of commands for performing common tasks. Here, I need to fetch a schema for an API.

```
graphql get-schema

# "get-schema": "graphql get-schema -p prisma --dotenv config/dev.env"

```

# prisma.exists

Prisma.exists allows us to check if the data exists in the database before querying. It is pretty powerful as it allows assertions.

    ```javascript
    prisma.exists.Comment({
        id:"......",
        author:{
            id:"....."
        }
    }).then(exists=>{
        console.log(exists);
    })

    ```

# @relation Directive

This is used when Types are linked to other types. We can customize what happens to a given record when the other record gets removed.

default behavior : SET_NULL
override default behavior: CASCADE

In the example below, I want to remove the posts and comments when the user is deleted hene the relation directive
is set to CASCADE.

When I delete a Post, I don't want the Author of the post to be deleted from the User's table and hence I used SET_NULL.

```javascript

type User {
	id: ID! @unique
	name: String!
	email: String! @unique
	posts: [Post!]! @relation(name: "PostToUser", onDelete: CASCADE)
	comments: [Comment!]! @relation(name: "CommentToUser", onDelete: CASCADE)
}

type Post {
	id: ID! @unique
	title: String!
	body: String!
	published: Boolean!
	author: User! @relation(name: "PostToUser", onDelete: SET_NULL)
	comments: [Comment!]! @relation(name: "CommentToPost", onDelete: CASCADE)
}
```


```javascript

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

```javascript
npm i -g prisma

prisma login

prisma init

prisma deploy --help

prisma deploy --env-file variables.env
```
