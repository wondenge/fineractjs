

import ApiClient from '../ApiClient';

/**
 * The PutDataTablesRequestAddColumns model module.
 * @module model/PutDataTablesRequestAddColumns
 * @version 1.0
 */
class PutDataTablesRequestAddColumns {
    /**
     * Constructs a new <code>PutDataTablesRequestAddColumns</code>.
     * @alias module:model/PutDataTablesRequestAddColumns
     */
    constructor() { 
        
        PutDataTablesRequestAddColumns.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutDataTablesRequestAddColumns</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutDataTablesRequestAddColumns} obj Optional instance to populate.
     * @return {module:model/PutDataTablesRequestAddColumns} The populated <code>PutDataTablesRequestAddColumns</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutDataTablesRequestAddColumns();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('mandatory')) {
                obj['mandatory'] = ApiClient.convertToType(data['mandatory'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
PutDataTablesRequestAddColumns.prototype['name'] = undefined;

/**
 * @member {String} type
 */
PutDataTablesRequestAddColumns.prototype['type'] = undefined;

/**
 * @member {String} code
 */
PutDataTablesRequestAddColumns.prototype['code'] = undefined;

/**
 * @member {Boolean} mandatory
 */
PutDataTablesRequestAddColumns.prototype['mandatory'] = undefined;






export default PutDataTablesRequestAddColumns;

