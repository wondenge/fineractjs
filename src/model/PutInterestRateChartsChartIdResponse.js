

import ApiClient from '../ApiClient';

/**
 * The PutInterestRateChartsChartIdResponse model module.
 * @module model/PutInterestRateChartsChartIdResponse
 * @version 1.0
 */
class PutInterestRateChartsChartIdResponse {
    /**
     * Constructs a new <code>PutInterestRateChartsChartIdResponse</code>.
     * PutInterestRateChartsChartIdResponse
     * @alias module:model/PutInterestRateChartsChartIdResponse
     */
    constructor() { 
        
        PutInterestRateChartsChartIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutInterestRateChartsChartIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutInterestRateChartsChartIdResponse} obj Optional instance to populate.
     * @return {module:model/PutInterestRateChartsChartIdResponse} The populated <code>PutInterestRateChartsChartIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutInterestRateChartsChartIdResponse();

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
PutInterestRateChartsChartIdResponse.prototype['resourceId'] = undefined;






export default PutInterestRateChartsChartIdResponse;

