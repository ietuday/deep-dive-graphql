import { GraphQLServer } from "graphql-yoga";
/*
  SCALAR TYPE
    String
    Boolean
    Int
    Float
    ID
  
  

*/


//Type Definations 
const typeDefs = `
    type Query{
        greeting(name: String): String!
        me:User!
        post: Post! 
    }

    type User{
      id: ID!
      name: String!
      email: String!
      age: Int
    }

    type Post{
      id: ID!
      title: String!
      body: String!
      published: String!
    }
`

//Resolvers
const resolvers = {
    Query: {
      greeting(parents, args, ctx, info){
        console.log(parents);
        console.log(args);
        console.log(ctx);
        console.log(info);
        if(args.name) return `Hello ${args.name}`
        else return 'Hello'
      },
      me(){
        return {
          id: '12308',
          name: 'Uday',
          email: 'udayaditya@gmail.com',
          age: 28
        }
      },
      post(){
        return{
          id: '092',
          title: 'GRAPHQL AMAZING',
          body: '',
          published: false
        }
      }
    }
}

const server = new GraphQLServer({
    typeDefs,
    resolvers
})

server.start(() => {
    console.log("Graphql Server is UP");
})