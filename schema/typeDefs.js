const { gql } = require('apollo-server');

const typeDefs = gql`
  type Character {
    id: ID!
    name: String!
    class: String!
    endurance: Int!
    strength: Int!
    intelligence: Int!
    agility: Int!
    specialAbility: String!
  }

  type Query {
    characters: [Character]
    character(id: ID!): Character
  }

  type Mutation {
    createCharacter(name: String!): Character
    deleteCharacter(id: ID!): Character
    updateCharacter(id: ID!, endurance: Int, strength: Int, intelligence: Int, agility: Int): Character
  }
`;

module.exports = typeDefs;
