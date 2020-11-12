

import ApiClient from '../ApiClient';

/**
 * The GetInterestRateChartsChartIdChartSlabsEntityType model module.
 * @module model/GetInterestRateChartsChartIdChartSlabsEntityType
 * @version 1.0
 */
class GetInterestRateChartsChartIdChartSlabsEntityType {
    /**
     * Constructs a new <code>GetInterestRateChartsChartIdChartSlabsEntityType</code>.
     * @alias module:model/GetInterestRateChartsChartIdChartSlabsEntityType
     */
    constructor() { 
        
        GetInterestRateChartsChartIdChartSlabsEntityType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetInterestRateChartsChartIdChartSlabsEntityType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetInterestRateChartsChartIdChartSlabsEntityType} obj Optional instance to populate.
     * @return {module:model/GetInterestRateChartsChartIdChartSlabsEntityType} The populated <code>GetInterestRateChartsChartIdChartSlabsEntityType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetInterestRateChartsChartIdChartSlabsEntityType();

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
GetInterestRateChartsChartIdChartSlabsEntityType.prototype['id'] = undefined;

/**
 * @member {Number} code
 */
GetInterestRateChartsChartIdChartSlabsEntityType.prototype['code'] = undefined;

/**
 * @member {Number} description
 */
GetInterestRateChartsChartIdChartSlabsEntityType.prototype['description'] = undefined;






export default GetInterestRateChartsChartIdChartSlabsEntityType;

