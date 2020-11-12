

import ApiClient from '../ApiClient';
import PostProductsChargesSelected from './PostProductsChargesSelected';
import PostProductsMarketPricePeriods from './PostProductsMarketPricePeriods';

/**
 * The PostProductsTypeRequest model module.
 * @module model/PostProductsTypeRequest
 * @version 1.0
 */
class PostProductsTypeRequest {
    /**
     * Constructs a new <code>PostProductsTypeRequest</code>.
     * PostProductsTypeRequest
     * @alias module:model/PostProductsTypeRequest
     */
    constructor() { 
        
        PostProductsTypeRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostProductsTypeRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostProductsTypeRequest} obj Optional instance to populate.
     * @return {module:model/PostProductsTypeRequest} The populated <code>PostProductsTypeRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostProductsTypeRequest();

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
            if (data.hasOwnProperty('totalShares')) {
                obj['totalShares'] = ApiClient.convertToType(data['totalShares'], 'Number');
            }
            if (data.hasOwnProperty('sharesIssued')) {
                obj['sharesIssued'] = ApiClient.convertToType(data['sharesIssued'], 'Number');
            }
            if (data.hasOwnProperty('unitPrice')) {
                obj['unitPrice'] = ApiClient.convertToType(data['unitPrice'], 'Number');
            }
            if (data.hasOwnProperty('minimumShares')) {
                obj['minimumShares'] = ApiClient.convertToType(data['minimumShares'], 'Number');
            }
            if (data.hasOwnProperty('nominalShares')) {
                obj['nominalShares'] = ApiClient.convertToType(data['nominalShares'], 'Number');
            }
            if (data.hasOwnProperty('maximumShares')) {
                obj['maximumShares'] = ApiClient.convertToType(data['maximumShares'], 'Number');
            }
            if (data.hasOwnProperty('minimumActivePeriodForDividends')) {
                obj['minimumActivePeriodForDividends'] = ApiClient.convertToType(data['minimumActivePeriodForDividends'], 'Number');
            }
            if (data.hasOwnProperty('minimumactiveperiodFrequencyType')) {
                obj['minimumactiveperiodFrequencyType'] = ApiClient.convertToType(data['minimumactiveperiodFrequencyType'], 'Number');
            }
            if (data.hasOwnProperty('lockinPeriodFrequency')) {
                obj['lockinPeriodFrequency'] = ApiClient.convertToType(data['lockinPeriodFrequency'], 'Number');
            }
            if (data.hasOwnProperty('lockinPeriodFrequencyType')) {
                obj['lockinPeriodFrequencyType'] = ApiClient.convertToType(data['lockinPeriodFrequencyType'], 'Number');
            }
            if (data.hasOwnProperty('allowDividendCalculationForInactiveClients')) {
                obj['allowDividendCalculationForInactiveClients'] = ApiClient.convertToType(data['allowDividendCalculationForInactiveClients'], 'Boolean');
            }
            if (data.hasOwnProperty('marketPricePeriods')) {
                obj['marketPricePeriods'] = ApiClient.convertToType(data['marketPricePeriods'], [PostProductsMarketPricePeriods]);
            }
            if (data.hasOwnProperty('chargesSelected')) {
                obj['chargesSelected'] = ApiClient.convertToType(data['chargesSelected'], [PostProductsChargesSelected]);
            }
            if (data.hasOwnProperty('accountingRule')) {
                obj['accountingRule'] = ApiClient.convertToType(data['accountingRule'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
PostProductsTypeRequest.prototype['name'] = undefined;

/**
 * @member {String} shortName
 */
PostProductsTypeRequest.prototype['shortName'] = undefined;

/**
 * @member {String} description
 */
PostProductsTypeRequest.prototype['description'] = undefined;

/**
 * @member {String} currencyCode
 */
PostProductsTypeRequest.prototype['currencyCode'] = undefined;

/**
 * @member {Number} digitsAfterDecimal
 */
PostProductsTypeRequest.prototype['digitsAfterDecimal'] = undefined;

/**
 * @member {Number} inMultiplesOf
 */
PostProductsTypeRequest.prototype['inMultiplesOf'] = undefined;

/**
 * @member {String} locale
 */
PostProductsTypeRequest.prototype['locale'] = undefined;

/**
 * @member {Number} totalShares
 */
PostProductsTypeRequest.prototype['totalShares'] = undefined;

/**
 * @member {Number} sharesIssued
 */
PostProductsTypeRequest.prototype['sharesIssued'] = undefined;

/**
 * @member {Number} unitPrice
 */
PostProductsTypeRequest.prototype['unitPrice'] = undefined;

/**
 * @member {Number} minimumShares
 */
PostProductsTypeRequest.prototype['minimumShares'] = undefined;

/**
 * @member {Number} nominalShares
 */
PostProductsTypeRequest.prototype['nominalShares'] = undefined;

/**
 * @member {Number} maximumShares
 */
PostProductsTypeRequest.prototype['maximumShares'] = undefined;

/**
 * @member {Number} minimumActivePeriodForDividends
 */
PostProductsTypeRequest.prototype['minimumActivePeriodForDividends'] = undefined;

/**
 * @member {Number} minimumactiveperiodFrequencyType
 */
PostProductsTypeRequest.prototype['minimumactiveperiodFrequencyType'] = undefined;

/**
 * @member {Number} lockinPeriodFrequency
 */
PostProductsTypeRequest.prototype['lockinPeriodFrequency'] = undefined;

/**
 * @member {Number} lockinPeriodFrequencyType
 */
PostProductsTypeRequest.prototype['lockinPeriodFrequencyType'] = undefined;

/**
 * @member {Boolean} allowDividendCalculationForInactiveClients
 */
PostProductsTypeRequest.prototype['allowDividendCalculationForInactiveClients'] = undefined;

/**
 * @member {Array.<module:model/PostProductsMarketPricePeriods>} marketPricePeriods
 */
PostProductsTypeRequest.prototype['marketPricePeriods'] = undefined;

/**
 * @member {Array.<module:model/PostProductsChargesSelected>} chargesSelected
 */
PostProductsTypeRequest.prototype['chargesSelected'] = undefined;

/**
 * @member {Number} accountingRule
 */
PostProductsTypeRequest.prototype['accountingRule'] = undefined;






export default PostProductsTypeRequest;

