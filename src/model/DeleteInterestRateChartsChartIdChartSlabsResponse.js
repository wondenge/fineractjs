

import ApiClient from '../ApiClient';

/**
 * The DeleteInterestRateChartsChartIdChartSlabsResponse model module.
 * @module model/DeleteInterestRateChartsChartIdChartSlabsResponse
 * @version 1.0
 */
class DeleteInterestRateChartsChartIdChartSlabsResponse {
    /**
     * Constructs a new <code>DeleteInterestRateChartsChartIdChartSlabsResponse</code>.
     * DeleteInterestRateChartsChartIdChartSlabsResponse
     * @alias module:model/DeleteInterestRateChartsChartIdChartSlabsResponse
     */
    constructor() { 
        
        DeleteInterestRateChartsChartIdChartSlabsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeleteInterestRateChartsChartIdChartSlabsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteInterestRateChartsChartIdChartSlabsResponse} obj Optional instance to populate.
     * @return {module:model/DeleteInterestRateChartsChartIdChartSlabsResponse} The populated <code>DeleteInterestRateChartsChartIdChartSlabsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteInterestRateChartsChartIdChartSlabsResponse();

            if (data.hasOwnProperty('resourceId')) {
                obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} resourceId
 */
DeleteInterestRateChartsChartIdChartSlabsResponse.prototype['resourceId'] = undefined;






export default DeleteInterestRateChartsChartIdChartSlabsResponse;

