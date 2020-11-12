

import ApiClient from '../ApiClient';
import GetRecurringDepositProductsInterestCalculationDaysInYearType from './GetRecurringDepositProductsInterestCalculationDaysInYearType';
import GetRecurringDepositProductsInterestCalculationType from './GetRecurringDepositProductsInterestCalculationType';
import GetRecurringDepositProductsInterestPostingPeriodType from './GetRecurringDepositProductsInterestPostingPeriodType';
import GetRecurringDepositProductsProductIdAccountingMappings from './GetRecurringDepositProductsProductIdAccountingMappings';
import GetRecurringDepositProductsProductIdActiveChart from './GetRecurringDepositProductsProductIdActiveChart';
import GetRecurringDepositProductsProductIdCurrency from './GetRecurringDepositProductsProductIdCurrency';
import GetRecurringDepositProductsProductIdFeeToIncomeAccountMappings from './GetRecurringDepositProductsProductIdFeeToIncomeAccountMappings';
import GetRecurringDepositProductsProductIdInterestCompoundingPeriodType from './GetRecurringDepositProductsProductIdInterestCompoundingPeriodType';
import GetRecurringDepositProductsProductIdMaxDepositTermType from './GetRecurringDepositProductsProductIdMaxDepositTermType';
import GetRecurringDepositProductsProductIdMinDepositTermType from './GetRecurringDepositProductsProductIdMinDepositTermType';
import GetRecurringDepositProductsProductIdPenaltyToIncomeAccountMappings from './GetRecurringDepositProductsProductIdPenaltyToIncomeAccountMappings';
import GetRecurringDepositProductsProductIdPreClosurePenalInterestOnType from './GetRecurringDepositProductsProductIdPreClosurePenalInterestOnType';
import GetRecurringDepositProductsRecurringDepositFrequencyType from './GetRecurringDepositProductsRecurringDepositFrequencyType';

/**
 * The GetRecurringDepositProductsProductIdResponse model module.
 * @module model/GetRecurringDepositProductsProductIdResponse
 * @version 1.0
 */
