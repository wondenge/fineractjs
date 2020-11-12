

import ApiClient from '../ApiClient';
import GetSavingsChargesOptions from './GetSavingsChargesOptions';

/**
 * The GetSavingsAccountsSavingsAccountIdChargesTemplateResponse model module.
 * @module model/GetSavingsAccountsSavingsAccountIdChargesTemplateResponse
 * @version 1.0
 */
class GetSavingsAccountsSavingsAccountIdChargesTemplateResponse {
    /**
     * Constructs a new <code>GetSavingsAccountsSavingsAccountIdChargesTemplateResponse</code>.
     * GetSavingsAccountsSavingsAccountIdChargesTemplateResponse
     * @alias module:model/GetSavingsAccountsSavingsAccountIdChargesTemplateResponse
     */
    constructor() { 
        
        GetSavingsAccountsSavingsAccountIdChargesTemplateResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSavingsAccountsSavingsAccountIdChargesTemplateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSavingsAccountsSavingsAccountIdChargesTemplateResponse} obj Optional instance to populate.
     * @return {module:model/GetSavingsAccountsSavingsAccountIdChargesTemplateResponse} The populated <code>GetSavingsAccountsSavingsAccountIdChargesTemplateResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSavingsAccountsSavingsAccountIdChargesTemplateResponse();

            if (data.hasOwnProperty('amountPaid')) {
                obj['amountPaid'] = ApiClient.convertToType(data['amountPaid'], 'Number');
            }
            if (data.hasOwnProperty('amountWaived')) {
                obj['amountWaived'] = ApiClient.convertToType(data['amountWaived'], 'Number');
            }
            if (data.hasOwnProperty('amountWrittenOff')) {
                obj['amountWrittenOff'] = ApiClient.convertToType(data['amountWrittenOff'], 'Number');
            }
            if (data.hasOwnProperty('chargeOptions')) {
                obj['chargeOptions'] = ApiClient.convertToType(data['chargeOptions'], [GetSavingsChargesOptions]);
            }
            if (data.hasOwnProperty('penalty')) {
                obj['penalty'] = ApiClient.convertToType(data['penalty'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} amountPaid
 */
GetSavingsAccountsSavingsAccountIdChargesTemplateResponse.prototype['amountPaid'] = undefined;

/**
 * @member {Number} amountWaived
 */
GetSavingsAccountsSavingsAccountIdChargesTemplateResponse.prototype['amountWaived'] = undefined;

/**
 * @member {Number} amountWrittenOff
 */
GetSavingsAccountsSavingsAccountIdChargesTemplateResponse.prototype['amountWrittenOff'] = undefined;

/**
 * @member {Array.<module:model/GetSavingsChargesOptions>} chargeOptions
 */
GetSavingsAccountsSavingsAccountIdChargesTemplateResponse.prototype['chargeOptions'] = undefined;

/**
 * @member {Boolean} penalty
 */
GetSavingsAccountsSavingsAccountIdChargesTemplateResponse.prototype['penalty'] = undefined;






export default GetSavingsAccountsSavingsAccountIdChargesTemplateResponse;

