

import ApiClient from '../ApiClient';
import GetSavingsCurrency from './GetSavingsCurrency';
import GetSavingsProductsAccountingMappingOptions from './GetSavingsProductsAccountingMappingOptions';
import GetSavingsProductsChargeOptions from './GetSavingsProductsChargeOptions';
import GetSavingsProductsInterestCalculationDaysInYearType from './GetSavingsProductsInterestCalculationDaysInYearType';
import GetSavingsProductsInterestCalculationType from './GetSavingsProductsInterestCalculationType';
import GetSavingsProductsInterestCompoundingPeriodType from './GetSavingsProductsInterestCompoundingPeriodType';
import GetSavingsProductsInterestPostingPeriodType from './GetSavingsProductsInterestPostingPeriodType';
import GetSavingsProductsLockinPeriodFrequencyTypeOptions from './GetSavingsProductsLockinPeriodFrequencyTypeOptions';
import GetSavingsProductsPaymentTypeOptions from './GetSavingsProductsPaymentTypeOptions';
import GetSavingsProductsTemplateAccountingRule from './GetSavingsProductsTemplateAccountingRule';
import GetSavingsProductsWithdrawalFeeTypeOptions from './GetSavingsProductsWithdrawalFeeTypeOptions';

/**
 * The GetSavingsProductsTemplateResponse model module.
 * @module model/GetSavingsProductsTemplateResponse
 * @version 1.0
 */
class GetSavingsProductsTemplateResponse {
    /**
     * Constructs a new <code>GetSavingsProductsTemplateResponse</code>.
     * GetSavingsProductsTemplateResponse
     * @alias module:model/GetSavingsProductsTemplateResponse
     */
    constructor() { 
        
        GetSavingsProductsTemplateResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSavingsProductsTemplateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSavingsProductsTemplateResponse} obj Optional instance to populate.
     * @return {module:model/GetSavingsProductsTemplateResponse} The populated <code>GetSavingsProductsTemplateResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSavingsProductsTemplateResponse();

