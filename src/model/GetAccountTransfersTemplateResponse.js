

import ApiClient from '../ApiClient';
import GetAccountTransfersFromAccountType from './GetAccountTransfersFromAccountType';
import GetAccountTransfersFromAccountTypeOptions from './GetAccountTransfersFromAccountTypeOptions';
import GetAccountTransfersFromClientOptions from './GetAccountTransfersFromClientOptions';
import GetAccountTransfersFromOffice from './GetAccountTransfersFromOffice';
import GetAccountTransfersFromOfficeOptions from './GetAccountTransfersFromOfficeOptions';
import GetAccountTransfersToAccountTypeOptions from './GetAccountTransfersToAccountTypeOptions';
import GetAccountTransfersToOfficeOptions from './GetAccountTransfersToOfficeOptions';

/**
 * The GetAccountTransfersTemplateResponse model module.
 * @module model/GetAccountTransfersTemplateResponse
 * @version 1.0
 */
class GetAccountTransfersTemplateResponse {
    /**
     * Constructs a new <code>GetAccountTransfersTemplateResponse</code>.
     * GetAccountTransfersTemplateResponse
     * @alias module:model/GetAccountTransfersTemplateResponse
     */
    constructor() { 
        
        GetAccountTransfersTemplateResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetAccountTransfersTemplateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAccountTransfersTemplateResponse} obj Optional instance to populate.
     * @return {module:model/GetAccountTransfersTemplateResponse} The populated <code>GetAccountTransfersTemplateResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAccountTransfersTemplateResponse();

            if (data.hasOwnProperty('transferAmount')) {
                obj['transferAmount'] = ApiClient.convertToType(data['transferAmount'], 'Number');
            }
            if (data.hasOwnProperty('transferDate')) {
                obj['transferDate'] = ApiClient.convertToType(data['transferDate'], 'Date');
            }
            if (data.hasOwnProperty('fromOffice')) {
                obj['fromOffice'] = GetAccountTransfersFromOffice.constructFromObject(data['fromOffice']);
            }
            if (data.hasOwnProperty('fromAccountType')) {
                obj['fromAccountType'] = GetAccountTransfersFromAccountType.constructFromObject(data['fromAccountType']);
            }
            if (data.hasOwnProperty('fromOfficeOptions')) {
                obj['fromOfficeOptions'] = ApiClient.convertToType(data['fromOfficeOptions'], [GetAccountTransfersFromOfficeOptions]);
            }
            if (data.hasOwnProperty('fromClientOptions')) {
                obj['fromClientOptions'] = ApiClient.convertToType(data['fromClientOptions'], [GetAccountTransfersFromClientOptions]);
            }
            if (data.hasOwnProperty('fromAccountTypeOptions')) {
                obj['fromAccountTypeOptions'] = ApiClient.convertToType(data['fromAccountTypeOptions'], [GetAccountTransfersFromAccountTypeOptions]);
            }
            if (data.hasOwnProperty('toOfficeOptions')) {
                obj['toOfficeOptions'] = ApiClient.convertToType(data['toOfficeOptions'], [GetAccountTransfersToOfficeOptions]);
            }
            if (data.hasOwnProperty('toAccountTypeOptions')) {
                obj['toAccountTypeOptions'] = ApiClient.convertToType(data['toAccountTypeOptions'], [GetAccountTransfersToAccountTypeOptions]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} transferAmount
 */
GetAccountTransfersTemplateResponse.prototype['transferAmount'] = undefined;

/**
 * @member {Date} transferDate
 */
GetAccountTransfersTemplateResponse.prototype['transferDate'] = undefined;

/**
 * @member {module:model/GetAccountTransfersFromOffice} fromOffice
 */
GetAccountTransfersTemplateResponse.prototype['fromOffice'] = undefined;

/**
 * @member {module:model/GetAccountTransfersFromAccountType} fromAccountType
 */
GetAccountTransfersTemplateResponse.prototype['fromAccountType'] = undefined;

/**
 * @member {Array.<module:model/GetAccountTransfersFromOfficeOptions>} fromOfficeOptions
 */
GetAccountTransfersTemplateResponse.prototype['fromOfficeOptions'] = undefined;

/**
 * @member {Array.<module:model/GetAccountTransfersFromClientOptions>} fromClientOptions
 */
GetAccountTransfersTemplateResponse.prototype['fromClientOptions'] = undefined;

/**
 * @member {Array.<module:model/GetAccountTransfersFromAccountTypeOptions>} fromAccountTypeOptions
 */
GetAccountTransfersTemplateResponse.prototype['fromAccountTypeOptions'] = undefined;

/**
 * @member {Array.<module:model/GetAccountTransfersToOfficeOptions>} toOfficeOptions
 */
GetAccountTransfersTemplateResponse.prototype['toOfficeOptions'] = undefined;

/**
 * @member {Array.<module:model/GetAccountTransfersToAccountTypeOptions>} toAccountTypeOptions
 */
GetAccountTransfersTemplateResponse.prototype['toAccountTypeOptions'] = undefined;






export default GetAccountTransfersTemplateResponse;

