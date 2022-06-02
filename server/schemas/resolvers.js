
const { Matchup, Tech } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    matches: async () => {
      // Get and return all documents from the matches collection
      return await Matchup.find({});
    },
    match: async (parent, args) => {
      // Use the parameter to find the matching match in the collection
      return await Matchup.findById(args.id);
    },
    allTech:  async () => {
      // Get and return all documents from the matches collection
      return await Tech.find({});
    },
  },
  Mutation: {
    addMatchup: async (parent, {tech1, tech2}) => {
          const matchup = await Matchup.create({tech1, tech2});
          return matchup;
        },
    updateMatchupVote: async (parent, { id, whichTech }) => {
      // Find and update the matching class using the destructured args
      return await Matchup.findOneAndUpdate(
        { _id: id }, 
        { $inc: { [`tech${whichTech}_votes`]: 1 } },
        // Return the newly updated object instead of the original
        { new: true }
      );
    }
  }
};
  
module.exports = resolvers;
