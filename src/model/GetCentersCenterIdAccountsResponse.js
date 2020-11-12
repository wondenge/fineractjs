

import ApiClient from '../ApiClient';
import GetCentersSavingsAccounts from './GetCentersSavingsAccounts';

/**
 * The GetCentersCenterIdAccountsResponse model module.
 * @module model/GetCentersCenterIdAccountsResponse
 * @version 1.0
 */
class GetCentersCenterIdAccountsResponse {
    /**
     * Constructs a new <code>GetCentersCenterIdAccountsResponse</code>.
     * GetCentersCenterIdAccountsResponse
     * @alias module:model/GetCentersCenterIdAccountsResponse
     */
    constructor() { 
        
        GetCentersCenterIdAccountsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetCentersCenterIdAccountsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetCentersCenterIdAccountsResponse} obj Optional instance to populate.
     * @return {module:model/GetCentersCenterIdAccountsResponse} The populated <code>GetCentersCenterIdAccountsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetCentersCenterIdAccountsResponse();

            if (data.hasOwnProperty('savingsAccounts')) {
                obj['savingsAccounts'] = ApiClient.convertToType(data['savingsAccounts'], [GetCentersSavingsAccounts]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/GetCentersSavingsAccounts>} savingsAccounts
 */
GetCentersCenterIdAccountsResponse.prototype['savingsAccounts'] = undefined;






export default GetCentersCenterIdAccountsResponse;

