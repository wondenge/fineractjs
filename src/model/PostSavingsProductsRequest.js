

import ApiClient from '../ApiClient';
import PostSavingsCharges from './PostSavingsCharges';

/**
 * The PostSavingsProductsRequest model module.
 * @module model/PostSavingsProductsRequest
 * @version 1.0
 */
class PostSavingsProductsRequest {
    /**
     * Constructs a new <code>PostSavingsProductsRequest</code>.
     * PostSavingsProductsRequest
     * @alias module:model/PostSavingsProductsRequest
     */
    constructor() { 
        
        PostSavingsProductsRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostSavingsProductsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostSavingsProductsRequest} obj Optional instance to populate.
     * @return {module:model/PostSavingsProductsRequest} The populated <code>PostSavingsProductsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostSavingsProductsRequest();

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
            if (data.hasOwnProperty('nominalAnnualInterestRate')) {
                obj['nominalAnnualInterestRate'] = ApiClient.convertToType(data['nominalAnnualInterestRate'], 'Number');
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
            if (data.hasOwnProperty('charges')) {
                obj['charges'] = ApiClient.convertToType(data['charges'], [PostSavingsCharges]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
PostSavingsProductsRequest.prototype['name'] = undefined;

/**
 * @member {String} shortName
 */
PostSavingsProductsRequest.prototype['shortName'] = undefined;

/**
 * @member {String} description
 */
PostSavingsProductsRequest.prototype['description'] = undefined;

/**
 * @member {String} currencyCode
 */
PostSavingsProductsRequest.prototype['currencyCode'] = undefined;

/**
 * @member {Number} digitsAfterDecimal
 */
PostSavingsProductsRequest.prototype['digitsAfterDecimal'] = undefined;

/**
 * @member {Number} inMultiplesOf
 */
PostSavingsProductsRequest.prototype['inMultiplesOf'] = undefined;

/**
 * @member {String} locale
 */
PostSavingsProductsRequest.prototype['locale'] = undefined;

/**
 * @member {Number} nominalAnnualInterestRate
 */
PostSavingsProductsRequest.prototype['nominalAnnualInterestRate'] = undefined;

/**
 * @member {Number} interestCompoundingPeriodType
 */
PostSavingsProductsRequest.prototype['interestCompoundingPeriodType'] = undefined;

/**
 * @member {Number} interestPostingPeriodType
 */
PostSavingsProductsRequest.prototype['interestPostingPeriodType'] = undefined;

/**
 * @member {Number} interestCalculationType
 */
PostSavingsProductsRequest.prototype['interestCalculationType'] = undefined;

/**
 * @member {Number} interestCalculationDaysInYearType
 */
PostSavingsProductsRequest.prototype['interestCalculationDaysInYearType'] = undefined;

/**
 * @member {Number} accountingRule
 */
PostSavingsProductsRequest.prototype['accountingRule'] = undefined;

/**
 * @member {Array.<module:model/PostSavingsCharges>} charges
 */
PostSavingsProductsRequest.prototype['charges'] = undefined;






export default PostSavingsProductsRequest;

