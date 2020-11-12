

import ApiClient from '../ApiClient';
import GetSavingsCurrency from './GetSavingsCurrency';
import GetSavingsProductsAccountingMappings from './GetSavingsProductsAccountingMappings';
import GetSavingsProductsAccountingRule from './GetSavingsProductsAccountingRule';
import GetSavingsProductsFeeToIncomeAccountMappings from './GetSavingsProductsFeeToIncomeAccountMappings';
import GetSavingsProductsInterestCalculationDaysInYearType from './GetSavingsProductsInterestCalculationDaysInYearType';
import GetSavingsProductsInterestCalculationType from './GetSavingsProductsInterestCalculationType';
import GetSavingsProductsInterestCompoundingPeriodType from './GetSavingsProductsInterestCompoundingPeriodType';
import GetSavingsProductsInterestPostingPeriodType from './GetSavingsProductsInterestPostingPeriodType';
import GetSavingsProductsPaymentChannelToFundSourceMappings from './GetSavingsProductsPaymentChannelToFundSourceMappings';
import GetSavingsProductsPenaltyToIncomeAccountMappings from './GetSavingsProductsPenaltyToIncomeAccountMappings';

/**
 * The GetSavingsProductsProductIdResponse model module.
 * @module model/GetSavingsProductsProductIdResponse
 * @version 1.0
 */
class GetSavingsProductsProductIdResponse {
    /**
     * Constructs a new <code>GetSavingsProductsProductIdResponse</code>.
     * GetSavingsProductsProductIdResponse
     * @alias module:model/GetSavingsProductsProductIdResponse
     */
    constructor() { 
        
        GetSavingsProductsProductIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSavingsProductsProductIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSavingsProductsProductIdResponse} obj Optional instance to populate.
     * @return {module:model/GetSavingsProductsProductIdResponse} The populated <code>GetSavingsProductsProductIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSavingsProductsProductIdResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('shortName')) {
                obj['shortName'] = ApiClient.convertToType(data['shortName'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = GetSavingsCurrency.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('nominalAnnualInterestRate')) {
                obj['nominalAnnualInterestRate'] = ApiClient.convertToType(data['nominalAnnualInterestRate'], 'Number');
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
            if (data.hasOwnProperty('withdrawalFeeForTransfers')) {
                obj['withdrawalFeeForTransfers'] = ApiClient.convertToType(data['withdrawalFeeForTransfers'], 'Boolean');
            }
            if (data.hasOwnProperty('accountingRule')) {
                obj['accountingRule'] = GetSavingsProductsAccountingRule.constructFromObject(data['accountingRule']);
            }
            if (data.hasOwnProperty('accountingMappings')) {
                obj['accountingMappings'] = GetSavingsProductsAccountingMappings.constructFromObject(data['accountingMappings']);
            }
            if (data.hasOwnProperty('paymentChannelToFundSourceMappings')) {
                obj['paymentChannelToFundSourceMappings'] = ApiClient.convertToType(data['paymentChannelToFundSourceMappings'], [GetSavingsProductsPaymentChannelToFundSourceMappings]);
            }
            if (data.hasOwnProperty('feeToIncomeAccountMappings')) {
                obj['feeToIncomeAccountMappings'] = ApiClient.convertToType(data['feeToIncomeAccountMappings'], [GetSavingsProductsFeeToIncomeAccountMappings]);
            }
            if (data.hasOwnProperty('penaltyToIncomeAccountMappings')) {
                obj['penaltyToIncomeAccountMappings'] = ApiClient.convertToType(data['penaltyToIncomeAccountMappings'], [GetSavingsProductsPenaltyToIncomeAccountMappings]);
            }
            if (data.hasOwnProperty('charges')) {
                obj['charges'] = ApiClient.convertToType(data['charges'], ['Number']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetSavingsProductsProductIdResponse.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetSavingsProductsProductIdResponse.prototype['name'] = undefined;

/**
 * @member {String} shortName
 */
GetSavingsProductsProductIdResponse.prototype['shortName'] = undefined;

/**
 * @member {String} description
 */
GetSavingsProductsProductIdResponse.prototype['description'] = undefined;

/**
 * @member {module:model/GetSavingsCurrency} currency
 */
GetSavingsProductsProductIdResponse.prototype['currency'] = undefined;

/**
 * @member {Number} nominalAnnualInterestRate
 */
GetSavingsProductsProductIdResponse.prototype['nominalAnnualInterestRate'] = undefined;

/**
 * @member {module:model/GetSavingsProductsInterestCompoundingPeriodType} interestCompoundingPeriodType
 */
GetSavingsProductsProductIdResponse.prototype['interestCompoundingPeriodType'] = undefined;

/**
 * @member {module:model/GetSavingsProductsInterestPostingPeriodType} interestPostingPeriodType
 */
GetSavingsProductsProductIdResponse.prototype['interestPostingPeriodType'] = undefined;

/**
 * @member {module:model/GetSavingsProductsInterestCalculationType} interestCalculationType
 */
GetSavingsProductsProductIdResponse.prototype['interestCalculationType'] = undefined;

/**
 * @member {module:model/GetSavingsProductsInterestCalculationDaysInYearType} interestCalculationDaysInYearType
 */
GetSavingsProductsProductIdResponse.prototype['interestCalculationDaysInYearType'] = undefined;

/**
 * @member {Boolean} withdrawalFeeForTransfers
 */
GetSavingsProductsProductIdResponse.prototype['withdrawalFeeForTransfers'] = undefined;

/**
 * @member {module:model/GetSavingsProductsAccountingRule} accountingRule
 */
GetSavingsProductsProductIdResponse.prototype['accountingRule'] = undefined;

/**
 * @member {module:model/GetSavingsProductsAccountingMappings} accountingMappings
 */
GetSavingsProductsProductIdResponse.prototype['accountingMappings'] = undefined;

/**
 * @member {Array.<module:model/GetSavingsProductsPaymentChannelToFundSourceMappings>} paymentChannelToFundSourceMappings
 */
GetSavingsProductsProductIdResponse.prototype['paymentChannelToFundSourceMappings'] = undefined;

/**
 * @member {Array.<module:model/GetSavingsProductsFeeToIncomeAccountMappings>} feeToIncomeAccountMappings
 */
GetSavingsProductsProductIdResponse.prototype['feeToIncomeAccountMappings'] = undefined;

/**
 * @member {Array.<module:model/GetSavingsProductsPenaltyToIncomeAccountMappings>} penaltyToIncomeAccountMappings
 */
GetSavingsProductsProductIdResponse.prototype['penaltyToIncomeAccountMappings'] = undefined;

/**
 * @member {Array.<Number>} charges
 */
GetSavingsProductsProductIdResponse.prototype['charges'] = undefined;






export default GetSavingsProductsProductIdResponse;

