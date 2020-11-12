

import ApiClient from '../ApiClient';
import GetInterestRateChartsCurrency from './GetInterestRateChartsCurrency';
import GetInterestRateChartsTemplatePeriodTypes from './GetInterestRateChartsTemplatePeriodTypes';

/**
 * The GetInterestRateChartsChartSlabs model module.
 * @module model/GetInterestRateChartsChartSlabs
 * @version 1.0
 */
class GetInterestRateChartsChartSlabs {
    /**
     * Constructs a new <code>GetInterestRateChartsChartSlabs</code>.
     * @alias module:model/GetInterestRateChartsChartSlabs
     */
    constructor() { 
        
        GetInterestRateChartsChartSlabs.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetInterestRateChartsChartSlabs</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetInterestRateChartsChartSlabs} obj Optional instance to populate.
     * @return {module:model/GetInterestRateChartsChartSlabs} The populated <code>GetInterestRateChartsChartSlabs</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetInterestRateChartsChartSlabs();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('periodTypes')) {
                obj['periodTypes'] = GetInterestRateChartsTemplatePeriodTypes.constructFromObject(data['periodTypes']);
            }
            if (data.hasOwnProperty('fromPeriod')) {
                obj['fromPeriod'] = ApiClient.convertToType(data['fromPeriod'], 'Number');
            }
            if (data.hasOwnProperty('annualInterestRate')) {
                obj['annualInterestRate'] = ApiClient.convertToType(data['annualInterestRate'], 'Number');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = GetInterestRateChartsCurrency.constructFromObject(data['currency']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetInterestRateChartsChartSlabs.prototype['id'] = undefined;

/**
 * @member {module:model/GetInterestRateChartsTemplatePeriodTypes} periodTypes
 */
GetInterestRateChartsChartSlabs.prototype['periodTypes'] = undefined;

/**
 * @member {Number} fromPeriod
 */
GetInterestRateChartsChartSlabs.prototype['fromPeriod'] = undefined;

/**
 * @member {Number} annualInterestRate
 */
GetInterestRateChartsChartSlabs.prototype['annualInterestRate'] = undefined;

/**
 * @member {module:model/GetInterestRateChartsCurrency} currency
 */
GetInterestRateChartsChartSlabs.prototype['currency'] = undefined;






export default GetInterestRateChartsChartSlabs;

