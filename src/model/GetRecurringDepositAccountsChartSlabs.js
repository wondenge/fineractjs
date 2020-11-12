

import ApiClient from '../ApiClient';
import GetRecurringDepositAccountsAccountChartCurrency from './GetRecurringDepositAccountsAccountChartCurrency';
import GetRecurringDepositAccountsPeriodType from './GetRecurringDepositAccountsPeriodType';

/**
 * The GetRecurringDepositAccountsChartSlabs model module.
 * @module model/GetRecurringDepositAccountsChartSlabs
 * @version 1.0
 */
class GetRecurringDepositAccountsChartSlabs {
    /**
     * Constructs a new <code>GetRecurringDepositAccountsChartSlabs</code>.
     * @alias module:model/GetRecurringDepositAccountsChartSlabs
     */
    constructor() { 
        
        GetRecurringDepositAccountsChartSlabs.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetRecurringDepositAccountsChartSlabs</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetRecurringDepositAccountsChartSlabs} obj Optional instance to populate.
     * @return {module:model/GetRecurringDepositAccountsChartSlabs} The populated <code>GetRecurringDepositAccountsChartSlabs</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRecurringDepositAccountsChartSlabs();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('periodType')) {
                obj['periodType'] = GetRecurringDepositAccountsPeriodType.constructFromObject(data['periodType']);
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
                obj['currency'] = GetRecurringDepositAccountsAccountChartCurrency.constructFromObject(data['currency']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetRecurringDepositAccountsChartSlabs.prototype['id'] = undefined;

/**
 * @member {module:model/GetRecurringDepositAccountsPeriodType} periodType
 */
GetRecurringDepositAccountsChartSlabs.prototype['periodType'] = undefined;

/**
 * @member {Number} fromPeriod
 */
GetRecurringDepositAccountsChartSlabs.prototype['fromPeriod'] = undefined;

/**
 * @member {Number} toPeriod
 */
GetRecurringDepositAccountsChartSlabs.prototype['toPeriod'] = undefined;

/**
 * @member {Number} annualInterestRate
 */
GetRecurringDepositAccountsChartSlabs.prototype['annualInterestRate'] = undefined;

/**
 * @member {module:model/GetRecurringDepositAccountsAccountChartCurrency} currency
 */
GetRecurringDepositAccountsChartSlabs.prototype['currency'] = undefined;






export default GetRecurringDepositAccountsChartSlabs;

