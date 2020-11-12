  

import ApiClient from '../ApiClient';
import GetFixedDepositAccountsChartSlabs from './GetFixedDepositAccountsChartSlabs';
import GetFixedDepositAccountsPeriodTypes from './GetFixedDepositAccountsPeriodTypes';

/**
 * The GetFixedDepositAccountsAccountChart model module.
 * @module model/GetFixedDepositAccountsAccountChart
 * @version 1.0
 */
class GetFixedDepositAccountsAccountChart {
    /**
     * Constructs a new <code>GetFixedDepositAccountsAccountChart</code>.
     * @alias module:model/GetFixedDepositAccountsAccountChart
     */
    constructor() { 
        
        GetFixedDepositAccountsAccountChart.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetFixedDepositAccountsAccountChart</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetFixedDepositAccountsAccountChart} obj Optional instance to populate.
     * @return {module:model/GetFixedDepositAccountsAccountChart} The populated <code>GetFixedDepositAccountsAccountChart</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetFixedDepositAccountsAccountChart();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('fromDate')) {
                obj['fromDate'] = ApiClient.convertToType(data['fromDate'], 'Date');
            }
            if (data.hasOwnProperty('accountId')) {
                obj['accountId'] = ApiClient.convertToType(data['accountId'], 'Number');
            }
            if (data.hasOwnProperty('accountNumber')) {
                obj['accountNumber'] = ApiClient.convertToType(data['accountNumber'], 'Number');
            }
            if (data.hasOwnProperty('chartSlabs')) {
                obj['chartSlabs'] = ApiClient.convertToType(data['chartSlabs'], [GetFixedDepositAccountsChartSlabs]);
            }
            if (data.hasOwnProperty('periodTypes')) {
                obj['periodTypes'] = ApiClient.convertToType(data['periodTypes'], [GetFixedDepositAccountsPeriodTypes]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetFixedDepositAccountsAccountChart.prototype['id'] = undefined;

/**
 * @member {Date} fromDate
 */
GetFixedDepositAccountsAccountChart.prototype['fromDate'] = undefined;

/**
 * @member {Number} accountId
 */
GetFixedDepositAccountsAccountChart.prototype['accountId'] = undefined;

/**
 * @member {Number} accountNumber
 */
GetFixedDepositAccountsAccountChart.prototype['accountNumber'] = undefined;

/**
 * @member {Array.<module:model/GetFixedDepositAccountsChartSlabs>} chartSlabs
 */
GetFixedDepositAccountsAccountChart.prototype['chartSlabs'] = undefined;

/**
 * @member {Array.<module:model/GetFixedDepositAccountsPeriodTypes>} periodTypes
 */
GetFixedDepositAccountsAccountChart.prototype['periodTypes'] = undefined;






export default GetFixedDepositAccountsAccountChart;

