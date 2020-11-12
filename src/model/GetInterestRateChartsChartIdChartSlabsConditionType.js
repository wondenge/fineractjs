

import ApiClient from '../ApiClient';

/**
 * The GetInterestRateChartsChartIdChartSlabsConditionType model module.
 * @module model/GetInterestRateChartsChartIdChartSlabsConditionType
 * @version 1.0
 */
class GetInterestRateChartsChartIdChartSlabsConditionType {
    /**
     * Constructs a new <code>GetInterestRateChartsChartIdChartSlabsConditionType</code>.
     * @alias module:model/GetInterestRateChartsChartIdChartSlabsConditionType
     */
    constructor() { 
        
        GetInterestRateChartsChartIdChartSlabsConditionType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetInterestRateChartsChartIdChartSlabsConditionType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetInterestRateChartsChartIdChartSlabsConditionType} obj Optional instance to populate.
     * @return {module:model/GetInterestRateChartsChartIdChartSlabsConditionType} The populated <code>GetInterestRateChartsChartIdChartSlabsConditionType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetInterestRateChartsChartIdChartSlabsConditionType();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'Number');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetInterestRateChartsChartIdChartSlabsConditionType.prototype['id'] = undefined;

/**
 * @member {Number} code
 */
GetInterestRateChartsChartIdChartSlabsConditionType.prototype['code'] = undefined;

/**
 * @member {Number} description
 */
GetInterestRateChartsChartIdChartSlabsConditionType.prototype['description'] = undefined;






export default GetInterestRateChartsChartIdChartSlabsConditionType;

