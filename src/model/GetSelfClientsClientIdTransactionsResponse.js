

import ApiClient from '../ApiClient';
import GetSelfClientsClientIdTransactionsPageItems from './GetSelfClientsClientIdTransactionsPageItems';

/**
 * The GetSelfClientsClientIdTransactionsResponse model module.
 * @module model/GetSelfClientsClientIdTransactionsResponse
 * @version 1.0
 */
class GetSelfClientsClientIdTransactionsResponse {
    /**
     * Constructs a new <code>GetSelfClientsClientIdTransactionsResponse</code>.
     * GetSelfClientsClientIdTransactionsResponse
     * @alias module:model/GetSelfClientsClientIdTransactionsResponse
     */
    constructor() { 
        
        GetSelfClientsClientIdTransactionsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSelfClientsClientIdTransactionsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSelfClientsClientIdTransactionsResponse} obj Optional instance to populate.
     * @return {module:model/GetSelfClientsClientIdTransactionsResponse} The populated <code>GetSelfClientsClientIdTransactionsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSelfClientsClientIdTransactionsResponse();

            if (data.hasOwnProperty('totalFilteredRecords')) {
                obj['totalFilteredRecords'] = ApiClient.convertToType(data['totalFilteredRecords'], 'Number');
            }
            if (data.hasOwnProperty('pageItems')) {
                obj['pageItems'] = ApiClient.convertToType(data['pageItems'], [GetSelfClientsClientIdTransactionsPageItems]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} totalFilteredRecords
 */
GetSelfClientsClientIdTransactionsResponse.prototype['totalFilteredRecords'] = undefined;

/**
 * @member {Array.<module:model/GetSelfClientsClientIdTransactionsPageItems>} pageItems
 */
GetSelfClientsClientIdTransactionsResponse.prototype['pageItems'] = undefined;






export default GetSelfClientsClientIdTransactionsResponse;

