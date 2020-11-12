

import ApiClient from '../ApiClient';
import PostRecurringDepositProductsCharts from './PostRecurringDepositProductsCharts';

/**
 * The PostRecurringDepositProductsRequest model module.
 * @module model/PostRecurringDepositProductsRequest
 * @version 1.0
 */
class PostRecurringDepositProductsRequest {
    /**
     * Constructs a new <code>PostRecurringDepositProductsRequest</code>.
     * PostRecurringDepositProductsRequest
     * @alias module:model/PostRecurringDepositProductsRequest
     */
    constructor() { 
        
        PostRecurringDepositProductsRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostRecurringDepositProductsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostRecurringDepositProductsRequest} obj Optional instance to populate.
     * @return {module:model/PostRecurringDepositProductsRequest} The populated <code>PostRecurringDepositProductsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostRecurringDepositProductsRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('shortName')) {
                obj['shortName'] = ApiClient.convertToType(data['shortName'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('currencyCode')) {
                obj['currencyCode'] = ApiClient.convertToType(data['currencyCode'], 'String');
            }
            if (data.hasOwnProperty('digitsAfterDecimal')) {
                obj['digitsAfterDecimal'] = ApiClient.convertToType(data['digitsAfterDecimal'], 'Number');
            }
            if (data.hasOwnProperty('inMultiplesOf')) {
                obj['inMultiplesOf'] = ApiClient.convertToType(data['inMultiplesOf'], 'Number');
            }
            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
            if (data.hasOwnProperty('interestCompoundingPeriodType')) {
                obj['interestCompoundingPeriodType'] = ApiClient.convertToType(data['interestCompoundingPeriodType'], 'Number');
            }
            if (data.hasOwnProperty('interestPostingPeriodType')) {
                obj['interestPostingPeriodType'] = ApiClient.convertToType(data['interestPostingPeriodType'], 'Number');
            }
            if (data.hasOwnProperty('interestCalculationType')) {
                obj['interestCalculationType'] = ApiClient.convertToType(data['interestCalculationType'], 'Number');
            }
            if (data.hasOwnProperty('interestCalculationDaysInYearType')) {
                obj['interestCalculationDaysInYearType'] = ApiClient.convertToType(data['interestCalculationDaysInYearType'], 'Number');
            }
            if (data.hasOwnProperty('accountingRule')) {
                obj['accountingRule'] = ApiClient.convertToType(data['accountingRule'], 'Number');
            }
            if (data.hasOwnProperty('recurringDepositFrequency')) {
                obj['recurringDepositFrequency'] = ApiClient.convertToType(data['recurringDepositFrequency'], 'Number');
            }
            if (data.hasOwnProperty('recurringDepositFrequencyTypeId')) {
                obj['recurringDepositFrequencyTypeId'] = ApiClient.convertToType(data['recurringDepositFrequencyTypeId'], 'Number');
            }
            if (data.hasOwnProperty('preClosurePenalApplicable')) {
                obj['preClosurePenalApplicable'] = ApiClient.convertToType(data['preClosurePenalApplicable'], 'Boolean');
            }
            if (data.hasOwnProperty('preClosurePenalInterest')) {
                obj['preClosurePenalInterest'] = ApiClient.convertToType(data['preClosurePenalInterest'], 'Number');
            }
            if (data.hasOwnProperty('preClosurePenalInterestOnTypeId')) {
                obj['preClosurePenalInterestOnTypeId'] = ApiClient.convertToType(data['preClosurePenalInterestOnTypeId'], 'Number');
            }
            if (data.hasOwnProperty('minDepositTerm')) {
                obj['minDepositTerm'] = ApiClient.convertToType(data['minDepositTerm'], 'Number');
            }
            if (data.hasOwnProperty('minDepositTermTypeId')) {
                obj['minDepositTermTypeId'] = ApiClient.convertToType(data['minDepositTermTypeId'], 'Number');
            }
            if (data.hasOwnProperty('maxDepositTerm')) {
                obj['maxDepositTerm'] = ApiClient.convertToType(data['maxDepositTerm'], 'Number');
            }
            if (data.hasOwnProperty('maxDepositTermTypeId')) {
                obj['maxDepositTermTypeId'] = ApiClient.convertToType(data['maxDepositTermTypeId'], 'Number');
            }
            if (data.hasOwnProperty('depositAmount')) {
                obj['depositAmount'] = ApiClient.convertToType(data['depositAmount'], 'Number');
            }
            if (data.hasOwnProperty('minDepositAmount')) {
                obj['minDepositAmount'] = ApiClient.convertToType(data['minDepositAmount'], 'Number');
            }
            if (data.hasOwnProperty('maxDepositAmount')) {
                obj['maxDepositAmount'] = ApiClient.convertToType(data['maxDepositAmount'], 'Number');
            }
            if (data.hasOwnProperty('charts')) {
                obj['charts'] = ApiClient.convertToType(data['charts'], [PostRecurringDepositProductsCharts]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
PostRecurringDepositProductsRequest.prototype['name'] = undefined;

/**
 * @member {String} shortName
 */
PostRecurringDepositProductsRequest.prototype['shortName'] = undefined;

/**
 * @member {String} description
 */
PostRecurringDepositProductsRequest.prototype['description'] = undefined;

/**
 * @member {String} currencyCode
 */
PostRecurringDepositProductsRequest.prototype['currencyCode'] = undefined;

/**
 * @member {Number} digitsAfterDecimal
 */
PostRecurringDepositProductsRequest.prototype['digitsAfterDecimal'] = undefined;

/**
 * @member {Number} inMultiplesOf
 */
PostRecurringDepositProductsRequest.prototype['inMultiplesOf'] = undefined;

/**
 * @member {String} locale
 */
PostRecurringDepositProductsRequest.prototype['locale'] = undefined;

/**
 * @member {Number} interestCompoundingPeriodType
 */
PostRecurringDepositProductsRequest.prototype['interestCompoundingPeriodType'] = undefined;

/**
 * @member {Number} interestPostingPeriodType
 */
PostRecurringDepositProductsRequest.prototype['interestPostingPeriodType'] = undefined;

/**
 * @member {Number} interestCalculationType
 */
PostRecurringDepositProductsRequest.prototype['interestCalculationType'] = undefined;

/**
 * @member {Number} interestCalculationDaysInYearType
 */
PostRecurringDepositProductsRequest.prototype['interestCalculationDaysInYearType'] = undefined;

/**
 * @member {Number} accountingRule
 */
PostRecurringDepositProductsRequest.prototype['accountingRule'] = undefined;

/**
 * @member {Number} recurringDepositFrequency
 */
PostRecurringDepositProductsRequest.prototype['recurringDepositFrequency'] = undefined;

/**
 * @member {Number} recurringDepositFrequencyTypeId
 */
PostRecurringDepositProductsRequest.prototype['recurringDepositFrequencyTypeId'] = undefined;

/**
 * @member {Boolean} preClosurePenalApplicable
 */
PostRecurringDepositProductsRequest.prototype['preClosurePenalApplicable'] = undefined;

/**
 * @member {Number} preClosurePenalInterest
 */
PostRecurringDepositProductsRequest.prototype['preClosurePenalInterest'] = undefined;

/**
 * @member {Number} preClosurePenalInterestOnTypeId
 */
PostRecurringDepositProductsRequest.prototype['preClosurePenalInterestOnTypeId'] = undefined;

/**
 * @member {Number} minDepositTerm
 */
PostRecurringDepositProductsRequest.prototype['minDepositTerm'] = undefined;

/**
 * @member {Number} minDepositTermTypeId
 */
PostRecurringDepositProductsRequest.prototype['minDepositTermTypeId'] = undefined;

/**
 * @member {Number} maxDepositTerm
 */
PostRecurringDepositProductsRequest.prototype['maxDepositTerm'] = undefined;

/**
 * @member {Number} maxDepositTermTypeId
 */
PostRecurringDepositProductsRequest.prototype['maxDepositTermTypeId'] = undefined;

/**
 * @member {Number} depositAmount
 */
PostRecurringDepositProductsRequest.prototype['depositAmount'] = undefined;

/**
 * @member {Number} minDepositAmount
 */
PostRecurringDepositProductsRequest.prototype['minDepositAmount'] = undefined;

/**
 * @member {Number} maxDepositAmount
 */
PostRecurringDepositProductsRequest.prototype['maxDepositAmount'] = undefined;

/**
 * @member {Array.<module:model/PostRecurringDepositProductsCharts>} charts
 */
PostRecurringDepositProductsRequest.prototype['charts'] = undefined;






export default PostRecurringDepositProductsRequest;

