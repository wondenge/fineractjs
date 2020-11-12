

import ApiClient from '../ApiClient';
import GetFixedDepositAccountsProductOptions from './GetFixedDepositAccountsProductOptions';

/**
 * The GetFixedDepositAccountsTemplateResponse model module.
 * @module model/GetFixedDepositAccountsTemplateResponse
 * @version 1.0
 */
class GetFixedDepositAccountsTemplateResponse {
    /**
     * Constructs a new <code>GetFixedDepositAccountsTemplateResponse</code>.
     * GetFixedDepositAccountsTemplateResponse
     * @alias module:model/GetFixedDepositAccountsTemplateResponse
     */
    constructor() { 
        
        GetFixedDepositAccountsTemplateResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetFixedDepositAccountsTemplateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetFixedDepositAccountsTemplateResponse} obj Optional instance to populate.
     * @return {module:model/GetFixedDepositAccountsTemplateResponse} The populated <code>GetFixedDepositAccountsTemplateResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetFixedDepositAccountsTemplateResponse();

            if (data.hasOwnProperty('clientId')) {
                obj['clientId'] = ApiClient.convertToType(data['clientId'], 'Number');
            }
            if (data.hasOwnProperty('clientName')) {
                obj['clientName'] = ApiClient.convertToType(data['clientName'], 'String');
            }
            if (data.hasOwnProperty('productOptions')) {
                obj['productOptions'] = ApiClient.convertToType(data['productOptions'], [GetFixedDepositAccountsProductOptions]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} clientId
 */
GetFixedDepositAccountsTemplateResponse.prototype['clientId'] = undefined;

/**
 * @member {String} clientName
 */
GetFixedDepositAccountsTemplateResponse.prototype['clientName'] = undefined;

/**
 * @member {Array.<module:model/GetFixedDepositAccountsProductOptions>} productOptions
 */
GetFixedDepositAccountsTemplateResponse.prototype['productOptions'] = undefined;






export default GetFixedDepositAccountsTemplateResponse;

