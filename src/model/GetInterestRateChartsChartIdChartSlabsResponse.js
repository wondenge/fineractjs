

import ApiClient from '../ApiClient';
import GetInterestRateChartsChartIdChartSlabsIncentives from './GetInterestRateChartsChartIdChartSlabsIncentives';
import GetInterestRateChartsCurrency from './GetInterestRateChartsCurrency';
import GetInterestRateChartsTemplatePeriodTypes from './GetInterestRateChartsTemplatePeriodTypes';

/**
 * The GetInterestRateChartsChartIdChartSlabsResponse model module.
 * @module model/GetInterestRateChartsChartIdChartSlabsResponse
 * @version 1.0
 */
class GetInterestRateChartsChartIdChartSlabsResponse {
    /**
     * Constructs a new <code>GetInterestRateChartsChartIdChartSlabsResponse</code>.
     * GetInterestRateChartsChartIdChartSlabsResponse
     * @alias module:model/GetInterestRateChartsChartIdChartSlabsResponse
     */
    constructor() { 
        
        GetInterestRateChartsChartIdChartSlabsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetInterestRateChartsChartIdChartSlabsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetInterestRateChartsChartIdChartSlabsResponse} obj Optional instance to populate.
     * @return {module:model/GetInterestRateChartsChartIdChartSlabsResponse} The populated <code>GetInterestRateChartsChartIdChartSlabsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetInterestRateChartsChartIdChartSlabsResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('periodTypes')) {
                obj['periodTypes'] = GetInterestRateChartsTemplatePeriodTypes.constructFromObject(data['periodTypes']);
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
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = GetInterestRateChartsCurrency.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('incentives')) {
                obj['incentives'] = ApiClient.convertToType(data['incentives'], [GetInterestRateChartsChartIdChartSlabsIncentives]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetInterestRateChartsChartIdChartSlabsResponse.prototype['id'] = undefined;

/**
 * @member {String} description
 */
GetInterestRateChartsChartIdChartSlabsResponse.prototype['description'] = undefined;

/**
 * @member {module:model/GetInterestRateChartsTemplatePeriodTypes} periodTypes
 */
GetInterestRateChartsChartIdChartSlabsResponse.prototype['periodTypes'] = undefined;

/**
 * @member {Number} fromPeriod
 */
GetInterestRateChartsChartIdChartSlabsResponse.prototype['fromPeriod'] = undefined;

/**
 * @member {Number} toPeriod
 */
GetInterestRateChartsChartIdChartSlabsResponse.prototype['toPeriod'] = undefined;

/**
 * @member {Number} annualInterestRate
 */
GetInterestRateChartsChartIdChartSlabsResponse.prototype['annualInterestRate'] = undefined;

/**
 * @member {module:model/GetInterestRateChartsCurrency} currency
 */
GetInterestRateChartsChartIdChartSlabsResponse.prototype['currency'] = undefined;

/**
 * @member {Array.<module:model/GetInterestRateChartsChartIdChartSlabsIncentives>} incentives
 */
GetInterestRateChartsChartIdChartSlabsResponse.prototype['incentives'] = undefined;






export default GetInterestRateChartsChartIdChartSlabsResponse;

