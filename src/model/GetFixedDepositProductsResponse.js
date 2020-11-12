

import ApiClient from '../ApiClient';
import GetFixedDepositProductsAccountingRule from './GetFixedDepositProductsAccountingRule';
import GetFixedDepositProductsCurrency from './GetFixedDepositProductsCurrency';
import GetFixedDepositProductsInterestCalculationDaysInYearType from './GetFixedDepositProductsInterestCalculationDaysInYearType';
import GetFixedDepositProductsInterestCalculationType from './GetFixedDepositProductsInterestCalculationType';
import GetFixedDepositProductsInterestCompoundingPeriodType from './GetFixedDepositProductsInterestCompoundingPeriodType';
import GetFixedDepositProductsInterestPostingPeriodType from './GetFixedDepositProductsInterestPostingPeriodType';
import GetFixedDepositProductsMaxDepositTermType from './GetFixedDepositProductsMaxDepositTermType';
import GetFixedDepositProductsMinDepositTermType from './GetFixedDepositProductsMinDepositTermType';

/**
 * The GetFixedDepositProductsResponse model module.
 * @module model/GetFixedDepositProductsResponse
 * @version 1.0
 */
class GetFixedDepositProductsResponse {
    /**
     * Constructs a new <code>GetFixedDepositProductsResponse</code>.
     * GetFixedDepositProductsResponse
     * @alias module:model/GetFixedDepositProductsResponse
     */
    constructor() { 
        
        GetFixedDepositProductsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetFixedDepositProductsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetFixedDepositProductsResponse} obj Optional instance to populate.
     * @return {module:model/GetFixedDepositProductsResponse} The populated <code>GetFixedDepositProductsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetFixedDepositProductsResponse();

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
                obj['currency'] = GetFixedDepositProductsCurrency.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('preClosurePenalApplicable')) {
                obj['preClosurePenalApplicable'] = ApiClient.convertToType(data['preClosurePenalApplicable'], 'Boolean');
            }
            if (data.hasOwnProperty('minDepositTerm')) {
                obj['minDepositTerm'] = ApiClient.convertToType(data['minDepositTerm'], 'Number');
            }
            if (data.hasOwnProperty('maxDepositTerm')) {
                obj['maxDepositTerm'] = ApiClient.convertToType(data['maxDepositTerm'], 'Number');
            }
            if (data.hasOwnProperty('minDepositTermType')) {
                obj['minDepositTermType'] = GetFixedDepositProductsMinDepositTermType.constructFromObject(data['minDepositTermType']);
            }
            if (data.hasOwnProperty('maxDepositTermType')) {
                obj['maxDepositTermType'] = GetFixedDepositProductsMaxDepositTermType.constructFromObject(data['maxDepositTermType']);
            }
            if (data.hasOwnProperty('nominalAnnualInterestRate')) {
                obj['nominalAnnualInterestRate'] = ApiClient.convertToType(data['nominalAnnualInterestRate'], 'Number');
            }
            if (data.hasOwnProperty('interestCompoundingPeriodType')) {
                obj['interestCompoundingPeriodType'] = GetFixedDepositProductsInterestCompoundingPeriodType.constructFromObject(data['interestCompoundingPeriodType']);
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
            if (data.hasOwnProperty('accountingRule')) {
                obj['accountingRule'] = GetFixedDepositProductsAccountingRule.constructFromObject(data['accountingRule']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetFixedDepositProductsResponse.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetFixedDepositProductsResponse.prototype['name'] = undefined;

/**
 * @member {String} shortName
 */
GetFixedDepositProductsResponse.prototype['shortName'] = undefined;

/**
 * @member {String} description
 */
GetFixedDepositProductsResponse.prototype['description'] = undefined;

/**
 * @member {module:model/GetFixedDepositProductsCurrency} currency
 */
GetFixedDepositProductsResponse.prototype['currency'] = undefined;

/**
 * @member {Boolean} preClosurePenalApplicable
 */
GetFixedDepositProductsResponse.prototype['preClosurePenalApplicable'] = undefined;

/**
 * @member {Number} minDepositTerm
 */
GetFixedDepositProductsResponse.prototype['minDepositTerm'] = undefined;

/**
 * @member {Number} maxDepositTerm
 */
GetFixedDepositProductsResponse.prototype['maxDepositTerm'] = undefined;

/**
 * @member {module:model/GetFixedDepositProductsMinDepositTermType} minDepositTermType
 */
GetFixedDepositProductsResponse.prototype['minDepositTermType'] = undefined;

/**
 * @member {module:model/GetFixedDepositProductsMaxDepositTermType} maxDepositTermType
 */
GetFixedDepositProductsResponse.prototype['maxDepositTermType'] = undefined;

/**
 * @member {Number} nominalAnnualInterestRate
 */
GetFixedDepositProductsResponse.prototype['nominalAnnualInterestRate'] = undefined;

/**
 * @member {module:model/GetFixedDepositProductsInterestCompoundingPeriodType} interestCompoundingPeriodType
 */
GetFixedDepositProductsResponse.prototype['interestCompoundingPeriodType'] = undefined;

/**
 * @member {module:model/GetFixedDepositProductsInterestPostingPeriodType} interestPostingPeriodType
 */
GetFixedDepositProductsResponse.prototype['interestPostingPeriodType'] = undefined;

/**
 * @member {module:model/GetFixedDepositProductsInterestCalculationType} interestCalculationType
 */
GetFixedDepositProductsResponse.prototype['interestCalculationType'] = undefined;

/**
 * @member {module:model/GetFixedDepositProductsInterestCalculationDaysInYearType} interestCalculationDaysInYearType
 */
GetFixedDepositProductsResponse.prototype['interestCalculationDaysInYearType'] = undefined;

/**
 * @member {module:model/GetFixedDepositProductsAccountingRule} accountingRule
 */
GetFixedDepositProductsResponse.prototype['accountingRule'] = undefined;






export default GetFixedDepositProductsResponse;

