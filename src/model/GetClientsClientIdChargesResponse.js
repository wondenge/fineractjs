

import ApiClient from '../ApiClient';
import GetClientsChargesPageItems from './GetClientsChargesPageItems';

/**
 * The GetClientsClientIdChargesResponse model module.
 * @module model/GetClientsClientIdChargesResponse
 * @version 1.0
 */
class GetClientsClientIdChargesResponse {
    /**
     * Constructs a new <code>GetClientsClientIdChargesResponse</code>.
     * GetClientsClientIdChargesResponse
     * @alias module:model/GetClientsClientIdChargesResponse
     */
    constructor() { 
        
        GetClientsClientIdChargesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetClientsClientIdChargesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetClientsClientIdChargesResponse} obj Optional instance to populate.
     * @return {module:model/GetClientsClientIdChargesResponse} The populated <code>GetClientsClientIdChargesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetClientsClientIdChargesResponse();

            if (data.hasOwnProperty('totalFilteredRecords')) {
                obj['totalFilteredRecords'] = ApiClient.convertToType(data['totalFilteredRecords'], 'Number');
            }
            if (data.hasOwnProperty('pageItems')) {
                obj['pageItems'] = ApiClient.convertToType(data['pageItems'], [GetClientsChargesPageItems]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} totalFilteredRecords
 */
GetClientsClientIdChargesResponse.prototype['totalFilteredRecords'] = undefined;

/**
 * @member {Array.<module:model/GetClientsChargesPageItems>} pageItems
 */
GetClientsClientIdChargesResponse.prototype['pageItems'] = undefined;






export default GetClientsClientIdChargesResponse;

