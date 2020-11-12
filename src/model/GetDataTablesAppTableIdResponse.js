

import ApiClient from '../ApiClient';
import ResultsetColumnHeaderData from './ResultsetColumnHeaderData';
import ResultsetRowData from './ResultsetRowData';

/**
 * The GetDataTablesAppTableIdResponse model module.
 * @module model/GetDataTablesAppTableIdResponse
 * @version 1.0
 */
class GetDataTablesAppTableIdResponse {
    /**
     * Constructs a new <code>GetDataTablesAppTableIdResponse</code>.
     * GetDataTablesAppTableIdResponse
     * @alias module:model/GetDataTablesAppTableIdResponse
     */
    constructor() { 
        
        GetDataTablesAppTableIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetDataTablesAppTableIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetDataTablesAppTableIdResponse} obj Optional instance to populate.
     * @return {module:model/GetDataTablesAppTableIdResponse} The populated <code>GetDataTablesAppTableIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetDataTablesAppTableIdResponse();

            if (data.hasOwnProperty('columnHeaders')) {
                obj['columnHeaders'] = ApiClient.convertToType(data['columnHeaders'], [ResultsetColumnHeaderData]);
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [ResultsetRowData]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/ResultsetColumnHeaderData>} columnHeaders
 */
GetDataTablesAppTableIdResponse.prototype['columnHeaders'] = undefined;

/**
 * @member {Array.<module:model/ResultsetRowData>} data
 */
GetDataTablesAppTableIdResponse.prototype['data'] = undefined;






export default GetDataTablesAppTableIdResponse;

