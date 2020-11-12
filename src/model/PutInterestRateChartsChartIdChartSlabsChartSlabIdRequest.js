

import ApiClient from '../ApiClient';

/**
 * The PutInterestRateChartsChartIdChartSlabsChartSlabIdRequest model module.
 * @module model/PutInterestRateChartsChartIdChartSlabsChartSlabIdRequest
 * @version 1.0
 */
class PutInterestRateChartsChartIdChartSlabsChartSlabIdRequest {
    /**
     * Constructs a new <code>PutInterestRateChartsChartIdChartSlabsChartSlabIdRequest</code>.
     * PutInterestRateChartsChartIdChartSlabsChartSlabIdRequest
     * @alias module:model/PutInterestRateChartsChartIdChartSlabsChartSlabIdRequest
     */
    constructor() { 
        
        PutInterestRateChartsChartIdChartSlabsChartSlabIdRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutInterestRateChartsChartIdChartSlabsChartSlabIdRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutInterestRateChartsChartIdChartSlabsChartSlabIdRequest} obj Optional instance to populate.
     * @return {module:model/PutInterestRateChartsChartIdChartSlabsChartSlabIdRequest} The populated <code>PutInterestRateChartsChartIdChartSlabsChartSlabIdRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutInterestRateChartsChartIdChartSlabsChartSlabIdRequest();

            if (data.hasOwnProperty('annualInterestRate')) {
                obj['annualInterestRate'] = ApiClient.convertToType(data['annualInterestRate'], 'Number');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} annualInterestRate
 */
PutInterestRateChartsChartIdChartSlabsChartSlabIdRequest.prototype['annualInterestRate'] = undefined;

/**
 * @member {String} description
 */
PutInterestRateChartsChartIdChartSlabsChartSlabIdRequest.prototype['description'] = undefined;






export default PutInterestRateChartsChartIdChartSlabsChartSlabIdRequest;

