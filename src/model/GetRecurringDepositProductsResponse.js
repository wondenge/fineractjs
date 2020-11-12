

import ApiClient from '../ApiClient';
import GetRecurringDepositProductsAccountingRule from './GetRecurringDepositProductsAccountingRule';
import GetRecurringDepositProductsCurrency from './GetRecurringDepositProductsCurrency';
import GetRecurringDepositProductsInterestCalculationDaysInYearType from './GetRecurringDepositProductsInterestCalculationDaysInYearType';
import GetRecurringDepositProductsInterestCalculationType from './GetRecurringDepositProductsInterestCalculationType';
import GetRecurringDepositProductsInterestCompoundingPeriodType from './GetRecurringDepositProductsInterestCompoundingPeriodType';
import GetRecurringDepositProductsInterestPostingPeriodType from './GetRecurringDepositProductsInterestPostingPeriodType';
import GetRecurringDepositProductsMaxDepositTermType from './GetRecurringDepositProductsMaxDepositTermType';
import GetRecurringDepositProductsMinDepositTermType from './GetRecurringDepositProductsMinDepositTermType';
import GetRecurringDepositProductsRecurringDepositFrequencyType from './GetRecurringDepositProductsRecurringDepositFrequencyType';

/**
 * The GetRecurringDepositProductsResponse model module.
 * @module model/GetRecurringDepositProductsResponse
 * @version 1.0
 */
class GetRecurringDepositProductsResponse {
    /**
     * Constructs a new <code>GetRecurringDepositProductsResponse</code>.
     * GetRecurringDepositProductsResponse
     * @alias module:model/GetRecurringDepositProductsResponse
     */
    constructor() { 
        
        GetRecurringDepositProductsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetRecurringDepositProductsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetRecurringDepositProductsResponse} obj Optional instance to populate.
     * @return {module:model/GetRecurringDepositProductsResponse} The populated <code>GetRecurringDepositProductsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRecurringDepositProductsResponse();

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
                obj['currency'] = GetRecurringDepositProductsCurrency.constructFromObject(data['currency']);
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
            if (data.hasOwnProperty('minDepositTerm')) {
                obj['minDepositTerm'] = ApiClient.convertToType(data['minDepositTerm'], 'Number');
            }
            if (data.hasOwnProperty('maxDepositTerm')) {
                obj['maxDepositTerm'] = ApiClient.convertToType(data['maxDepositTerm'], 'Number');
            }
            if (data.hasOwnProperty('minDepositTermType')) {
                obj['minDepositTermType'] = GetRecurringDepositProductsMinDepositTermType.constructFromObject(data['minDepositTermType']);
            }
            if (data.hasOwnProperty('maxDepositTermType')) {
                obj['maxDepositTermType'] = GetRecurringDepositProductsMaxDepositTermType.constructFromObject(data['maxDepositTermType']);
            }
            if (data.hasOwnProperty('nominalAnnualInterestRate')) {
                obj['nominalAnnualInterestRate'] = ApiClient.convertToType(data['nominalAnnualInterestRate'], 'Number');
            }
            if (data.hasOwnProperty('interestCompoundingPeriodType')) {
                obj['interestCompoundingPeriodType'] = GetRecurringDepositProductsInterestCompoundingPeriodType.constructFromObject(data['interestCompoundingPeriodType']);
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
            if (data.hasOwnProperty('accountingRule')) {
                obj['accountingRule'] = GetRecurringDepositProductsAccountingRule.constructFromObject(data['accountingRule']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetRecurringDepositProductsResponse.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetRecurringDepositProductsResponse.prototype['name'] = undefined;

/**
 * @member {String} shortName
 */
GetRecurringDepositProductsResponse.prototype['shortName'] = undefined;

/**
 * @member {String} description
 */
GetRecurringDepositProductsResponse.prototype['description'] = undefined;

/**
 * @member {module:model/GetRecurringDepositProductsCurrency} currency
 */
GetRecurringDepositProductsResponse.prototype['currency'] = undefined;

/**
 * @member {Number} recurringDepositFrequency
 */
GetRecurringDepositProductsResponse.prototype['recurringDepositFrequency'] = undefined;

/**
 * @member {module:model/GetRecurringDepositProductsRecurringDepositFrequencyType} recurringDepositFrequencyType
 */
GetRecurringDepositProductsResponse.prototype['recurringDepositFrequencyType'] = undefined;

/**
 * @member {Boolean} preClosurePenalApplicable
 */
GetRecurringDepositProductsResponse.prototype['preClosurePenalApplicable'] = undefined;

/**
 * @member {Number} minDepositTerm
 */
GetRecurringDepositProductsResponse.prototype['minDepositTerm'] = undefined;

/**
 * @member {Number} maxDepositTerm
 */
GetRecurringDepositProductsResponse.prototype['maxDepositTerm'] = undefined;

/**
 * @member {module:model/GetRecurringDepositProductsMinDepositTermType} minDepositTermType
 */
GetRecurringDepositProductsResponse.prototype['minDepositTermType'] = undefined;

/**
 * @member {module:model/GetRecurringDepositProductsMaxDepositTermType} maxDepositTermType
 */
GetRecurringDepositProductsResponse.prototype['maxDepositTermType'] = undefined;

/**
 * @member {Number} nominalAnnualInterestRate
 */
GetRecurringDepositProductsResponse.prototype['nominalAnnualInterestRate'] = undefined;

/**
 * @member {module:model/GetRecurringDepositProductsInterestCompoundingPeriodType} interestCompoundingPeriodType
 */
GetRecurringDepositProductsResponse.prototype['interestCompoundingPeriodType'] = undefined;

/**
 * @member {module:model/GetRecurringDepositProductsInterestPostingPeriodType} interestPostingPeriodType
 */
GetRecurringDepositProductsResponse.prototype['interestPostingPeriodType'] = undefined;

/**
 * @member {module:model/GetRecurringDepositProductsInterestCalculationType} interestCalculationType
 */
GetRecurringDepositProductsResponse.prototype['interestCalculationType'] = undefined;

/**
 * @member {module:model/GetRecurringDepositProductsInterestCalculationDaysInYearType} interestCalculationDaysInYearType
 */
GetRecurringDepositProductsResponse.prototype['interestCalculationDaysInYearType'] = undefined;

/**
 * @member {module:model/GetRecurringDepositProductsAccountingRule} accountingRule
 */
GetRecurringDepositProductsResponse.prototype['accountingRule'] = undefined;






export default GetRecurringDepositProductsResponse;

