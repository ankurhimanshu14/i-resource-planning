const { GraphQLObjectType } = require('graphql');

const DataObject = QueryFields.map(QueryField => {
    return {
        name: QueryField.name,
        fields: () => {
            return {
                QueryField.AllData(),
                QueryField.OneData()
    }
})

const DataQuery = new GraphQLObjectType({DataObject})

// const PartQuery = new GraphQLObjectType({
//     name: 'PartQuery',
//     fields: () => {
//         return {
//             Parts: {
//                 type: new GraphQLList(PartType),
//                 resolve: async () => {

//                     const _statement = fs.readFileSync(path.join(__dirname + '../../../../sql/Part/allParts.sql')).toString();
//                     const Parts = await queryFunction(_statement);
//                     if(!Parts) {
//                         throw new Error('Error in fetching data');
//                     }
//                     return Parts;
//                 }
//             },

//             Part: {
//                 type: new GraphQLList(PartType),
//                 args: {
//                     partNumber: {
//                         type: new GraphQLNonNull(GraphQLInt)
//                     }
//                 },
//                 resolve: async (parentValue, args, context, info) => {

//                     const _args = Object.values(args);
//                     const _statement = fs.readFileSync(path.join(__dirname + '../../../../sql/Part/findPart.sql')).toString();
//                     const Part = await queryFunction(_statement, _args);
//                     if(!Part) {
//                         throw new Error('Error in fetching data');
//                     }
//                     return Part;
//                 }
//             }
//         }
//     }
// });

module.exports = DataQuery;