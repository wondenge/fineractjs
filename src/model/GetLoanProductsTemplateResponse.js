

import ApiClient from '../ApiClient';
import GetLoanProductsAccountingMappingOptions from './GetLoanProductsAccountingMappingOptions';
import GetLoanProductsAccountingRule from './GetLoanProductsAccountingRule';
import GetLoanProductsAmortizationType from './GetLoanProductsAmortizationType';
import GetLoanProductsChargeOptions from './GetLoanProductsChargeOptions';
import GetLoanProductsCurrencyOptions from './GetLoanProductsCurrencyOptions';
import GetLoanProductsDaysInYearTemplateType from './GetLoanProductsDaysInYearTemplateType';
import GetLoanProductsInterestRateTemplateFrequencyType from './GetLoanProductsInterestRateTemplateFrequencyType';
import GetLoanProductsInterestRecalculationCompoundingFrequencyType from './GetLoanProductsInterestRecalculationCompoundingFrequencyType';
import GetLoanProductsInterestRecalculationCompoundingType from './GetLoanProductsInterestRecalculationCompoundingType';
import GetLoanProductsInterestRecalculationTemplateData from './GetLoanProductsInterestRecalculationTemplateData';
import GetLoanProductsInterestTemplateType from './GetLoanProductsInterestTemplateType';
import GetLoanProductsPaymentTypeOptions from './GetLoanProductsPaymentTypeOptions';
import GetLoanProductsPreClosureInterestCalculationStrategy from './GetLoanProductsPreClosureInterestCalculationStrategy';
import GetLoanProductsRepaymentTemplateFrequencyType from './GetLoanProductsRepaymentTemplateFrequencyType';
import GetLoanProductsRescheduleStrategyType from './GetLoanProductsRescheduleStrategyType';
import GetLoanProductsTemplateCurrency from './GetLoanProductsTemplateCurrency';
import GetLoanProductsTransactionProcessingStrategyOptions from './GetLoanProductsTransactionProcessingStrategyOptions';
import GetLoanProductsValueConditionTypeOptions from './GetLoanProductsValueConditionTypeOptions';
import GetLoansProductsDaysInMonthTemplateType from './GetLoansProductsDaysInMonthTemplateType';
import GetLoansProductsInterestCalculationPeriodType from './GetLoansProductsInterestCalculationPeriodType';

/**
 * The GetLoanProductsTemplateResponse model module.
 * @module model/GetLoanProductsTemplateResponse
 * @version 1.0
 */
class GetLoanProductsTemplateResponse {
    /**
     * Constructs a new <code>GetLoanProductsTemplateResponse</code>.
     * GetLoanProductsTemplateResponse
     * @alias module:model/GetLoanProductsTemplateResponse
     */
    constructor() { 
        
        GetLoanProductsTemplateResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoanProductsTemplateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoanProductsTemplateResponse} obj Optional instance to populate.
     * @return {module:model/GetLoanProductsTemplateResponse} The populated <code>GetLoanProductsTemplateResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoanProductsTemplateResponse();

