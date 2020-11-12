  

import ApiClient from '../ApiClient';
import GetFixedDepositProductsProductIdChartSlabs from './GetFixedDepositProductsProductIdChartSlabs';
import GetFixedDepositProductsProductIdPeriodType from './GetFixedDepositProductsProductIdPeriodType';

/**
 * The GetFixedDepositProductsProductIdActiveChart model module.
 * @module model/GetFixedDepositProductsProductIdActiveChart
 * @version 1.0
 */
class GetFixedDepositProductsProductIdActiveChart {
    /**
     * Constructs a new <code>GetFixedDepositProductsProductIdActiveChart</code>.
     * @alias module:model/GetFixedDepositProductsProductIdActiveChart
     */
    constructor() { 
        
        GetFixedDepositProductsProductIdActiveChart.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetFixedDepositProductsProductIdActiveChart</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetFixedDepositProductsProductIdActiveChart} obj Optional instance to populate.
     * @return {module:model/GetFixedDepositProductsProductIdActiveChart} The populated <code>GetFixedDepositProductsProductIdActiveChart</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetFixedDepositProductsProductIdActiveChart();

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
                obj['chartSlabs'] = ApiClient.convertToType(data['chartSlabs'], [GetFixedDepositProductsProductIdChartSlabs]);
            }
            if (data.hasOwnProperty('periodTypes')) {
                obj['periodTypes'] = ApiClient.convertToType(data['periodTypes'], [GetFixedDepositProductsProductIdPeriodType]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetFixedDepositProductsProductIdActiveChart.prototype['id'] = undefined;

/**
 * @member {Date} fromDate
 */
GetFixedDepositProductsProductIdActiveChart.prototype['fromDate'] = undefined;

/**
 * @member {Number} savingsProductId
 */
GetFixedDepositProductsProductIdActiveChart.prototype['savingsProductId'] = undefined;

/**
 * @member {String} savingsProductName
 */
GetFixedDepositProductsProductIdActiveChart.prototype['savingsProductName'] = undefined;

/**
 * @member {Array.<module:model/GetFixedDepositProductsProductIdChartSlabs>} chartSlabs
 */
GetFixedDepositProductsProductIdActiveChart.prototype['chartSlabs'] = undefined;

/**
 * @member {Array.<module:model/GetFixedDepositProductsProductIdPeriodType>} periodTypes
 */
GetFixedDepositProductsProductIdActiveChart.prototype['periodTypes'] = undefined;






export default GetFixedDepositProductsProductIdActiveChart;

