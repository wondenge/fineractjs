

import ApiClient from '../ApiClient';

/**
 * The PutDataTablesRequestDropColumns model module.
 * @module model/PutDataTablesRequestDropColumns
 * @version 1.0
 */
class PutDataTablesRequestDropColumns {
    /**
     * Constructs a new <code>PutDataTablesRequestDropColumns</code>.
     * @alias module:model/PutDataTablesRequestDropColumns
     */
    constructor() { 
        
        PutDataTablesRequestDropColumns.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutDataTablesRequestDropColumns</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutDataTablesRequestDropColumns} obj Optional instance to populate.
     * @return {module:model/PutDataTablesRequestDropColumns} The populated <code>PutDataTablesRequestDropColumns</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutDataTablesRequestDropColumns();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
PutDataTablesRequestDropColumns.prototype['name'] = undefined;






export default PutDataTablesRequestDropColumns;

