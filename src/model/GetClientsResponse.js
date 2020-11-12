

import ApiClient from '../ApiClient';
import GetClientsPageItemsResponse from './GetClientsPageItemsResponse';

/**
 * The GetClientsResponse model module.
 * @module model/GetClientsResponse
 * @version 1.0
 */
class GetClientsResponse {
    /**
     * Constructs a new <code>GetClientsResponse</code>.
     * GetClientsResponse
     * @alias module:model/GetClientsResponse
     */
    constructor() { 
        
        GetClientsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetClientsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetClientsResponse} obj Optional instance to populate.
     * @return {module:model/GetClientsResponse} The populated <code>GetClientsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetClientsResponse();

            if (data.hasOwnProperty('totalFilteredRecords')) {
                obj['totalFilteredRecords'] = ApiClient.convertToType(data['totalFilteredRecords'], 'Number');
            }
            if (data.hasOwnProperty('pageItems')) {
                obj['pageItems'] = ApiClient.convertToType(data['pageItems'], [GetClientsPageItemsResponse]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} totalFilteredRecords
 */
GetClientsResponse.prototype['totalFilteredRecords'] = undefined;

/**
 * @member {Array.<module:model/GetClientsPageItemsResponse>} pageItems
 */
GetClientsResponse.prototype['pageItems'] = undefined;






export default GetClientsResponse;

