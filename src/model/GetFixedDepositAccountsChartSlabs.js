

import ApiClient from '../ApiClient';
import GetFixedDepositAccountsAccountChartCurrency from './GetFixedDepositAccountsAccountChartCurrency';
import GetFixedDepositAccountsPeriodType from './GetFixedDepositAccountsPeriodType';

/**
 * The GetFixedDepositAccountsChartSlabs model module.
 * @module model/GetFixedDepositAccountsChartSlabs
 * @version 1.0
 */
class GetFixedDepositAccountsChartSlabs {
    /**
     * Constructs a new <code>GetFixedDepositAccountsChartSlabs</code>.
     * @alias module:model/GetFixedDepositAccountsChartSlabs
     */
    constructor() { 
        
        GetFixedDepositAccountsChartSlabs.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetFixedDepositAccountsChartSlabs</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetFixedDepositAccountsChartSlabs} obj Optional instance to populate.
     * @return {module:model/GetFixedDepositAccountsChartSlabs} The populated <code>GetFixedDepositAccountsChartSlabs</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetFixedDepositAccountsChartSlabs();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('periodType')) {
                obj['periodType'] = GetFixedDepositAccountsPeriodType.constructFromObject(data['periodType']);
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
                obj['currency'] = GetFixedDepositAccountsAccountChartCurrency.constructFromObject(data['currency']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetFixedDepositAccountsChartSlabs.prototype['id'] = undefined;

/**
 * @member {module:model/GetFixedDepositAccountsPeriodType} periodType
 */
GetFixedDepositAccountsChartSlabs.prototype['periodType'] = undefined;

/**
 * @member {Number} fromPeriod
 */
GetFixedDepositAccountsChartSlabs.prototype['fromPeriod'] = undefined;

/**
 * @member {Number} toPeriod
 */
GetFixedDepositAccountsChartSlabs.prototype['toPeriod'] = undefined;

/**
 * @member {Number} annualInterestRate
 */
GetFixedDepositAccountsChartSlabs.prototype['annualInterestRate'] = undefined;

/**
 * @member {module:model/GetFixedDepositAccountsAccountChartCurrency} currency
 */
GetFixedDepositAccountsChartSlabs.prototype['currency'] = undefined;






export default GetFixedDepositAccountsChartSlabs;

