

import ApiClient from '../ApiClient';
import GetFixedDepositProductsInterestCalculationDaysInYearType from './GetFixedDepositProductsInterestCalculationDaysInYearType';
import GetFixedDepositProductsInterestCalculationType from './GetFixedDepositProductsInterestCalculationType';
import GetFixedDepositProductsInterestPostingPeriodType from './GetFixedDepositProductsInterestPostingPeriodType';
import GetFixedDepositProductsProductIdAccountingMappings from './GetFixedDepositProductsProductIdAccountingMappings';
import GetFixedDepositProductsProductIdActiveChart from './GetFixedDepositProductsProductIdActiveChart';
import GetFixedDepositProductsProductIdCurrency from './GetFixedDepositProductsProductIdCurrency';
import GetFixedDepositProductsProductIdFeeToIncomeAccountMappings from './GetFixedDepositProductsProductIdFeeToIncomeAccountMappings';
import GetFixedDepositProductsProductIdInterestCompoundingPeriodType from './GetFixedDepositProductsProductIdInterestCompoundingPeriodType';
import GetFixedDepositProductsProductIdMaxDepositTermType from './GetFixedDepositProductsProductIdMaxDepositTermType';
import GetFixedDepositProductsProductIdMinDepositTermType from './GetFixedDepositProductsProductIdMinDepositTermType';
import GetFixedDepositProductsProductIdPenaltyToIncomeAccountMappings from './GetFixedDepositProductsProductIdPenaltyToIncomeAccountMappings';
import GetFixedDepositProductsProductIdPreClosurePenalInterestOnType from './GetFixedDepositProductsProductIdPreClosurePenalInterestOnType';

/**
 * The GetFixedDepositProductsProductIdResponse model module.
 * @module model/GetFixedDepositProductsProductIdResponse
 * @version 1.0
 */
