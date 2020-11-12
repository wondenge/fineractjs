

import ApiClient from '../ApiClient';
import PostInterestRateChartsChartIdChartSlabsIncentives from './PostInterestRateChartsChartIdChartSlabsIncentives';

/**
 * The PostInterestRateChartsChartIdChartSlabsRequest model module.
 * @module model/PostInterestRateChartsChartIdChartSlabsRequest
 * @version 1.0
 */
class PostInterestRateChartsChartIdChartSlabsRequest {
    /**
     * Constructs a new <code>PostInterestRateChartsChartIdChartSlabsRequest</code>.
     * PostInterestRateChartsChartIdChartSlabsRequest
     * @alias module:model/PostInterestRateChartsChartIdChartSlabsRequest
     */
    constructor() { 
        
        PostInterestRateChartsChartIdChartSlabsRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostInterestRateChartsChartIdChartSlabsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostInterestRateChartsChartIdChartSlabsRequest} obj Optional instance to populate.
     * @return {module:model/PostInterestRateChartsChartIdChartSlabsRequest} The populated <code>PostInterestRateChartsChartIdChartSlabsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostInterestRateChartsChartIdChartSlabsRequest();

            if (data.hasOwnProperty('periodType')) {
                obj['periodType'] = ApiClient.convertToType(data['periodType'], 'Number');
            }
            if (data.hasOwnProperty('fromPeriod')) {
                obj['fromPeriod'] = ApiClient.convertToType(data['fromPeriod'], 'Number');
            }
            if (data.hasOwnProperty('toPeriod')) {
                obj['toPeriod'] = ApiClient.convertToType(data['toPeriod'], 'Number');
            }
            if (data.hasOwnProperty('annualInterestRate')) {
                obj['annualInterestRate'] = ApiClient.convertToType(data['annualInterestRate'], 'Number');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
            if (data.hasOwnProperty('incentives')) {
                obj['incentives'] = ApiClient.convertToType(data['incentives'], [PostInterestRateChartsChartIdChartSlabsIncentives]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} periodType
 */
PostInterestRateChartsChartIdChartSlabsRequest.prototype['periodType'] = undefined;

/**
 * @member {Number} fromPeriod
 */
PostInterestRateChartsChartIdChartSlabsRequest.prototype['fromPeriod'] = undefined;

/**
 * @member {Number} toPeriod
 */
PostInterestRateChartsChartIdChartSlabsRequest.prototype['toPeriod'] = undefined;

/**
 * @member {Number} annualInterestRate
 */
PostInterestRateChartsChartIdChartSlabsRequest.prototype['annualInterestRate'] = undefined;

/**
 * @member {String} description
 */
PostInterestRateChartsChartIdChartSlabsRequest.prototype['description'] = undefined;

/**
 * @member {String} locale
 */
PostInterestRateChartsChartIdChartSlabsRequest.prototype['locale'] = undefined;

/**
 * @member {Array.<module:model/PostInterestRateChartsChartIdChartSlabsIncentives>} incentives
 */
PostInterestRateChartsChartIdChartSlabsRequest.prototype['incentives'] = undefined;






export default PostInterestRateChartsChartIdChartSlabsRequest;

