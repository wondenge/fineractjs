

import ApiClient from '../ApiClient';
import GetRecurringDepositProductsProductIdCurrency from './GetRecurringDepositProductsProductIdCurrency';
import GetRecurringDepositProductsProductIdPeriodType from './GetRecurringDepositProductsProductIdPeriodType';

/**
 * The GetRecurringDepositProductsProductIdChartSlabs model module.
 * @module model/GetRecurringDepositProductsProductIdChartSlabs
 * @version 1.0
 */
class GetRecurringDepositProductsProductIdChartSlabs {
    /**
     * Constructs a new <code>GetRecurringDepositProductsProductIdChartSlabs</code>.
     * @alias module:model/GetRecurringDepositProductsProductIdChartSlabs
     */
    constructor() { 
        
        GetRecurringDepositProductsProductIdChartSlabs.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetRecurringDepositProductsProductIdChartSlabs</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetRecurringDepositProductsProductIdChartSlabs} obj Optional instance to populate.
     * @return {module:model/GetRecurringDepositProductsProductIdChartSlabs} The populated <code>GetRecurringDepositProductsProductIdChartSlabs</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRecurringDepositProductsProductIdChartSlabs();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('periodType')) {
                obj['periodType'] = GetRecurringDepositProductsProductIdPeriodType.constructFromObject(data['periodType']);
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
                obj['currency'] = GetRecurringDepositProductsProductIdCurrency.constructFromObject(data['currency']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetRecurringDepositProductsProductIdChartSlabs.prototype['id'] = undefined;

/**
 * @member {String} description
 */
GetRecurringDepositProductsProductIdChartSlabs.prototype['description'] = undefined;

/**
 * @member {module:model/GetRecurringDepositProductsProductIdPeriodType} periodType
 */
GetRecurringDepositProductsProductIdChartSlabs.prototype['periodType'] = undefined;

/**
 * @member {Number} fromPeriod
 */
GetRecurringDepositProductsProductIdChartSlabs.prototype['fromPeriod'] = undefined;

/**
 * @member {Number} toPeriod
 */
GetRecurringDepositProductsProductIdChartSlabs.prototype['toPeriod'] = undefined;

/**
 * @member {Number} annualInterestRate
 */
GetRecurringDepositProductsProductIdChartSlabs.prototype['annualInterestRate'] = undefined;

/**
 * @member {module:model/GetRecurringDepositProductsProductIdCurrency} currency
 */
GetRecurringDepositProductsProductIdChartSlabs.prototype['currency'] = undefined;






export default GetRecurringDepositProductsProductIdChartSlabs;