class GetRecurringDepositProductsProductIdResponse {
    /**
     * Constructs a new <code>GetRecurringDepositProductsProductIdResponse</code>.
     * GetRecurringDepositProductsProductIdResponse
     * @alias module:model/GetRecurringDepositProductsProductIdResponse
     */
    constructor() { 
        
        GetRecurringDepositProductsProductIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetRecurringDepositProductsProductIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetRecurringDepositProductsProductIdResponse} obj Optional instance to populate.
     * @return {module:model/GetRecurringDepositProductsProductIdResponse} The populated <code>GetRecurringDepositProductsProductIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRecurringDepositProductsProductIdResponse();

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
                obj['currency'] = GetRecurringDepositProductsProductIdCurrency.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('interestCompoundingPeriodType')) {
                obj['interestCompoundingPeriodType'] = GetRecurringDepositProductsProductIdInterestCompoundingPeriodType.constructFromObject(data['interestCompoundingPeriodType']);
            }
            if (data.hasOwnProperty('interestPostingPeriodType')) {
                obj['interestPostingPeriodType'] = GetRecurringDepositProductsInterestPostingPeriodType.constructFromObject(data['interestPostingPeriodType']);
            }
            if (data.hasOwnProperty('interestCalculationType')) {
                obj['interestCalculationType'] = GetRecurringDepositProductsInterestCalculationType.constructFromObject(data['interestCalculationType']);
            }
            if (data.hasOwnProperty('interestCalculationDaysInYearType')) {
                obj['interestCalculationDaysInYearType'] = GetRecurringDepositProductsInterestCalculationDaysInYearType.constructFromObject(data['interestCalculationDaysInYearType']);
            }
            if (data.hasOwnProperty('accountingMappings')) {
                obj['accountingMappings'] = GetRecurringDepositProductsProductIdAccountingMappings.constructFromObject(data['accountingMappings']);
            }
            if (data.hasOwnProperty('feeToIncomeAccountMappings')) {
                obj['feeToIncomeAccountMappings'] = ApiClient.convertToType(data['feeToIncomeAccountMappings'], [GetRecurringDepositProductsProductIdFeeToIncomeAccountMappings]);
            }
            if (data.hasOwnProperty('penaltyToIncomeAccountMappings')) {
                obj['penaltyToIncomeAccountMappings'] = ApiClient.convertToType(data['penaltyToIncomeAccountMappings'], [GetRecurringDepositProductsProductIdPenaltyToIncomeAccountMappings]);
            }
            if (data.hasOwnProperty('recurringDepositFrequency')) {
                obj['recurringDepositFrequency'] = ApiClient.convertToType(data['recurringDepositFrequency'], 'Number');
            }
            if (data.hasOwnProperty('recurringDepositFrequencyType')) {
                obj['recurringDepositFrequencyType'] = GetRecurringDepositProductsRecurringDepositFrequencyType.constructFromObject(data['recurringDepositFrequencyType']);
            }
            if (data.hasOwnProperty('preClosurePenalApplicable')) {
                obj['preClosurePenalApplicable'] = ApiClient.convertToType(data['preClosurePenalApplicable'], 'Boolean');
            }
            if (data.hasOwnProperty('preClosurePenalInterest')) {
                obj['preClosurePenalInterest'] = ApiClient.convertToType(data['preClosurePenalInterest'], 'Number');
            }
            if (data.hasOwnProperty('preClosurePenalInterestOnType')) {
                obj['preClosurePenalInterestOnType'] = GetRecurringDepositProductsProductIdPreClosurePenalInterestOnType.constructFromObject(data['preClosurePenalInterestOnType']);
            }
            if (data.hasOwnProperty('minDepositTerm')) {
                obj['minDepositTerm'] = ApiClient.convertToType(data['minDepositTerm'], 'Number');
            }
            if (data.hasOwnProperty('minDepositTermType')) {
                obj['minDepositTermType'] = GetRecurringDepositProductsProductIdMinDepositTermType.constructFromObject(data['minDepositTermType']);
            }
            if (data.hasOwnProperty('maxDepositTerm')) {
                obj['maxDepositTerm'] = ApiClient.convertToType(data['maxDepositTerm'], 'Number');
            }
            if (data.hasOwnProperty('maxDepositTermType')) {
                obj['maxDepositTermType'] = GetRecurringDepositProductsProductIdMaxDepositTermType.constructFromObject(data['maxDepositTermType']);
            }
            if (data.hasOwnProperty('activeChart')) {
                obj['activeChart'] = GetRecurringDepositProductsProductIdActiveChart.constructFromObject(data['activeChart']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetRecurringDepositProductsProductIdResponse.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetRecurringDepositProductsProductIdResponse.prototype['name'] = undefined;

/**
 * @member {String} shortName
 */
GetRecurringDepositProductsProductIdResponse.prototype['shortName'] = undefined;

/**
 * @member {String} description
 */
GetRecurringDepositProductsProductIdResponse.prototype['description'] = undefined;

/**
 * @member {module:model/GetRecurringDepositProductsProductIdCurrency} currency
 */
GetRecurringDepositProductsProductIdResponse.prototype['currency'] = undefined;

/**
 * @member {module:model/GetRecurringDepositProductsProductIdInterestCompoundingPeriodType} interestCompoundingPeriodType
 */
GetRecurringDepositProductsProductIdResponse.prototype['interestCompoundingPeriodType'] = undefined;

/**
 * @member {module:model/GetRecurringDepositProductsInterestPostingPeriodType} interestPostingPeriodType
 */
GetRecurringDepositProductsProductIdResponse.prototype['interestPostingPeriodType'] = undefined;

/**
 * @member {module:model/GetRecurringDepositProductsInterestCalculationType} interestCalculationType
 */
GetRecurringDepositProductsProductIdResponse.prototype['interestCalculationType'] = undefined;

/**
 * @member {module:model/GetRecurringDepositProductsInterestCalculationDaysInYearType} interestCalculationDaysInYearType
 */
GetRecurringDepositProductsProductIdResponse.prototype['interestCalculationDaysInYearType'] = undefined;

/**
 * @member {module:model/GetRecurringDepositProductsProductIdAccountingMappings} accountingMappings
 */
GetRecurringDepositProductsProductIdResponse.prototype['accountingMappings'] = undefined;

/**
 * @member {Array.<module:model/GetRecurringDepositProductsProductIdFeeToIncomeAccountMappings>} feeToIncomeAccountMappings
 */
GetRecurringDepositProductsProductIdResponse.prototype['feeToIncomeAccountMappings'] = undefined;

/**
 * @member {Array.<module:model/GetRecurringDepositProductsProductIdPenaltyToIncomeAccountMappings>} penaltyToIncomeAccountMappings
 */
GetRecurringDepositProductsProductIdResponse.prototype['penaltyToIncomeAccountMappings'] = undefined;

/**
 * @member {Number} recurringDepositFrequency
 */
GetRecurringDepositProductsProductIdResponse.prototype['recurringDepositFrequency'] = undefined;

/**
 * @member {module:model/GetRecurringDepositProductsRecurringDepositFrequencyType} recurringDepositFrequencyType
 */
GetRecurringDepositProductsProductIdResponse.prototype['recurringDepositFrequencyType'] = undefined;

/**
 * @member {Boolean} preClosurePenalApplicable
 */
GetRecurringDepositProductsProductIdResponse.prototype['preClosurePenalApplicable'] = undefined;

/**
 * @member {Number} preClosurePenalInterest
 */
GetRecurringDepositProductsProductIdResponse.prototype['preClosurePenalInterest'] = undefined;

/**
 * @member {module:model/GetRecurringDepositProductsProductIdPreClosurePenalInterestOnType} preClosurePenalInterestOnType
 */
GetRecurringDepositProductsProductIdResponse.prototype['preClosurePenalInterestOnType'] = undefined;

/**
 * @member {Number} minDepositTerm
 */
GetRecurringDepositProductsProductIdResponse.prototype['minDepositTerm'] = undefined;

/**
 * @member {module:model/GetRecurringDepositProductsProductIdMinDepositTermType} minDepositTermType
 */
GetRecurringDepositProductsProductIdResponse.prototype['minDepositTermType'] = undefined;

/**
 * @member {Number} maxDepositTerm
 */
GetRecurringDepositProductsProductIdResponse.prototype['maxDepositTerm'] = undefined;

/**
 * @member {module:model/GetRecurringDepositProductsProductIdMaxDepositTermType} maxDepositTermType
 */
GetRecurringDepositProductsProductIdResponse.prototype['maxDepositTermType'] = undefined;

/**
 * @member {module:model/GetRecurringDepositProductsProductIdActiveChart} activeChart
 */
GetRecurringDepositProductsProductIdResponse.prototype['activeChart'] = undefined;






export default GetRecurringDepositProductsProductIdResponse;

