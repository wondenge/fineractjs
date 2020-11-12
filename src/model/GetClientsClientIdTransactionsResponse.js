

import ApiClient from '../ApiClient';
import GetClientsPageItems from './GetClientsPageItems';

/**
 * The GetClientsClientIdTransactionsResponse model module.
 * @module model/GetClientsClientIdTransactionsResponse
 * @version 1.0
 */
class GetClientsClientIdTransactionsResponse {
    /**
     * Constructs a new <code>GetClientsClientIdTransactionsResponse</code>.
     * GetClientsClientIdTransactionsResponse
     * @alias module:model/GetClientsClientIdTransactionsResponse
     */
    constructor() { 
        
        GetClientsClientIdTransactionsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetClientsClientIdTransactionsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetClientsClientIdTransactionsResponse} obj Optional instance to populate.
     * @return {module:model/GetClientsClientIdTransactionsResponse} The populated <code>GetClientsClientIdTransactionsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetClientsClientIdTransactionsResponse();

            if (data.hasOwnProperty('totalFilteredRecords')) {
                obj['totalFilteredRecords'] = ApiClient.convertToType(data['totalFilteredRecords'], 'Number');
            }
            if (data.hasOwnProperty('pageItems')) {
                obj['pageItems'] = ApiClient.convertToType(data['pageItems'], [GetClientsPageItems]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} totalFilteredRecords
 */
GetClientsClientIdTransactionsResponse.prototype['totalFilteredRecords'] = undefined;

/**
 * @member {Array.<module:model/GetClientsPageItems>} pageItems
 */
GetClientsClientIdTransactionsResponse.prototype['pageItems'] = undefined;






export default GetClientsClientIdTransactionsResponse;

