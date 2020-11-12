

import ApiClient from '../ApiClient';
import PutInterestRateChartsChartIdChartSlabsChartSlabIdRequest from './PutInterestRateChartsChartIdChartSlabsChartSlabIdRequest';

/**
 * The PutInterestRateChartsChartIdChartSlabsChartSlabIdResponse model module.
 * @module model/PutInterestRateChartsChartIdChartSlabsChartSlabIdResponse
 * @version 1.0
 */
class PutInterestRateChartsChartIdChartSlabsChartSlabIdResponse {
    /**
     * Constructs a new <code>PutInterestRateChartsChartIdChartSlabsChartSlabIdResponse</code>.
     * PutInterestRateChartsChartIdChartSlabsChartSlabIdResponse
     * @alias module:model/PutInterestRateChartsChartIdChartSlabsChartSlabIdResponse
     */
    constructor() { 
        
        PutInterestRateChartsChartIdChartSlabsChartSlabIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutInterestRateChartsChartIdChartSlabsChartSlabIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutInterestRateChartsChartIdChartSlabsChartSlabIdResponse} obj Optional instance to populate.
     * @return {module:model/PutInterestRateChartsChartIdChartSlabsChartSlabIdResponse} The populated <code>PutInterestRateChartsChartIdChartSlabsChartSlabIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutInterestRateChartsChartIdChartSlabsChartSlabIdResponse();

            if (data.hasOwnProperty('resourceId')) {
                obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'Number');
            }
            if (data.hasOwnProperty('changes')) {
                obj['changes'] = PutInterestRateChartsChartIdChartSlabsChartSlabIdRequest.constructFromObject(data['changes']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} resourceId
 */
PutInterestRateChartsChartIdChartSlabsChartSlabIdResponse.prototype['resourceId'] = undefined;

/**
 * @member {module:model/PutInterestRateChartsChartIdChartSlabsChartSlabIdRequest} changes
 */
PutInterestRateChartsChartIdChartSlabsChartSlabIdResponse.prototype['changes'] = undefined;






export default PutInterestRateChartsChartIdChartSlabsChartSlabIdResponse;

