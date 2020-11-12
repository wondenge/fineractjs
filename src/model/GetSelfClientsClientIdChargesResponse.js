

import ApiClient from '../ApiClient';
import GetSelfClientsChargesPageItems from './GetSelfClientsChargesPageItems';

/**
 * The GetSelfClientsClientIdChargesResponse model module.
 * @module model/GetSelfClientsClientIdChargesResponse
 * @version 1.0
 */
class GetSelfClientsClientIdChargesResponse {
    /**
     * Constructs a new <code>GetSelfClientsClientIdChargesResponse</code>.
     * GetSelfClientsClientIdChargesResponse
     * @alias module:model/GetSelfClientsClientIdChargesResponse
     */
    constructor() { 
        
        GetSelfClientsClientIdChargesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSelfClientsClientIdChargesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSelfClientsClientIdChargesResponse} obj Optional instance to populate.
     * @return {module:model/GetSelfClientsClientIdChargesResponse} The populated <code>GetSelfClientsClientIdChargesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSelfClientsClientIdChargesResponse();

            if (data.hasOwnProperty('totalFilteredRecords')) {
                obj['totalFilteredRecords'] = ApiClient.convertToType(data['totalFilteredRecords'], 'Number');
            }
            if (data.hasOwnProperty('pageItems')) {
                obj['pageItems'] = ApiClient.convertToType(data['pageItems'], [GetSelfClientsChargesPageItems]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} totalFilteredRecords
 */
GetSelfClientsClientIdChargesResponse.prototype['totalFilteredRecords'] = undefined;

/**
 * @member {Array.<module:model/GetSelfClientsChargesPageItems>} pageItems
 */
GetSelfClientsClientIdChargesResponse.prototype['pageItems'] = undefined;






export default GetSelfClientsClientIdChargesResponse;

