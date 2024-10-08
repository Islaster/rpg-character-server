const { v4: uuidv4 } = require('uuid');
const characters = require('../data/characters');
const { randomStat, randomClass } = require('../utils/helpers');

const characterResolvers = {
    Query: {
        characters: () => characters,
        character: (_, { id }) => characters.find(character => character.id === id),
    },
    Mutation: {
        createCharacter: (_, { name }) => {
            const newCharacter = {
                id: uuidv4(),
                name,
                class: randomClass(),
                endurance: randomStat(),
                strength: randomStat(),
                intelligence: randomStat(),
                agility: randomStat(),
                specialAbility: "Randomized Special Ability" // Placeholder
            };
            characters.push(newCharacter);
            return newCharacter;
        },
        deleteCharacter: (_, { id }) => {
            const index = characters.findIndex(character => character.id === id);
            if (index !== -1) {
                return characters.splice(index, 1)[0];
            }
            return null;
        },
        updateCharacter: (_, { id, endurance, strength, intelligence, agility }) => {
            const character = characters.find(character => character.id === id);
            if (character) {
                character.endurance = endurance !== undefined ? endurance : character.endurance;
                character.strength = strength !== undefined ? strength : character.strength;
                character.intelligence = intelligence !== undefined ? intelligence : character.intelligence;
                character.agility = agility !== undefined ? agility : character.agility;
            }
            return character;
        },
    },
};

module.exports = characterResolvers;
