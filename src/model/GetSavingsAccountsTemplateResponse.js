

import ApiClient from '../ApiClient';
import GetSavingsProductOptions from './GetSavingsProductOptions';

/**
 * The GetSavingsAccountsTemplateResponse model module.
 * @module model/GetSavingsAccountsTemplateResponse
 * @version 1.0
 */
class GetSavingsAccountsTemplateResponse {
    /**
     * Constructs a new <code>GetSavingsAccountsTemplateResponse</code>.
     * GetSavingsAccountsTemplateResponse
     * @alias module:model/GetSavingsAccountsTemplateResponse
     */
    constructor() { 
        
        GetSavingsAccountsTemplateResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSavingsAccountsTemplateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSavingsAccountsTemplateResponse} obj Optional instance to populate.
     * @return {module:model/GetSavingsAccountsTemplateResponse} The populated <code>GetSavingsAccountsTemplateResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSavingsAccountsTemplateResponse();

            if (data.hasOwnProperty('clientId')) {
                obj['clientId'] = ApiClient.convertToType(data['clientId'], 'Number');
            }
            if (data.hasOwnProperty('clientName')) {
                obj['clientName'] = ApiClient.convertToType(data['clientName'], 'String');
            }
            if (data.hasOwnProperty('productOptions')) {
                obj['productOptions'] = ApiClient.convertToType(data['productOptions'], [GetSavingsProductOptions]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} clientId
 */
GetSavingsAccountsTemplateResponse.prototype['clientId'] = undefined;

/**
 * @member {String} clientName
 */
GetSavingsAccountsTemplateResponse.prototype['clientName'] = undefined;

/**
 * @member {Array.<module:model/GetSavingsProductOptions>} productOptions
 */
GetSavingsAccountsTemplateResponse.prototype['productOptions'] = undefined;






export default GetSavingsAccountsTemplateResponse;

