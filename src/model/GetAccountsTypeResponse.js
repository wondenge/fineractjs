

import ApiClient from '../ApiClient';
import GetAccountsPageItems from './GetAccountsPageItems';

/**
 * The GetAccountsTypeResponse model module.
 * @module model/GetAccountsTypeResponse
 * @version 1.0
 */
class GetAccountsTypeResponse {
    /**
     * Constructs a new <code>GetAccountsTypeResponse</code>.
     * GetAccountsTypeResponse
     * @alias module:model/GetAccountsTypeResponse
     */
    constructor() { 
        
        GetAccountsTypeResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetAccountsTypeResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAccountsTypeResponse} obj Optional instance to populate.
     * @return {module:model/GetAccountsTypeResponse} The populated <code>GetAccountsTypeResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAccountsTypeResponse();

            if (data.hasOwnProperty('totalFilteredRecords')) {
                obj['totalFilteredRecords'] = ApiClient.convertToType(data['totalFilteredRecords'], 'Number');
            }
            if (data.hasOwnProperty('pageItems')) {
                obj['pageItems'] = ApiClient.convertToType(data['pageItems'], [GetAccountsPageItems]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} totalFilteredRecords
 */
GetAccountsTypeResponse.prototype['totalFilteredRecords'] = undefined;

/**
 * @member {Array.<module:model/GetAccountsPageItems>} pageItems
 */
GetAccountsTypeResponse.prototype['pageItems'] = undefined;






export default GetAccountsTypeResponse;

