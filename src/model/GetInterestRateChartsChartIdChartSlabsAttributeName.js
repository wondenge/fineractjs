

import ApiClient from '../ApiClient';

/**
 * The GetInterestRateChartsChartIdChartSlabsAttributeName model module.
 * @module model/GetInterestRateChartsChartIdChartSlabsAttributeName
 * @version 1.0
 */
class GetInterestRateChartsChartIdChartSlabsAttributeName {
    /**
     * Constructs a new <code>GetInterestRateChartsChartIdChartSlabsAttributeName</code>.
     * @alias module:model/GetInterestRateChartsChartIdChartSlabsAttributeName
     */
    constructor() { 
        
        GetInterestRateChartsChartIdChartSlabsAttributeName.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetInterestRateChartsChartIdChartSlabsAttributeName</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetInterestRateChartsChartIdChartSlabsAttributeName} obj Optional instance to populate.
     * @return {module:model/GetInterestRateChartsChartIdChartSlabsAttributeName} The populated <code>GetInterestRateChartsChartIdChartSlabsAttributeName</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetInterestRateChartsChartIdChartSlabsAttributeName();

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
GetInterestRateChartsChartIdChartSlabsAttributeName.prototype['id'] = undefined;

/**
 * @member {Number} code
 */
GetInterestRateChartsChartIdChartSlabsAttributeName.prototype['code'] = undefined;

/**
 * @member {Number} description
 */
GetInterestRateChartsChartIdChartSlabsAttributeName.prototype['description'] = undefined;






export default GetInterestRateChartsChartIdChartSlabsAttributeName;

