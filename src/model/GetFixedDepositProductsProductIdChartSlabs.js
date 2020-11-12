

import ApiClient from '../ApiClient';
import GetFixedDepositProductsProductIdCurrency from './GetFixedDepositProductsProductIdCurrency';
import GetFixedDepositProductsProductIdPeriodType from './GetFixedDepositProductsProductIdPeriodType';

/**
 * The GetFixedDepositProductsProductIdChartSlabs model module.
 * @module model/GetFixedDepositProductsProductIdChartSlabs
 * @version 1.0
 */
class GetFixedDepositProductsProductIdChartSlabs {
    /**
     * Constructs a new <code>GetFixedDepositProductsProductIdChartSlabs</code>.
     * @alias module:model/GetFixedDepositProductsProductIdChartSlabs
     */
    constructor() { 
        
        GetFixedDepositProductsProductIdChartSlabs.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetFixedDepositProductsProductIdChartSlabs</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetFixedDepositProductsProductIdChartSlabs} obj Optional instance to populate.
     * @return {module:model/GetFixedDepositProductsProductIdChartSlabs} The populated <code>GetFixedDepositProductsProductIdChartSlabs</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetFixedDepositProductsProductIdChartSlabs();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('periodType')) {
                obj['periodType'] = GetFixedDepositProductsProductIdPeriodType.constructFromObject(data['periodType']);
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
                obj['currency'] = GetFixedDepositProductsProductIdCurrency.constructFromObject(data['currency']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetFixedDepositProductsProductIdChartSlabs.prototype['id'] = undefined;

/**
 * @member {String} description
 */
GetFixedDepositProductsProductIdChartSlabs.prototype['description'] = undefined;

/**
 * @member {module:model/GetFixedDepositProductsProductIdPeriodType} periodType
 */
GetFixedDepositProductsProductIdChartSlabs.prototype['periodType'] = undefined;

/**
 * @member {Number} fromPeriod
 */
GetFixedDepositProductsProductIdChartSlabs.prototype['fromPeriod'] = undefined;

/**
 * @member {Number} toPeriod
 */
GetFixedDepositProductsProductIdChartSlabs.prototype['toPeriod'] = undefined;

/**
 * @member {Number} annualInterestRate
 */
GetFixedDepositProductsProductIdChartSlabs.prototype['annualInterestRate'] = undefined;

/**
 * @member {module:model/GetFixedDepositProductsProductIdCurrency} currency
 */
GetFixedDepositProductsProductIdChartSlabs.prototype['currency'] = undefined;






export default GetFixedDepositProductsProductIdChartSlabs;

