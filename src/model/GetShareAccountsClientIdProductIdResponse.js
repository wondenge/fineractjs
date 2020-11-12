

import ApiClient from '../ApiClient';
import GetClientIdProductIdChargeOptions from './GetClientIdProductIdChargeOptions';
import GetClientIdProductIdProductOptions from './GetClientIdProductIdProductOptions';

/**
 * The GetShareAccountsClientIdProductIdResponse model module.
 * @module model/GetShareAccountsClientIdProductIdResponse
 * @version 1.0
 */
class GetShareAccountsClientIdProductIdResponse {
    /**
     * Constructs a new <code>GetShareAccountsClientIdProductIdResponse</code>.
     * GetShareAccountsClientIdProductIdResponse
     * @alias module:model/GetShareAccountsClientIdProductIdResponse
     */
    constructor() { 
        
        GetShareAccountsClientIdProductIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetShareAccountsClientIdProductIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetShareAccountsClientIdProductIdResponse} obj Optional instance to populate.
     * @return {module:model/GetShareAccountsClientIdProductIdResponse} The populated <code>GetShareAccountsClientIdProductIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetShareAccountsClientIdProductIdResponse();

            if (data.hasOwnProperty('productOptions')) {
                obj['productOptions'] = ApiClient.convertToType(data['productOptions'], [GetClientIdProductIdProductOptions]);
            }
            if (data.hasOwnProperty('chargeOptions')) {
                obj['chargeOptions'] = ApiClient.convertToType(data['chargeOptions'], [GetClientIdProductIdChargeOptions]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/GetClientIdProductIdProductOptions>} productOptions
 */
GetShareAccountsClientIdProductIdResponse.prototype['productOptions'] = undefined;

/**
 * @member {Array.<module:model/GetClientIdProductIdChargeOptions>} chargeOptions
 */
GetShareAccountsClientIdProductIdResponse.prototype['chargeOptions'] = undefined;






export default GetShareAccountsClientIdProductIdResponse;

