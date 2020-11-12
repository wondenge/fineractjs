

import ApiClient from '../ApiClient';
import GetInterestRateChartsChartIdChartSlabsAttributeName from './GetInterestRateChartsChartIdChartSlabsAttributeName';
import GetInterestRateChartsChartIdChartSlabsConditionType from './GetInterestRateChartsChartIdChartSlabsConditionType';
import GetInterestRateChartsChartIdChartSlabsEntityType from './GetInterestRateChartsChartIdChartSlabsEntityType';
import GetInterestRateChartsChartIdChartSlabsIncentiveType from './GetInterestRateChartsChartIdChartSlabsIncentiveType';

/**
 * The GetInterestRateChartsChartIdChartSlabsIncentives model module.
 * @module model/GetInterestRateChartsChartIdChartSlabsIncentives
 * @version 1.0
 */
class GetInterestRateChartsChartIdChartSlabsIncentives {
    /**
     * Constructs a new <code>GetInterestRateChartsChartIdChartSlabsIncentives</code>.
     * @alias module:model/GetInterestRateChartsChartIdChartSlabsIncentives
     */
    constructor() { 
        
        GetInterestRateChartsChartIdChartSlabsIncentives.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetInterestRateChartsChartIdChartSlabsIncentives</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetInterestRateChartsChartIdChartSlabsIncentives} obj Optional instance to populate.
     * @return {module:model/GetInterestRateChartsChartIdChartSlabsIncentives} The populated <code>GetInterestRateChartsChartIdChartSlabsIncentives</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetInterestRateChartsChartIdChartSlabsIncentives();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('entityType')) {
                obj['entityType'] = GetInterestRateChartsChartIdChartSlabsEntityType.constructFromObject(data['entityType']);
            }
            if (data.hasOwnProperty('attributeName')) {
                obj['attributeName'] = GetInterestRateChartsChartIdChartSlabsAttributeName.constructFromObject(data['attributeName']);
            }
            if (data.hasOwnProperty('conditionType')) {
                obj['conditionType'] = GetInterestRateChartsChartIdChartSlabsConditionType.constructFromObject(data['conditionType']);
            }
            if (data.hasOwnProperty('attributeValue')) {
                obj['attributeValue'] = ApiClient.convertToType(data['attributeValue'], 'Number');
            }
            if (data.hasOwnProperty('attributeValueDesc')) {
                obj['attributeValueDesc'] = ApiClient.convertToType(data['attributeValueDesc'], 'String');
            }
            if (data.hasOwnProperty('incentiveType')) {
                obj['incentiveType'] = GetInterestRateChartsChartIdChartSlabsIncentiveType.constructFromObject(data['incentiveType']);
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetInterestRateChartsChartIdChartSlabsIncentives.prototype['id'] = undefined;

/**
 * @member {module:model/GetInterestRateChartsChartIdChartSlabsEntityType} entityType
 */
GetInterestRateChartsChartIdChartSlabsIncentives.prototype['entityType'] = undefined;

/**
 * @member {module:model/GetInterestRateChartsChartIdChartSlabsAttributeName} attributeName
 */
GetInterestRateChartsChartIdChartSlabsIncentives.prototype['attributeName'] = undefined;

/**
 * @member {module:model/GetInterestRateChartsChartIdChartSlabsConditionType} conditionType
 */
GetInterestRateChartsChartIdChartSlabsIncentives.prototype['conditionType'] = undefined;

/**
 * @member {Number} attributeValue
 */
GetInterestRateChartsChartIdChartSlabsIncentives.prototype['attributeValue'] = undefined;

/**
 * @member {String} attributeValueDesc
 */
GetInterestRateChartsChartIdChartSlabsIncentives.prototype['attributeValueDesc'] = undefined;

/**
 * @member {module:model/GetInterestRateChartsChartIdChartSlabsIncentiveType} incentiveType
 */
GetInterestRateChartsChartIdChartSlabsIncentives.prototype['incentiveType'] = undefined;

/**
 * @member {Number} amount
 */
GetInterestRateChartsChartIdChartSlabsIncentives.prototype['amount'] = undefined;






export default GetInterestRateChartsChartIdChartSlabsIncentives;

