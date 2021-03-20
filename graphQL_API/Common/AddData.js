const Resolver = require('.Resolver');
const TypeFields = require('./TypeFields');

const AddData = TypeFields.map((TypeField) => {

    let {id, ...rest} = TypeField.fields;

    return {
        name: TypeField.name,
        type: TypeField.type,
        args: rest,
        resolve: Resolver(TypeField.createTable, TypeField.AddData)
        }
    }
);

module.exports = AddData;