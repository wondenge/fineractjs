

import ApiClient from '../ApiClient';
import GetChargesAppliesToResponse from './GetChargesAppliesToResponse';
import GetChargesCalculationTypeResponse from './GetChargesCalculationTypeResponse';
import GetChargesCurrencyResponse from './GetChargesCurrencyResponse';
import GetChargesPaymentModeResponse from './GetChargesPaymentModeResponse';
import GetChargesTemplateFeeFrequencyOptions from './GetChargesTemplateFeeFrequencyOptions';
import GetChargesTemplateLoanChargeCalculationTypeOptions from './GetChargesTemplateLoanChargeCalculationTypeOptions';
import GetChargesTemplateLoanChargeTimeTypeOptions from './GetChargesTemplateLoanChargeTimeTypeOptions';
import GetChargesTimeTypeResponse from './GetChargesTimeTypeResponse';

/**
 * The GetChargesTemplateResponse model module.
 * @module model/GetChargesTemplateResponse
 * @version 1.0
 */
class GetChargesTemplateResponse {
    /**
     * Constructs a new <code>GetChargesTemplateResponse</code>.
     * GetChargesTemplateResponse
     * @alias module:model/GetChargesTemplateResponse
     */
    constructor() { 
        
        GetChargesTemplateResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetChargesTemplateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetChargesTemplateResponse} obj Optional instance to populate.
     * @return {module:model/GetChargesTemplateResponse} The populated <code>GetChargesTemplateResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetChargesTemplateResponse();

            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'String');
            }
            if (data.hasOwnProperty('penalty')) {
                obj['penalty'] = ApiClient.convertToType(data['penalty'], 'String');
            }
            if (data.hasOwnProperty('currencyOptions')) {
                obj['currencyOptions'] = ApiClient.convertToType(data['currencyOptions'], [GetChargesCurrencyResponse]);
            }
            if (data.hasOwnProperty('chargeCalculationTypeOptions')) {
                obj['chargeCalculationTypeOptions'] = ApiClient.convertToType(data['chargeCalculationTypeOptions'], [GetChargesCalculationTypeResponse]);
            }
            if (data.hasOwnProperty('chargeAppliesToOptions')) {
                obj['chargeAppliesToOptions'] = ApiClient.convertToType(data['chargeAppliesToOptions'], [GetChargesAppliesToResponse]);
            }
            if (data.hasOwnProperty('chargeTimeTypeOptions')) {
                obj['chargeTimeTypeOptions'] = ApiClient.convertToType(data['chargeTimeTypeOptions'], [GetChargesTimeTypeResponse]);
            }
            if (data.hasOwnProperty('chargePaymentModeOptions')) {
                obj['chargePaymentModeOptions'] = ApiClient.convertToType(data['chargePaymentModeOptions'], [GetChargesPaymentModeResponse]);
            }
            if (data.hasOwnProperty('loanChargeCalculationTypeOptions')) {
                obj['loanChargeCalculationTypeOptions'] = ApiClient.convertToType(data['loanChargeCalculationTypeOptions'], [GetChargesTemplateLoanChargeCalculationTypeOptions]);
            }
            if (data.hasOwnProperty('loanChargeTimeTypeOptions')) {
                obj['loanChargeTimeTypeOptions'] = ApiClient.convertToType(data['loanChargeTimeTypeOptions'], [GetChargesTemplateLoanChargeTimeTypeOptions]);
            }
            if (data.hasOwnProperty('savingsChargeCalculationTypeOptions')) {
                obj['savingsChargeCalculationTypeOptions'] = ApiClient.convertToType(data['savingsChargeCalculationTypeOptions'], [GetChargesTemplateLoanChargeCalculationTypeOptions]);
            }
            if (data.hasOwnProperty('savingsChargeTimeTypeOptions')) {
                obj['savingsChargeTimeTypeOptions'] = ApiClient.convertToType(data['savingsChargeTimeTypeOptions'], [GetChargesTemplateLoanChargeTimeTypeOptions]);
            }
            if (data.hasOwnProperty('feeFrequencyOptions')) {
                obj['feeFrequencyOptions'] = ApiClient.convertToType(data['feeFrequencyOptions'], [GetChargesTemplateFeeFrequencyOptions]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} active
 */
GetChargesTemplateResponse.prototype['active'] = undefined;

/**
 * @member {String} penalty
 */
GetChargesTemplateResponse.prototype['penalty'] = undefined;

/**
 * @member {Array.<module:model/GetChargesCurrencyResponse>} currencyOptions
 */
GetChargesTemplateResponse.prototype['currencyOptions'] = undefined;

/**
 * @member {Array.<module:model/GetChargesCalculationTypeResponse>} chargeCalculationTypeOptions
 */
GetChargesTemplateResponse.prototype['chargeCalculationTypeOptions'] = undefined;

/**
 * @member {Array.<module:model/GetChargesAppliesToResponse>} chargeAppliesToOptions
 */
GetChargesTemplateResponse.prototype['chargeAppliesToOptions'] = undefined;

/**
 * @member {Array.<module:model/GetChargesTimeTypeResponse>} chargeTimeTypeOptions
 */
GetChargesTemplateResponse.prototype['chargeTimeTypeOptions'] = undefined;

/**
 * @member {Array.<module:model/GetChargesPaymentModeResponse>} chargePaymentModeOptions
 */
GetChargesTemplateResponse.prototype['chargePaymentModeOptions'] = undefined;

/**
 * @member {Array.<module:model/GetChargesTemplateLoanChargeCalculationTypeOptions>} loanChargeCalculationTypeOptions
 */
GetChargesTemplateResponse.prototype['loanChargeCalculationTypeOptions'] = undefined;

/**
 * @member {Array.<module:model/GetChargesTemplateLoanChargeTimeTypeOptions>} loanChargeTimeTypeOptions
 */
GetChargesTemplateResponse.prototype['loanChargeTimeTypeOptions'] = undefined;

/**
 * @member {Array.<module:model/GetChargesTemplateLoanChargeCalculationTypeOptions>} savingsChargeCalculationTypeOptions
 */
GetChargesTemplateResponse.prototype['savingsChargeCalculationTypeOptions'] = undefined;

/**
 * @member {Array.<module:model/GetChargesTemplateLoanChargeTimeTypeOptions>} savingsChargeTimeTypeOptions
 */
GetChargesTemplateResponse.prototype['savingsChargeTimeTypeOptions'] = undefined;

/**
 * @member {Array.<module:model/GetChargesTemplateFeeFrequencyOptions>} feeFrequencyOptions
 */
GetChargesTemplateResponse.prototype['feeFrequencyOptions'] = undefined;






export default GetChargesTemplateResponse;

