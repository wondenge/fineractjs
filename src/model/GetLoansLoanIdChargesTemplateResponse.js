

import ApiClient from '../ApiClient';
import GetLoanChargeTemplateChargeOptions from './GetLoanChargeTemplateChargeOptions';

/**
 * The GetLoansLoanIdChargesTemplateResponse model module.
 * @module model/GetLoansLoanIdChargesTemplateResponse
 * @version 1.0
 */
class GetLoansLoanIdChargesTemplateResponse {
    /**
     * Constructs a new <code>GetLoansLoanIdChargesTemplateResponse</code>.
     * GetLoansLoanIdChargesTemplateResponse
     * @alias module:model/GetLoansLoanIdChargesTemplateResponse
     */
    constructor() { 
        
        GetLoansLoanIdChargesTemplateResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoansLoanIdChargesTemplateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoansLoanIdChargesTemplateResponse} obj Optional instance to populate.
     * @return {module:model/GetLoansLoanIdChargesTemplateResponse} The populated <code>GetLoansLoanIdChargesTemplateResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoansLoanIdChargesTemplateResponse();

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
                obj['chargeOptions'] = ApiClient.convertToType(data['chargeOptions'], [GetLoanChargeTemplateChargeOptions]);
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
GetLoansLoanIdChargesTemplateResponse.prototype['amountPaid'] = undefined;

/**
 * @member {Number} amountWaived
 */
GetLoansLoanIdChargesTemplateResponse.prototype['amountWaived'] = undefined;

/**
 * @member {Number} amountWrittenOff
 */
GetLoansLoanIdChargesTemplateResponse.prototype['amountWrittenOff'] = undefined;

/**
 * @member {Array.<module:model/GetLoanChargeTemplateChargeOptions>} chargeOptions
 */
GetLoansLoanIdChargesTemplateResponse.prototype['chargeOptions'] = undefined;

/**
 * @member {Boolean} penalty
 */
GetLoansLoanIdChargesTemplateResponse.prototype['penalty'] = undefined;






export default GetLoansLoanIdChargesTemplateResponse;

