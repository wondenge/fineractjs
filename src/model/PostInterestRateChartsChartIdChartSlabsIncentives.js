

import ApiClient from '../ApiClient';

/**
 * The PostInterestRateChartsChartIdChartSlabsIncentives model module.
 * @module model/PostInterestRateChartsChartIdChartSlabsIncentives
 * @version 1.0
 */
class PostInterestRateChartsChartIdChartSlabsIncentives {
    /**
     * Constructs a new <code>PostInterestRateChartsChartIdChartSlabsIncentives</code>.
     * @alias module:model/PostInterestRateChartsChartIdChartSlabsIncentives
     */
    constructor() { 
        
        PostInterestRateChartsChartIdChartSlabsIncentives.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostInterestRateChartsChartIdChartSlabsIncentives</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostInterestRateChartsChartIdChartSlabsIncentives} obj Optional instance to populate.
     * @return {module:model/PostInterestRateChartsChartIdChartSlabsIncentives} The populated <code>PostInterestRateChartsChartIdChartSlabsIncentives</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostInterestRateChartsChartIdChartSlabsIncentives();

            if (data.hasOwnProperty('entityType')) {
                obj['entityType'] = ApiClient.convertToType(data['entityType'], 'Number');
            }
            if (data.hasOwnProperty('attributeName')) {
                obj['attributeName'] = ApiClient.convertToType(data['attributeName'], 'Number');
            }
            if (data.hasOwnProperty('conditionType')) {
                obj['conditionType'] = ApiClient.convertToType(data['conditionType'], 'Number');
            }
            if (data.hasOwnProperty('attributeValue')) {
                obj['attributeValue'] = ApiClient.convertToType(data['attributeValue'], 'Number');
            }
            if (data.hasOwnProperty('incentiveType')) {
                obj['incentiveType'] = ApiClient.convertToType(data['incentiveType'], 'Number');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} entityType
 */
PostInterestRateChartsChartIdChartSlabsIncentives.prototype['entityType'] = undefined;

/**
 * @member {Number} attributeName
 */
PostInterestRateChartsChartIdChartSlabsIncentives.prototype['attributeName'] = undefined;

/**
 * @member {Number} conditionType
 */
PostInterestRateChartsChartIdChartSlabsIncentives.prototype['conditionType'] = undefined;

/**
 * @member {Number} attributeValue
 */
PostInterestRateChartsChartIdChartSlabsIncentives.prototype['attributeValue'] = undefined;

/**
 * @member {Number} incentiveType
 */
PostInterestRateChartsChartIdChartSlabsIncentives.prototype['incentiveType'] = undefined;

/**
 * @member {Number} amount
 */
PostInterestRateChartsChartIdChartSlabsIncentives.prototype['amount'] = undefined;






export default PostInterestRateChartsChartIdChartSlabsIncentives;

