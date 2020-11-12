

import ApiClient from '../ApiClient';
import ResultsetColumnHeaderData from './ResultsetColumnHeaderData';

/**
 * The GetDataTablesResponse model module.
 * @module model/GetDataTablesResponse
 * @version 1.0
 */
class GetDataTablesResponse {
    /**
     * Constructs a new <code>GetDataTablesResponse</code>.
     * GetDataTablesResponse
     * @alias module:model/GetDataTablesResponse
     */
    constructor() { 
        
        GetDataTablesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetDataTablesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetDataTablesResponse} obj Optional instance to populate.
     * @return {module:model/GetDataTablesResponse} The populated <code>GetDataTablesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetDataTablesResponse();

            if (data.hasOwnProperty('appTableName')) {
                obj['appTableName'] = ApiClient.convertToType(data['appTableName'], 'String');
            }
            if (data.hasOwnProperty('datatableName')) {
                obj['datatableName'] = ApiClient.convertToType(data['datatableName'], 'String');
            }
            if (data.hasOwnProperty('column')) {
                obj['column'] = ApiClient.convertToType(data['column'], [ResultsetColumnHeaderData]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} appTableName
 */
GetDataTablesResponse.prototype['appTableName'] = undefined;

/**
 * @member {String} datatableName
 */
GetDataTablesResponse.prototype['datatableName'] = undefined;

/**
 * @member {Array.<module:model/ResultsetColumnHeaderData>} column
 */
GetDataTablesResponse.prototype['column'] = undefined;






export default GetDataTablesResponse;

