

import ApiClient from '../ApiClient';
import PostFixedDepositProductsCharts from './PostFixedDepositProductsCharts';

/**
 * The PostFixedDepositProductsRequest model module.
 * @module model/PostFixedDepositProductsRequest
 * @version 1.0
 */
class PostFixedDepositProductsRequest {
    /**
     * Constructs a new <code>PostFixedDepositProductsRequest</code>.
     * PostFixedDepositProductsRequest
     * @alias module:model/PostFixedDepositProductsRequest
     */
    constructor() { 
        
        PostFixedDepositProductsRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostFixedDepositProductsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostFixedDepositProductsRequest} obj Optional instance to populate.
     * @return {module:model/PostFixedDepositProductsRequest} The populated <code>PostFixedDepositProductsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostFixedDepositProductsRequest();

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
            if (data.hasOwnProperty('charts')) {
                obj['charts'] = ApiClient.convertToType(data['charts'], [PostFixedDepositProductsCharts]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
PostFixedDepositProductsRequest.prototype['name'] = undefined;

/**
 * @member {String} shortName
 */
PostFixedDepositProductsRequest.prototype['shortName'] = undefined;

/**
 * @member {String} description
 */
PostFixedDepositProductsRequest.prototype['description'] = undefined;

/**
 * @member {String} currencyCode
 */
PostFixedDepositProductsRequest.prototype['currencyCode'] = undefined;

/**
 * @member {Number} digitsAfterDecimal
 */
PostFixedDepositProductsRequest.prototype['digitsAfterDecimal'] = undefined;

/**
 * @member {Number} inMultiplesOf
 */
PostFixedDepositProductsRequest.prototype['inMultiplesOf'] = undefined;

/**
 * @member {String} locale
 */
PostFixedDepositProductsRequest.prototype['locale'] = undefined;

/**
 * @member {Number} interestCompoundingPeriodType
 */
PostFixedDepositProductsRequest.prototype['interestCompoundingPeriodType'] = undefined;

/**
 * @member {Number} interestPostingPeriodType
 */
PostFixedDepositProductsRequest.prototype['interestPostingPeriodType'] = undefined;

/**
 * @member {Number} interestCalculationType
 */
PostFixedDepositProductsRequest.prototype['interestCalculationType'] = undefined;

/**
 * @member {Number} interestCalculationDaysInYearType
 */
PostFixedDepositProductsRequest.prototype['interestCalculationDaysInYearType'] = undefined;

/**
 * @member {Number} accountingRule
 */
PostFixedDepositProductsRequest.prototype['accountingRule'] = undefined;

/**
 * @member {Boolean} preClosurePenalApplicable
 */
PostFixedDepositProductsRequest.prototype['preClosurePenalApplicable'] = undefined;

/**
 * @member {Number} preClosurePenalInterest
 */
PostFixedDepositProductsRequest.prototype['preClosurePenalInterest'] = undefined;

/**
 * @member {Number} preClosurePenalInterestOnTypeId
 */
PostFixedDepositProductsRequest.prototype['preClosurePenalInterestOnTypeId'] = undefined;

/**
 * @member {Number} minDepositTerm
 */
PostFixedDepositProductsRequest.prototype['minDepositTerm'] = undefined;

/**
 * @member {Number} minDepositTermTypeId
 */
PostFixedDepositProductsRequest.prototype['minDepositTermTypeId'] = undefined;

/**
 * @member {Number} maxDepositTerm
 */
PostFixedDepositProductsRequest.prototype['maxDepositTerm'] = undefined;

/**
 * @member {Number} maxDepositTermTypeId
 */
PostFixedDepositProductsRequest.prototype['maxDepositTermTypeId'] = undefined;

/**
 * @member {Array.<module:model/PostFixedDepositProductsCharts>} charts
 */
PostFixedDepositProductsRequest.prototype['charts'] = undefined;






export default PostFixedDepositProductsRequest;

