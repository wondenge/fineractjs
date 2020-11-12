

import ApiClient from '../ApiClient';
import GetRecurringDepositAccountsChartSlabs from './GetRecurringDepositAccountsChartSlabs';
import GetRecurringDepositAccountsPeriodTypes from './GetRecurringDepositAccountsPeriodTypes';

/**
 * The GetRecurringDepositAccountsAccountChart model module.
 * @module model/GetRecurringDepositAccountsAccountChart
 * @version 1.0
 */
class GetRecurringDepositAccountsAccountChart {
    /**
     * Constructs a new <code>GetRecurringDepositAccountsAccountChart</code>.
     * @alias module:model/GetRecurringDepositAccountsAccountChart
     */
    constructor() { 
        
        GetRecurringDepositAccountsAccountChart.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetRecurringDepositAccountsAccountChart</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetRecurringDepositAccountsAccountChart} obj Optional instance to populate.
     * @return {module:model/GetRecurringDepositAccountsAccountChart} The populated <code>GetRecurringDepositAccountsAccountChart</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRecurringDepositAccountsAccountChart();

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
                obj['chartSlabs'] = ApiClient.convertToType(data['chartSlabs'], [GetRecurringDepositAccountsChartSlabs]);
            }
            if (data.hasOwnProperty('periodTypes')) {
                obj['periodTypes'] = ApiClient.convertToType(data['periodTypes'], [GetRecurringDepositAccountsPeriodTypes]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetRecurringDepositAccountsAccountChart.prototype['id'] = undefined;

/**
 * @member {Date} fromDate
 */
GetRecurringDepositAccountsAccountChart.prototype['fromDate'] = undefined;

/**
 * @member {Number} accountId
 */
GetRecurringDepositAccountsAccountChart.prototype['accountId'] = undefined;

/**
 * @member {Number} accountNumber
 */
GetRecurringDepositAccountsAccountChart.prototype['accountNumber'] = undefined;

/**
 * @member {Array.<module:model/GetRecurringDepositAccountsChartSlabs>} chartSlabs
 */
GetRecurringDepositAccountsAccountChart.prototype['chartSlabs'] = undefined;

/**
 * @member {Array.<module:model/GetRecurringDepositAccountsPeriodTypes>} periodTypes
 */
GetRecurringDepositAccountsAccountChart.prototype['periodTypes'] = undefined;






export default GetRecurringDepositAccountsAccountChart;