class GetFixedDepositProductsProductIdResponse {
    /**
     * Constructs a new <code>GetFixedDepositProductsProductIdResponse</code>.
     * GetFixedDepositProductsProductIdResponse
     * @alias module:model/GetFixedDepositProductsProductIdResponse
     */
    constructor() { 
        
        GetFixedDepositProductsProductIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetFixedDepositProductsProductIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetFixedDepositProductsProductIdResponse} obj Optional instance to populate.
     * @return {module:model/GetFixedDepositProductsProductIdResponse} The populated <code>GetFixedDepositProductsProductIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetFixedDepositProductsProductIdResponse();

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
                obj['currency'] = GetFixedDepositProductsProductIdCurrency.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('interestCompoundingPeriodType')) {
                obj['interestCompoundingPeriodType'] = GetFixedDepositProductsProductIdInterestCompoundingPeriodType.constructFromObject(data['interestCompoundingPeriodType']);
            }
            if (data.hasOwnProperty('interestPostingPeriodType')) {
                obj['interestPostingPeriodType'] = GetFixedDepositProductsInterestPostingPeriodType.constructFromObject(data['interestPostingPeriodType']);
            }
            if (data.hasOwnProperty('interestCalculationType')) {
                obj['interestCalculationType'] = GetFixedDepositProductsInterestCalculationType.constructFromObject(data['interestCalculationType']);
            }
            if (data.hasOwnProperty('interestCalculationDaysInYearType')) {
                obj['interestCalculationDaysInYearType'] = GetFixedDepositProductsInterestCalculationDaysInYearType.constructFromObject(data['interestCalculationDaysInYearType']);
            }
            if (data.hasOwnProperty('accountingMappings')) {
                obj['accountingMappings'] = GetFixedDepositProductsProductIdAccountingMappings.constructFromObject(data['accountingMappings']);
            }
            if (data.hasOwnProperty('feeToIncomeAccountMappings')) {
                obj['feeToIncomeAccountMappings'] = ApiClient.convertToType(data['feeToIncomeAccountMappings'], [GetFixedDepositProductsProductIdFeeToIncomeAccountMappings]);
            }
            if (data.hasOwnProperty('penaltyToIncomeAccountMappings')) {
                obj['penaltyToIncomeAccountMappings'] = ApiClient.convertToType(data['penaltyToIncomeAccountMappings'], [GetFixedDepositProductsProductIdPenaltyToIncomeAccountMappings]);
            }
            if (data.hasOwnProperty('preClosurePenalApplicable')) {
                obj['preClosurePenalApplicable'] = ApiClient.convertToType(data['preClosurePenalApplicable'], 'Boolean');
            }
            if (data.hasOwnProperty('preClosurePenalInterest')) {
                obj['preClosurePenalInterest'] = ApiClient.convertToType(data['preClosurePenalInterest'], 'Number');
            }
            if (data.hasOwnProperty('preClosurePenalInterestOnType')) {
                obj['preClosurePenalInterestOnType'] = GetFixedDepositProductsProductIdPreClosurePenalInterestOnType.constructFromObject(data['preClosurePenalInterestOnType']);
            }
            if (data.hasOwnProperty('minDepositTerm')) {
                obj['minDepositTerm'] = ApiClient.convertToType(data['minDepositTerm'], 'Number');
            }
            if (data.hasOwnProperty('minDepositTermType')) {
                obj['minDepositTermType'] = GetFixedDepositProductsProductIdMinDepositTermType.constructFromObject(data['minDepositTermType']);
            }
            if (data.hasOwnProperty('maxDepositTerm')) {
                obj['maxDepositTerm'] = ApiClient.convertToType(data['maxDepositTerm'], 'Number');
            }
            if (data.hasOwnProperty('maxDepositTermType')) {
                obj['maxDepositTermType'] = GetFixedDepositProductsProductIdMaxDepositTermType.constructFromObject(data['maxDepositTermType']);
            }
            if (data.hasOwnProperty('activeChart')) {
                obj['activeChart'] = GetFixedDepositProductsProductIdActiveChart.constructFromObject(data['activeChart']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetFixedDepositProductsProductIdResponse.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetFixedDepositProductsProductIdResponse.prototype['name'] = undefined;

/**
 * @member {String} shortName
 */
GetFixedDepositProductsProductIdResponse.prototype['shortName'] = undefined;

/**
 * @member {String} description
 */
GetFixedDepositProductsProductIdResponse.prototype['description'] = undefined;

/**
 * @member {module:model/GetFixedDepositProductsProductIdCurrency} currency
 */
GetFixedDepositProductsProductIdResponse.prototype['currency'] = undefined;

/**
 * @member {module:model/GetFixedDepositProductsProductIdInterestCompoundingPeriodType} interestCompoundingPeriodType
 */
GetFixedDepositProductsProductIdResponse.prototype['interestCompoundingPeriodType'] = undefined;

/**
 * @member {module:model/GetFixedDepositProductsInterestPostingPeriodType} interestPostingPeriodType
 */
GetFixedDepositProductsProductIdResponse.prototype['interestPostingPeriodType'] = undefined;

/**
 * @member {module:model/GetFixedDepositProductsInterestCalculationType} interestCalculationType
 */
GetFixedDepositProductsProductIdResponse.prototype['interestCalculationType'] = undefined;

/**
 * @member {module:model/GetFixedDepositProductsInterestCalculationDaysInYearType} interestCalculationDaysInYearType
 */
GetFixedDepositProductsProductIdResponse.prototype['interestCalculationDaysInYearType'] = undefined;

/**
 * @member {module:model/GetFixedDepositProductsProductIdAccountingMappings} accountingMappings
 */
GetFixedDepositProductsProductIdResponse.prototype['accountingMappings'] = undefined;

/**
 * @member {Array.<module:model/GetFixedDepositProductsProductIdFeeToIncomeAccountMappings>} feeToIncomeAccountMappings
 */
GetFixedDepositProductsProductIdResponse.prototype['feeToIncomeAccountMappings'] = undefined;

/**
 * @member {Array.<module:model/GetFixedDepositProductsProductIdPenaltyToIncomeAccountMappings>} penaltyToIncomeAccountMappings
 */
GetFixedDepositProductsProductIdResponse.prototype['penaltyToIncomeAccountMappings'] = undefined;

/**
 * @member {Boolean} preClosurePenalApplicable
 */
GetFixedDepositProductsProductIdResponse.prototype['preClosurePenalApplicable'] = undefined;

/**
 * @member {Number} preClosurePenalInterest
 */
GetFixedDepositProductsProductIdResponse.prototype['preClosurePenalInterest'] = undefined;

/**
 * @member {module:model/GetFixedDepositProductsProductIdPreClosurePenalInterestOnType} preClosurePenalInterestOnType
 */
GetFixedDepositProductsProductIdResponse.prototype['preClosurePenalInterestOnType'] = undefined;

/**
 * @member {Number} minDepositTerm
 */
GetFixedDepositProductsProductIdResponse.prototype['minDepositTerm'] = undefined;

/**
 * @member {module:model/GetFixedDepositProductsProductIdMinDepositTermType} minDepositTermType
 */
GetFixedDepositProductsProductIdResponse.prototype['minDepositTermType'] = undefined;

/**
 * @member {Number} maxDepositTerm
 */
GetFixedDepositProductsProductIdResponse.prototype['maxDepositTerm'] = undefined;

/**
 * @member {module:model/GetFixedDepositProductsProductIdMaxDepositTermType} maxDepositTermType
 */
GetFixedDepositProductsProductIdResponse.prototype['maxDepositTermType'] = undefined;

/**
 * @member {module:model/GetFixedDepositProductsProductIdActiveChart} activeChart
 */
GetFixedDepositProductsProductIdResponse.prototype['activeChart'] = undefined;






export default GetFixedDepositProductsProductIdResponse;

