

import ApiClient from '../ApiClient';

/**
 * The GetInterestRateChartsChartIdChartSlabsIncentiveType model module.
 * @module model/GetInterestRateChartsChartIdChartSlabsIncentiveType
 * @version 1.0
 */
class GetInterestRateChartsChartIdChartSlabsIncentiveType {
    /**
     * Constructs a new <code>GetInterestRateChartsChartIdChartSlabsIncentiveType</code>.
     * @alias module:model/GetInterestRateChartsChartIdChartSlabsIncentiveType
     */
    constructor() { 
        
        GetInterestRateChartsChartIdChartSlabsIncentiveType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetInterestRateChartsChartIdChartSlabsIncentiveType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetInterestRateChartsChartIdChartSlabsIncentiveType} obj Optional instance to populate.
     * @return {module:model/GetInterestRateChartsChartIdChartSlabsIncentiveType} The populated <code>GetInterestRateChartsChartIdChartSlabsIncentiveType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetInterestRateChartsChartIdChartSlabsIncentiveType();

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
GetInterestRateChartsChartIdChartSlabsIncentiveType.prototype['id'] = undefined;

/**
 * @member {Number} code
 */
GetInterestRateChartsChartIdChartSlabsIncentiveType.prototype['code'] = undefined;

/**
 * @member {Number} description
 */
GetInterestRateChartsChartIdChartSlabsIncentiveType.prototype['description'] = undefined;






export default GetInterestRateChartsChartIdChartSlabsIncentiveType;

