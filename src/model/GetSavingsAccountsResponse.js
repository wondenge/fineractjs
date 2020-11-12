

import ApiClient from '../ApiClient';
import GetSavingsPageItems from './GetSavingsPageItems';

/**
 * The GetSavingsAccountsResponse model module.
 * @module model/GetSavingsAccountsResponse
 * @version 1.0
 */
class GetSavingsAccountsResponse {
    /**
     * Constructs a new <code>GetSavingsAccountsResponse</code>.
     * GetSavingsAccountsResponse
     * @alias module:model/GetSavingsAccountsResponse
     */
    constructor() { 
        
        GetSavingsAccountsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSavingsAccountsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSavingsAccountsResponse} obj Optional instance to populate.
     * @return {module:model/GetSavingsAccountsResponse} The populated <code>GetSavingsAccountsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSavingsAccountsResponse();

            if (data.hasOwnProperty('totalFilteredRecords')) {
                obj['totalFilteredRecords'] = ApiClient.convertToType(data['totalFilteredRecords'], 'Number');
            }
            if (data.hasOwnProperty('pageItems')) {
                obj['pageItems'] = ApiClient.convertToType(data['pageItems'], [GetSavingsPageItems]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} totalFilteredRecords
 */
GetSavingsAccountsResponse.prototype['totalFilteredRecords'] = undefined;

/**
 * @member {Array.<module:model/GetSavingsPageItems>} pageItems
 */
GetSavingsAccountsResponse.prototype['pageItems'] = undefined;






export default GetSavingsAccountsResponse;

