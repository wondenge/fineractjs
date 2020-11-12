

import ApiClient from '../ApiClient';
import GetSelfClientsPageItems from './GetSelfClientsPageItems';

/**
 * The GetSelfClientsResponse model module.
 * @module model/GetSelfClientsResponse
 * @version 1.0
 */
class GetSelfClientsResponse {
    /**
     * Constructs a new <code>GetSelfClientsResponse</code>.
     * GetSelfClientsResponse
     * @alias module:model/GetSelfClientsResponse
     */
    constructor() { 
        
        GetSelfClientsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSelfClientsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSelfClientsResponse} obj Optional instance to populate.
     * @return {module:model/GetSelfClientsResponse} The populated <code>GetSelfClientsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSelfClientsResponse();

            if (data.hasOwnProperty('totalFilteredRecords')) {
                obj['totalFilteredRecords'] = ApiClient.convertToType(data['totalFilteredRecords'], 'Number');
            }
            if (data.hasOwnProperty('pageItems')) {
                obj['pageItems'] = ApiClient.convertToType(data['pageItems'], [GetSelfClientsPageItems]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} totalFilteredRecords
 */
GetSelfClientsResponse.prototype['totalFilteredRecords'] = undefined;

/**
 * @member {Array.<module:model/GetSelfClientsPageItems>} pageItems
 */
GetSelfClientsResponse.prototype['pageItems'] = undefined;






export default GetSelfClientsResponse;