            if (data.hasOwnProperty('currency')) {
                obj['currency'] = GetSavingsCurrency.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('interestCompoundingPeriodType')) {
                obj['interestCompoundingPeriodType'] = GetSavingsProductsInterestCompoundingPeriodType.constructFromObject(data['interestCompoundingPeriodType']);
            }
            if (data.hasOwnProperty('interestPostingPeriodType')) {
                obj['interestPostingPeriodType'] = GetSavingsProductsInterestPostingPeriodType.constructFromObject(data['interestPostingPeriodType']);
            }
            if (data.hasOwnProperty('interestCalculationType')) {
                obj['interestCalculationType'] = GetSavingsProductsInterestCalculationType.constructFromObject(data['interestCalculationType']);
            }
            if (data.hasOwnProperty('interestCalculationDaysInYearType')) {
                obj['interestCalculationDaysInYearType'] = GetSavingsProductsInterestCalculationDaysInYearType.constructFromObject(data['interestCalculationDaysInYearType']);
            }
            if (data.hasOwnProperty('accountingRule')) {
                obj['accountingRule'] = GetSavingsProductsTemplateAccountingRule.constructFromObject(data['accountingRule']);
            }
            if (data.hasOwnProperty('currencyOptions')) {
                obj['currencyOptions'] = ApiClient.convertToType(data['currencyOptions'], [GetSavingsCurrency]);
            }
            if (data.hasOwnProperty('interestCompoundingPeriodTypeOptions')) {
                obj['interestCompoundingPeriodTypeOptions'] = ApiClient.convertToType(data['interestCompoundingPeriodTypeOptions'], [GetSavingsProductsInterestCompoundingPeriodType]);
            }
            if (data.hasOwnProperty('interestPostingPeriodTypeOptions')) {
                obj['interestPostingPeriodTypeOptions'] = ApiClient.convertToType(data['interestPostingPeriodTypeOptions'], [GetSavingsProductsInterestPostingPeriodType]);
            }
            if (data.hasOwnProperty('interestCalculationTypeOptions')) {
                obj['interestCalculationTypeOptions'] = ApiClient.convertToType(data['interestCalculationTypeOptions'], [GetSavingsProductsInterestCalculationType]);
            }
            if (data.hasOwnProperty('interestCalculationDaysInYearTypeOptions')) {
                obj['interestCalculationDaysInYearTypeOptions'] = ApiClient.convertToType(data['interestCalculationDaysInYearTypeOptions'], [GetSavingsProductsInterestCalculationDaysInYearType]);
            }
            if (data.hasOwnProperty('lockinPeriodFrequencyTypeOptions')) {
                obj['lockinPeriodFrequencyTypeOptions'] = ApiClient.convertToType(data['lockinPeriodFrequencyTypeOptions'], [GetSavingsProductsLockinPeriodFrequencyTypeOptions]);
            }
            if (data.hasOwnProperty('withdrawalFeeTypeOptions')) {
                obj['withdrawalFeeTypeOptions'] = ApiClient.convertToType(data['withdrawalFeeTypeOptions'], [GetSavingsProductsWithdrawalFeeTypeOptions]);
            }
            if (data.hasOwnProperty('paymentTypeOptions')) {
                obj['paymentTypeOptions'] = ApiClient.convertToType(data['paymentTypeOptions'], [GetSavingsProductsPaymentTypeOptions]);
            }
            if (data.hasOwnProperty('accountingRuleOptions')) {
                obj['accountingRuleOptions'] = ApiClient.convertToType(data['accountingRuleOptions'], [GetSavingsProductsTemplateAccountingRule]);
            }
            if (data.hasOwnProperty('accountingMappingOptions')) {
                obj['accountingMappingOptions'] = ApiClient.convertToType(data['accountingMappingOptions'], [GetSavingsProductsAccountingMappingOptions]);
            }
            if (data.hasOwnProperty('chargeOptions')) {
                obj['chargeOptions'] = ApiClient.convertToType(data['chargeOptions'], [GetSavingsProductsChargeOptions]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/GetSavingsCurrency} currency
 */
GetSavingsProductsTemplateResponse.prototype['currency'] = undefined;

/**
 * @member {module:model/GetSavingsProductsInterestCompoundingPeriodType} interestCompoundingPeriodType
 */
GetSavingsProductsTemplateResponse.prototype['interestCompoundingPeriodType'] = undefined;

/**
 * @member {module:model/GetSavingsProductsInterestPostingPeriodType} interestPostingPeriodType
 */
GetSavingsProductsTemplateResponse.prototype['interestPostingPeriodType'] = undefined;

/**
 * @member {module:model/GetSavingsProductsInterestCalculationType} interestCalculationType
 */
GetSavingsProductsTemplateResponse.prototype['interestCalculationType'] = undefined;

/**
 * @member {module:model/GetSavingsProductsInterestCalculationDaysInYearType} interestCalculationDaysInYearType
 */
GetSavingsProductsTemplateResponse.prototype['interestCalculationDaysInYearType'] = undefined;

/**
 * @member {module:model/GetSavingsProductsTemplateAccountingRule} accountingRule
 */
GetSavingsProductsTemplateResponse.prototype['accountingRule'] = undefined;

/**
 * @member {Array.<module:model/GetSavingsCurrency>} currencyOptions
 */
GetSavingsProductsTemplateResponse.prototype['currencyOptions'] = undefined;

/**
 * @member {Array.<module:model/GetSavingsProductsInterestCompoundingPeriodType>} interestCompoundingPeriodTypeOptions
 */
GetSavingsProductsTemplateResponse.prototype['interestCompoundingPeriodTypeOptions'] = undefined;

/**
 * @member {Array.<module:model/GetSavingsProductsInterestPostingPeriodType>} interestPostingPeriodTypeOptions
 */
GetSavingsProductsTemplateResponse.prototype['interestPostingPeriodTypeOptions'] = undefined;

/**
 * @member {Array.<module:model/GetSavingsProductsInterestCalculationType>} interestCalculationTypeOptions
 */
GetSavingsProductsTemplateResponse.prototype['interestCalculationTypeOptions'] = undefined;

/**
 * @member {Array.<module:model/GetSavingsProductsInterestCalculationDaysInYearType>} interestCalculationDaysInYearTypeOptions
 */
GetSavingsProductsTemplateResponse.prototype['interestCalculationDaysInYearTypeOptions'] = undefined;

/**
 * @member {Array.<module:model/GetSavingsProductsLockinPeriodFrequencyTypeOptions>} lockinPeriodFrequencyTypeOptions
 */
GetSavingsProductsTemplateResponse.prototype['lockinPeriodFrequencyTypeOptions'] = undefined;

/**
 * @member {Array.<module:model/GetSavingsProductsWithdrawalFeeTypeOptions>} withdrawalFeeTypeOptions
 */
GetSavingsProductsTemplateResponse.prototype['withdrawalFeeTypeOptions'] = undefined;

/**
 * @member {Array.<module:model/GetSavingsProductsPaymentTypeOptions>} paymentTypeOptions
 */
GetSavingsProductsTemplateResponse.prototype['paymentTypeOptions'] = undefined;

/**
 * @member {Array.<module:model/GetSavingsProductsTemplateAccountingRule>} accountingRuleOptions
 */
GetSavingsProductsTemplateResponse.prototype['accountingRuleOptions'] = undefined;

/**
 * @member {Array.<module:model/GetSavingsProductsAccountingMappingOptions>} accountingMappingOptions
 */
GetSavingsProductsTemplateResponse.prototype['accountingMappingOptions'] = undefined;

/**
 * @member {Array.<module:model/GetSavingsProductsChargeOptions>} chargeOptions
 */
GetSavingsProductsTemplateResponse.prototype['chargeOptions'] = undefined;






export default GetSavingsProductsTemplateResponse;

