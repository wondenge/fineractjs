

import ApiClient from '../ApiClient';
import GetInterestRateChartsChartSlabs from './GetInterestRateChartsChartSlabs';

/**
 * The GetInterestRateChartsResponse model module.
 * @module model/GetInterestRateChartsResponse
 * @version 1.0
 */
class GetInterestRateChartsResponse {
    /**
     * Constructs a new <code>GetInterestRateChartsResponse</code>.
     * GetInterestRateChartsResponse
     * @alias module:model/GetInterestRateChartsResponse
     */
    constructor() { 
        
        GetInterestRateChartsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetInterestRateChartsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetInterestRateChartsResponse} obj Optional instance to populate.
     * @return {module:model/GetInterestRateChartsResponse} The populated <code>GetInterestRateChartsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetInterestRateChartsResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('fromDate')) {
                obj['fromDate'] = ApiClient.convertToType(data['fromDate'], 'Date');
            }
            if (data.hasOwnProperty('savingsProductId')) {
                obj['savingsProductId'] = ApiClient.convertToType(data['savingsProductId'], 'Number');
            }
            if (data.hasOwnProperty('savingsProductName')) {
                obj['savingsProductName'] = ApiClient.convertToType(data['savingsProductName'], 'String');
            }
            if (data.hasOwnProperty('chartSlabs')) {
                obj['chartSlabs'] = ApiClient.convertToType(data['chartSlabs'], [GetInterestRateChartsChartSlabs]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetInterestRateChartsResponse.prototype['id'] = undefined;

/**
 * @member {Date} fromDate
 */
GetInterestRateChartsResponse.prototype['fromDate'] = undefined;

/**
 * @member {Number} savingsProductId
 */
GetInterestRateChartsResponse.prototype['savingsProductId'] = undefined;

/**
 * @member {String} savingsProductName
 */
GetInterestRateChartsResponse.prototype['savingsProductName'] = undefined;

/**
 * @member {Array.<module:model/GetInterestRateChartsChartSlabs>} chartSlabs
 */
GetInterestRateChartsResponse.prototype['chartSlabs'] = undefined;






export default GetInterestRateChartsResponse;

