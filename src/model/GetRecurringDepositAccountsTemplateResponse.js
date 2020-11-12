

import ApiClient from '../ApiClient';
import GetRecurringProductOptions from './GetRecurringProductOptions';

/**
 * The GetRecurringDepositAccountsTemplateResponse model module.
 * @module model/GetRecurringDepositAccountsTemplateResponse
 * @version 1.0
 */
class GetRecurringDepositAccountsTemplateResponse {
    /**
     * Constructs a new <code>GetRecurringDepositAccountsTemplateResponse</code>.
     * GetRecurringDepositAccountsTemplateResponse
     * @alias module:model/GetRecurringDepositAccountsTemplateResponse
     */
    constructor() { 
        
        GetRecurringDepositAccountsTemplateResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetRecurringDepositAccountsTemplateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetRecurringDepositAccountsTemplateResponse} obj Optional instance to populate.
     * @return {module:model/GetRecurringDepositAccountsTemplateResponse} The populated <code>GetRecurringDepositAccountsTemplateResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRecurringDepositAccountsTemplateResponse();

            if (data.hasOwnProperty('clientId')) {
                obj['clientId'] = ApiClient.convertToType(data['clientId'], 'Number');
            }
            if (data.hasOwnProperty('clientName')) {
                obj['clientName'] = ApiClient.convertToType(data['clientName'], 'String');
            }
            if (data.hasOwnProperty('productOptions')) {
                obj['productOptions'] = ApiClient.convertToType(data['productOptions'], [GetRecurringProductOptions]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} clientId
 */
GetRecurringDepositAccountsTemplateResponse.prototype['clientId'] = undefined;

/**
 * @member {String} clientName
 */
GetRecurringDepositAccountsTemplateResponse.prototype['clientName'] = undefined;

/**
 * @member {Array.<module:model/GetRecurringProductOptions>} productOptions
 */
GetRecurringDepositAccountsTemplateResponse.prototype['productOptions'] = undefined;






export default GetRecurringDepositAccountsTemplateResponse;

