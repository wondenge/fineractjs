

import ApiClient from '../ApiClient';
import GetAccountOptions from './GetAccountOptions';
import GetFromAccountOptions from './GetFromAccountOptions';

/**
 * The GetAccountTransferTemplateResponse model module.
 * @module model/GetAccountTransferTemplateResponse
 * @version 1.0
 */
class GetAccountTransferTemplateResponse {
    /**
     * Constructs a new <code>GetAccountTransferTemplateResponse</code>.
     * GetAccountTransferTemplateResponse
     * @alias module:model/GetAccountTransferTemplateResponse
     */
    constructor() { 
        
        GetAccountTransferTemplateResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetAccountTransferTemplateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAccountTransferTemplateResponse} obj Optional instance to populate.
     * @return {module:model/GetAccountTransferTemplateResponse} The populated <code>GetAccountTransferTemplateResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAccountTransferTemplateResponse();

            if (data.hasOwnProperty('accountTypeOptions')) {
                obj['accountTypeOptions'] = ApiClient.convertToType(data['accountTypeOptions'], [GetAccountOptions]);
            }
            if (data.hasOwnProperty('fromAccountTypeOptions')) {
                obj['fromAccountTypeOptions'] = ApiClient.convertToType(data['fromAccountTypeOptions'], [GetFromAccountOptions]);
            }
            if (data.hasOwnProperty('toAccountTypeOptions')) {
                obj['toAccountTypeOptions'] = ApiClient.convertToType(data['toAccountTypeOptions'], [GetFromAccountOptions]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/GetAccountOptions>} accountTypeOptions
 */
GetAccountTransferTemplateResponse.prototype['accountTypeOptions'] = undefined;

/**
 * @member {Array.<module:model/GetFromAccountOptions>} fromAccountTypeOptions
 */
GetAccountTransferTemplateResponse.prototype['fromAccountTypeOptions'] = undefined;

/**
 * @member {Array.<module:model/GetFromAccountOptions>} toAccountTypeOptions
 */
GetAccountTransferTemplateResponse.prototype['toAccountTypeOptions'] = undefined;






export default GetAccountTransferTemplateResponse;

