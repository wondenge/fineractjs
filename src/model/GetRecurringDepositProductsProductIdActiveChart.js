

import ApiClient from '../ApiClient';
import GetRecurringDepositProductsProductIdChartSlabs from './GetRecurringDepositProductsProductIdChartSlabs';
import GetRecurringDepositProductsProductIdPeriodType from './GetRecurringDepositProductsProductIdPeriodType';

/**
 * The GetRecurringDepositProductsProductIdActiveChart model module.
 * @module model/GetRecurringDepositProductsProductIdActiveChart
 * @version 1.0
 */
class GetRecurringDepositProductsProductIdActiveChart {
    /**
     * Constructs a new <code>GetRecurringDepositProductsProductIdActiveChart</code>.
     * @alias module:model/GetRecurringDepositProductsProductIdActiveChart
     */
    constructor() { 
        
        GetRecurringDepositProductsProductIdActiveChart.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetRecurringDepositProductsProductIdActiveChart</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetRecurringDepositProductsProductIdActiveChart} obj Optional instance to populate.
     * @return {module:model/GetRecurringDepositProductsProductIdActiveChart} The populated <code>GetRecurringDepositProductsProductIdActiveChart</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRecurringDepositProductsProductIdActiveChart();

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
                obj['chartSlabs'] = ApiClient.convertToType(data['chartSlabs'], [GetRecurringDepositProductsProductIdChartSlabs]);
            }
            if (data.hasOwnProperty('periodTypes')) {
                obj['periodTypes'] = ApiClient.convertToType(data['periodTypes'], [GetRecurringDepositProductsProductIdPeriodType]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetRecurringDepositProductsProductIdActiveChart.prototype['id'] = undefined;

/**
 * @member {Date} fromDate
 */
GetRecurringDepositProductsProductIdActiveChart.prototype['fromDate'] = undefined;

/**
 * @member {Number} savingsProductId
 */
GetRecurringDepositProductsProductIdActiveChart.prototype['savingsProductId'] = undefined;

/**
 * @member {String} savingsProductName
 */
GetRecurringDepositProductsProductIdActiveChart.prototype['savingsProductName'] = undefined;

/**
 * @member {Array.<module:model/GetRecurringDepositProductsProductIdChartSlabs>} chartSlabs
 */
GetRecurringDepositProductsProductIdActiveChart.prototype['chartSlabs'] = undefined;

/**
 * @member {Array.<module:model/GetRecurringDepositProductsProductIdPeriodType>} periodTypes
 */
GetRecurringDepositProductsProductIdActiveChart.prototype['periodTypes'] = undefined;






export default GetRecurringDepositProductsProductIdActiveChart;

