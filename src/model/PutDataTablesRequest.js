

import ApiClient from '../ApiClient';
import PutDataTablesRequestAddColumns from './PutDataTablesRequestAddColumns';
import PutDataTablesRequestChangeColumns from './PutDataTablesRequestChangeColumns';
import PutDataTablesRequestDropColumns from './PutDataTablesRequestDropColumns';

/**
 * The PutDataTablesRequest model module.
 * @module model/PutDataTablesRequest
 * @version 1.0
 */
class PutDataTablesRequest {
    /**
     * Constructs a new <code>PutDataTablesRequest</code>.
     * PutDataTablesRequest
     * @alias module:model/PutDataTablesRequest
     */
    constructor() { 
        
        PutDataTablesRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutDataTablesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutDataTablesRequest} obj Optional instance to populate.
     * @return {module:model/PutDataTablesRequest} The populated <code>PutDataTablesRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutDataTablesRequest();

            if (data.hasOwnProperty('appTableName')) {
                obj['appTableName'] = ApiClient.convertToType(data['appTableName'], 'String');
            }
            if (data.hasOwnProperty('dropColumns')) {
                obj['dropColumns'] = ApiClient.convertToType(data['dropColumns'], [PutDataTablesRequestDropColumns]);
            }
            if (data.hasOwnProperty('addColumns')) {
                obj['addColumns'] = ApiClient.convertToType(data['addColumns'], [PutDataTablesRequestAddColumns]);
            }
            if (data.hasOwnProperty('ChangeColumns')) {
                obj['ChangeColumns'] = ApiClient.convertToType(data['ChangeColumns'], [PutDataTablesRequestChangeColumns]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} appTableName
 */
PutDataTablesRequest.prototype['appTableName'] = undefined;

/**
 * @member {Array.<module:model/PutDataTablesRequestDropColumns>} dropColumns
 */
PutDataTablesRequest.prototype['dropColumns'] = undefined;

/**
 * @member {Array.<module:model/PutDataTablesRequestAddColumns>} addColumns
 */
PutDataTablesRequest.prototype['addColumns'] = undefined;

/**
 * @member {Array.<module:model/PutDataTablesRequestChangeColumns>} ChangeColumns
 */
PutDataTablesRequest.prototype['ChangeColumns'] = undefined;






export default PutDataTablesRequest;