            if (data.hasOwnProperty('includeInBorrowerCycle')) {
                obj['includeInBorrowerCycle'] = ApiClient.convertToType(data['includeInBorrowerCycle'], 'Boolean');
            }
            if (data.hasOwnProperty('useBorrowerCycle')) {
                obj['useBorrowerCycle'] = ApiClient.convertToType(data['useBorrowerCycle'], 'Boolean');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = GetLoanProductsTemplateCurrency.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('repaymentFrequencyType')) {
                obj['repaymentFrequencyType'] = GetLoanProductsRepaymentTemplateFrequencyType.constructFromObject(data['repaymentFrequencyType']);
            }
            if (data.hasOwnProperty('interestRateFrequencyType')) {
                obj['interestRateFrequencyType'] = GetLoanProductsInterestRateTemplateFrequencyType.constructFromObject(data['interestRateFrequencyType']);
            }
            if (data.hasOwnProperty('amortizationType')) {
                obj['amortizationType'] = GetLoanProductsAmortizationType.constructFromObject(data['amortizationType']);
            }
            if (data.hasOwnProperty('interestType')) {
                obj['interestType'] = GetLoanProductsInterestTemplateType.constructFromObject(data['interestType']);
            }
            if (data.hasOwnProperty('interestCalculationPeriodType')) {
                obj['interestCalculationPeriodType'] = GetLoansProductsInterestCalculationPeriodType.constructFromObject(data['interestCalculationPeriodType']);
            }
            if (data.hasOwnProperty('principalVariationsForBorrowerCycle')) {
                obj['principalVariationsForBorrowerCycle'] = ApiClient.convertToType(data['principalVariationsForBorrowerCycle'], ['Number']);
            }
            if (data.hasOwnProperty('interestRateVariationsForBorrowerCycle')) {
                obj['interestRateVariationsForBorrowerCycle'] = ApiClient.convertToType(data['interestRateVariationsForBorrowerCycle'], ['Number']);
            }
            if (data.hasOwnProperty('numberOfRepaymentVariationsForBorrowerCycle')) {
                obj['numberOfRepaymentVariationsForBorrowerCycle'] = ApiClient.convertToType(data['numberOfRepaymentVariationsForBorrowerCycle'], ['Number']);
            }
            if (data.hasOwnProperty('accountingRule')) {
                obj['accountingRule'] = GetLoanProductsAccountingRule.constructFromObject(data['accountingRule']);
            }
            if (data.hasOwnProperty('daysInMonthType')) {
                obj['daysInMonthType'] = GetLoansProductsDaysInMonthTemplateType.constructFromObject(data['daysInMonthType']);
            }
            if (data.hasOwnProperty('daysInYearType')) {
                obj['daysInYearType'] = GetLoanProductsDaysInYearTemplateType.constructFromObject(data['daysInYearType']);
            }
            if (data.hasOwnProperty('isInterestRecalculationEnabled')) {
                obj['isInterestRecalculationEnabled'] = ApiClient.convertToType(data['isInterestRecalculationEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('interestRecalculationData')) {
                obj['interestRecalculationData'] = GetLoanProductsInterestRecalculationTemplateData.constructFromObject(data['interestRecalculationData']);
            }
            if (data.hasOwnProperty('paymentTypeOptions')) {
                obj['paymentTypeOptions'] = ApiClient.convertToType(data['paymentTypeOptions'], [GetLoanProductsPaymentTypeOptions]);
            }
            if (data.hasOwnProperty('currencyOptions')) {
                obj['currencyOptions'] = ApiClient.convertToType(data['currencyOptions'], [GetLoanProductsCurrencyOptions]);
            }
            if (data.hasOwnProperty('repaymentFrequencyTypeOptions')) {
                obj['repaymentFrequencyTypeOptions'] = ApiClient.convertToType(data['repaymentFrequencyTypeOptions'], [GetLoanProductsRepaymentTemplateFrequencyType]);
            }
            if (data.hasOwnProperty('preClosureInterestCalculationStrategyOptions')) {
                obj['preClosureInterestCalculationStrategyOptions'] = ApiClient.convertToType(data['preClosureInterestCalculationStrategyOptions'], [GetLoanProductsPreClosureInterestCalculationStrategy]);
            }
            if (data.hasOwnProperty('interestRateFrequencyTypeOptions')) {
                obj['interestRateFrequencyTypeOptions'] = ApiClient.convertToType(data['interestRateFrequencyTypeOptions'], [GetLoanProductsInterestRateTemplateFrequencyType]);
            }
            if (data.hasOwnProperty('amortizationTypeOptions')) {
                obj['amortizationTypeOptions'] = ApiClient.convertToType(data['amortizationTypeOptions'], [GetLoanProductsAmortizationType]);
            }
            if (data.hasOwnProperty('interestTypeOptions')) {
                obj['interestTypeOptions'] = ApiClient.convertToType(data['interestTypeOptions'], [GetLoanProductsInterestTemplateType]);
            }
            if (data.hasOwnProperty('interestCalculationPeriodTypeOptions')) {
                obj['interestCalculationPeriodTypeOptions'] = ApiClient.convertToType(data['interestCalculationPeriodTypeOptions'], [GetLoansProductsInterestCalculationPeriodType]);
            }
            if (data.hasOwnProperty('transactionProcessingStrategyOptions')) {
                obj['transactionProcessingStrategyOptions'] = ApiClient.convertToType(data['transactionProcessingStrategyOptions'], [GetLoanProductsTransactionProcessingStrategyOptions]);
            }
            if (data.hasOwnProperty('chargeOptions')) {
                obj['chargeOptions'] = ApiClient.convertToType(data['chargeOptions'], [GetLoanProductsChargeOptions]);
            }
            if (data.hasOwnProperty('accountingRuleOptions')) {
                obj['accountingRuleOptions'] = ApiClient.convertToType(data['accountingRuleOptions'], [GetLoanProductsAccountingRule]);
            }
            if (data.hasOwnProperty('accountingMappingOptions')) {
                obj['accountingMappingOptions'] = GetLoanProductsAccountingMappingOptions.constructFromObject(data['accountingMappingOptions']);
            }
            if (data.hasOwnProperty('valueConditionTypeOptions')) {
                obj['valueConditionTypeOptions'] = ApiClient.convertToType(data['valueConditionTypeOptions'], [GetLoanProductsValueConditionTypeOptions]);
            }
            if (data.hasOwnProperty('daysInMonthTypeOptions')) {
                obj['daysInMonthTypeOptions'] = ApiClient.convertToType(data['daysInMonthTypeOptions'], [GetLoansProductsDaysInMonthTemplateType]);
            }
            if (data.hasOwnProperty('daysInYearTypeOptions')) {
                obj['daysInYearTypeOptions'] = ApiClient.convertToType(data['daysInYearTypeOptions'], [GetLoanProductsInterestTemplateType]);
            }
            if (data.hasOwnProperty('interestRecalculationCompoundingTypeOptions')) {
                obj['interestRecalculationCompoundingTypeOptions'] = ApiClient.convertToType(data['interestRecalculationCompoundingTypeOptions'], [GetLoanProductsInterestRecalculationCompoundingType]);
            }
            if (data.hasOwnProperty('rescheduleStrategyTypeOptions')) {
                obj['rescheduleStrategyTypeOptions'] = ApiClient.convertToType(data['rescheduleStrategyTypeOptions'], [GetLoanProductsRescheduleStrategyType]);
            }
            if (data.hasOwnProperty('interestRecalculationFrequencyTypeOptions')) {
                obj['interestRecalculationFrequencyTypeOptions'] = ApiClient.convertToType(data['interestRecalculationFrequencyTypeOptions'], [GetLoanProductsInterestRecalculationCompoundingFrequencyType]);
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} includeInBorrowerCycle
 */
GetLoanProductsTemplateResponse.prototype['includeInBorrowerCycle'] = undefined;

/**
 * @member {Boolean} useBorrowerCycle
 */
GetLoanProductsTemplateResponse.prototype['useBorrowerCycle'] = undefined;

/**
 * @member {module:model/GetLoanProductsTemplateCurrency} currency
 */
GetLoanProductsTemplateResponse.prototype['currency'] = undefined;

/**
 * @member {module:model/GetLoanProductsRepaymentTemplateFrequencyType} repaymentFrequencyType
 */
GetLoanProductsTemplateResponse.prototype['repaymentFrequencyType'] = undefined;

/**
 * @member {module:model/GetLoanProductsInterestRateTemplateFrequencyType} interestRateFrequencyType
 */
GetLoanProductsTemplateResponse.prototype['interestRateFrequencyType'] = undefined;

/**
 * @member {module:model/GetLoanProductsAmortizationType} amortizationType
 */
GetLoanProductsTemplateResponse.prototype['amortizationType'] = undefined;

/**
 * @member {module:model/GetLoanProductsInterestTemplateType} interestType
 */
GetLoanProductsTemplateResponse.prototype['interestType'] = undefined;

/**
 * @member {module:model/GetLoansProductsInterestCalculationPeriodType} interestCalculationPeriodType
 */
GetLoanProductsTemplateResponse.prototype['interestCalculationPeriodType'] = undefined;

/**
 * @member {Array.<Number>} principalVariationsForBorrowerCycle
 */
GetLoanProductsTemplateResponse.prototype['principalVariationsForBorrowerCycle'] = undefined;

/**
 * @member {Array.<Number>} interestRateVariationsForBorrowerCycle
 */
GetLoanProductsTemplateResponse.prototype['interestRateVariationsForBorrowerCycle'] = undefined;

/**
 * @member {Array.<Number>} numberOfRepaymentVariationsForBorrowerCycle
 */
GetLoanProductsTemplateResponse.prototype['numberOfRepaymentVariationsForBorrowerCycle'] = undefined;

/**
 * @member {module:model/GetLoanProductsAccountingRule} accountingRule
 */
GetLoanProductsTemplateResponse.prototype['accountingRule'] = undefined;

/**
 * @member {module:model/GetLoansProductsDaysInMonthTemplateType} daysInMonthType
 */
GetLoanProductsTemplateResponse.prototype['daysInMonthType'] = undefined;

/**
 * @member {module:model/GetLoanProductsDaysInYearTemplateType} daysInYearType
 */
GetLoanProductsTemplateResponse.prototype['daysInYearType'] = undefined;

/**
 * @member {Boolean} isInterestRecalculationEnabled
 */
GetLoanProductsTemplateResponse.prototype['isInterestRecalculationEnabled'] = undefined;

/**
 * @member {module:model/GetLoanProductsInterestRecalculationTemplateData} interestRecalculationData
 */
GetLoanProductsTemplateResponse.prototype['interestRecalculationData'] = undefined;

/**
 * @member {Array.<module:model/GetLoanProductsPaymentTypeOptions>} paymentTypeOptions
 */
GetLoanProductsTemplateResponse.prototype['paymentTypeOptions'] = undefined;

/**
 * @member {Array.<module:model/GetLoanProductsCurrencyOptions>} currencyOptions
 */
GetLoanProductsTemplateResponse.prototype['currencyOptions'] = undefined;

/**
 * @member {Array.<module:model/GetLoanProductsRepaymentTemplateFrequencyType>} repaymentFrequencyTypeOptions
 */
GetLoanProductsTemplateResponse.prototype['repaymentFrequencyTypeOptions'] = undefined;

/**
 * @member {Array.<module:model/GetLoanProductsPreClosureInterestCalculationStrategy>} preClosureInterestCalculationStrategyOptions
 */
GetLoanProductsTemplateResponse.prototype['preClosureInterestCalculationStrategyOptions'] = undefined;

/**
 * @member {Array.<module:model/GetLoanProductsInterestRateTemplateFrequencyType>} interestRateFrequencyTypeOptions
 */
GetLoanProductsTemplateResponse.prototype['interestRateFrequencyTypeOptions'] = undefined;

/**
 * @member {Array.<module:model/GetLoanProductsAmortizationType>} amortizationTypeOptions
 */
GetLoanProductsTemplateResponse.prototype['amortizationTypeOptions'] = undefined;

/**
 * @member {Array.<module:model/GetLoanProductsInterestTemplateType>} interestTypeOptions
 */
GetLoanProductsTemplateResponse.prototype['interestTypeOptions'] = undefined;

/**
 * @member {Array.<module:model/GetLoansProductsInterestCalculationPeriodType>} interestCalculationPeriodTypeOptions
 */
GetLoanProductsTemplateResponse.prototype['interestCalculationPeriodTypeOptions'] = undefined;

/**
 * @member {Array.<module:model/GetLoanProductsTransactionProcessingStrategyOptions>} transactionProcessingStrategyOptions
 */
GetLoanProductsTemplateResponse.prototype['transactionProcessingStrategyOptions'] = undefined;

/**
 * @member {Array.<module:model/GetLoanProductsChargeOptions>} chargeOptions
 */
GetLoanProductsTemplateResponse.prototype['chargeOptions'] = undefined;

/**
 * @member {Array.<module:model/GetLoanProductsAccountingRule>} accountingRuleOptions
 */
GetLoanProductsTemplateResponse.prototype['accountingRuleOptions'] = undefined;

/**
 * @member {module:model/GetLoanProductsAccountingMappingOptions} accountingMappingOptions
 */
GetLoanProductsTemplateResponse.prototype['accountingMappingOptions'] = undefined;

/**
 * @member {Array.<module:model/GetLoanProductsValueConditionTypeOptions>} valueConditionTypeOptions
 */
GetLoanProductsTemplateResponse.prototype['valueConditionTypeOptions'] = undefined;

/**
 * @member {Array.<module:model/GetLoansProductsDaysInMonthTemplateType>} daysInMonthTypeOptions
 */
GetLoanProductsTemplateResponse.prototype['daysInMonthTypeOptions'] = undefined;

/**
 * @member {Array.<module:model/GetLoanProductsInterestTemplateType>} daysInYearTypeOptions
 */
GetLoanProductsTemplateResponse.prototype['daysInYearTypeOptions'] = undefined;

/**
 * @member {Array.<module:model/GetLoanProductsInterestRecalculationCompoundingType>} interestRecalculationCompoundingTypeOptions
 */
GetLoanProductsTemplateResponse.prototype['interestRecalculationCompoundingTypeOptions'] = undefined;

/**
 * @member {Array.<module:model/GetLoanProductsRescheduleStrategyType>} rescheduleStrategyTypeOptions
 */
GetLoanProductsTemplateResponse.prototype['rescheduleStrategyTypeOptions'] = undefined;

/**
 * @member {Array.<module:model/GetLoanProductsInterestRecalculationCompoundingFrequencyType>} interestRecalculationFrequencyTypeOptions
 */
GetLoanProductsTemplateResponse.prototype['interestRecalculationFrequencyTypeOptions'] = undefined;






export default GetLoanProductsTemplateResponse;

