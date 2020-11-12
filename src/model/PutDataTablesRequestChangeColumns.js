

import ApiClient from '../ApiClient';

/**
 * The PutDataTablesRequestChangeColumns model module.
 * @module model/PutDataTablesRequestChangeColumns
 * @version 1.0
 */
class PutDataTablesRequestChangeColumns {
    /**
     * Constructs a new <code>PutDataTablesRequestChangeColumns</code>.
     * @alias module:model/PutDataTablesRequestChangeColumns
     */
    constructor() { 
        
        PutDataTablesRequestChangeColumns.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutDataTablesRequestChangeColumns</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutDataTablesRequestChangeColumns} obj Optional instance to populate.
     * @return {module:model/PutDataTablesRequestChangeColumns} The populated <code>PutDataTablesRequestChangeColumns</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutDataTablesRequestChangeColumns();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('newName')) {
                obj['newName'] = ApiClient.convertToType(data['newName'], 'String');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('newCode')) {
                obj['newCode'] = ApiClient.convertToType(data['newCode'], 'String');
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
PutDataTablesRequestChangeColumns.prototype['name'] = undefined;

/**
 * @member {String} newName
 */
PutDataTablesRequestChangeColumns.prototype['newName'] = undefined;

/**
 * @member {String} code
 */
PutDataTablesRequestChangeColumns.prototype['code'] = undefined;

/**
 * @member {String} newCode
 */
PutDataTablesRequestChangeColumns.prototype['newCode'] = undefined;

/**
 * @member {Boolean} mandatory
 */
PutDataTablesRequestChangeColumns.prototype['mandatory'] = undefined;






export default PutDataTablesRequestChangeColumns;

