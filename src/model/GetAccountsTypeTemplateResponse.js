

import ApiClient from '../ApiClient';
import GetAccountsTypeProductOptions from './GetAccountsTypeProductOptions';

/**
 * The GetAccountsTypeTemplateResponse model module.
 * @module model/GetAccountsTypeTemplateResponse
 * @version 1.0
 */
class GetAccountsTypeTemplateResponse {
    /**
     * Constructs a new <code>GetAccountsTypeTemplateResponse</code>.
     * GetAccountsTypeTemplateResponse
     * @alias module:model/GetAccountsTypeTemplateResponse
     */
    constructor() { 
        
        GetAccountsTypeTemplateResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetAccountsTypeTemplateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAccountsTypeTemplateResponse} obj Optional instance to populate.
     * @return {module:model/GetAccountsTypeTemplateResponse} The populated <code>GetAccountsTypeTemplateResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAccountsTypeTemplateResponse();

            if (data.hasOwnProperty('clientId')) {
                obj['clientId'] = ApiClient.convertToType(data['clientId'], 'Number');
            }
            if (data.hasOwnProperty('clientName')) {
                obj['clientName'] = ApiClient.convertToType(data['clientName'], 'String');
            }
            if (data.hasOwnProperty('productOptions')) {
                obj['productOptions'] = ApiClient.convertToType(data['productOptions'], [GetAccountsTypeProductOptions]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} clientId
 */
GetAccountsTypeTemplateResponse.prototype['clientId'] = undefined;

/**
 * @member {String} clientName
 */
GetAccountsTypeTemplateResponse.prototype['clientName'] = undefined;

/**
 * @member {Array.<module:model/GetAccountsTypeProductOptions>} productOptions
 */
GetAccountsTypeTemplateResponse.prototype['productOptions'] = undefined;






export default GetAccountsTypeTemplateResponse;

