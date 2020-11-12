

import ApiClient from '../ApiClient';

/**
 * The PutInterestRateChartsChartIdRequest model module.
 * @module model/PutInterestRateChartsChartIdRequest
 * @version 1.0
 */
class PutInterestRateChartsChartIdRequest {
    /**
     * Constructs a new <code>PutInterestRateChartsChartIdRequest</code>.
     * PutInterestRateChartsChartIdRequest
     * @alias module:model/PutInterestRateChartsChartIdRequest
     */
    constructor() { 
        
        PutInterestRateChartsChartIdRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutInterestRateChartsChartIdRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutInterestRateChartsChartIdRequest} obj Optional instance to populate.
     * @return {module:model/PutInterestRateChartsChartIdRequest} The populated <code>PutInterestRateChartsChartIdRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutInterestRateChartsChartIdRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
PutInterestRateChartsChartIdRequest.prototype['name'] = undefined;

/**
 * @member {String} description
 */
PutInterestRateChartsChartIdRequest.prototype['description'] = undefined;






export default PutInterestRateChartsChartIdRequest;

