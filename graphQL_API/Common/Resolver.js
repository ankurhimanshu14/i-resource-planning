const resolver = (route1, route2) => (parentValue, args, context, info) => {

    const _statement1 = fs.readFileSync(path.join(__dirname + route1)).toString();
    const createTable = queryFunction(_statement1);
    if(!createTable) {
        throw new Error('Data Table not created');
    } else {
        const _args = Object.values(args);
        
        const _statement2 = fs.readFileSync(path.join(__dirname + route2)).toString();
    
        const newData = queryFunction(_statement2, _args)
        if(!newData) {
            throw new Error('Error in fetching data')
        }
        return newData;
    }
};

module.exports = resolver;