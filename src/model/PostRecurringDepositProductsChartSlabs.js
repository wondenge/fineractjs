

import ApiClient from '../ApiClient';

/**
 * The PostRecurringDepositProductsChartSlabs model module.
 * @module model/PostRecurringDepositProductsChartSlabs
 * @version 1.0
 */
class PostRecurringDepositProductsChartSlabs {
    /**
     * Constructs a new <code>PostRecurringDepositProductsChartSlabs</code>.
     * @alias module:model/PostRecurringDepositProductsChartSlabs
     */
    constructor() { 
        
        PostRecurringDepositProductsChartSlabs.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostRecurringDepositProductsChartSlabs</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostRecurringDepositProductsChartSlabs} obj Optional instance to populate.
     * @return {module:model/PostRecurringDepositProductsChartSlabs} The populated <code>PostRecurringDepositProductsChartSlabs</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostRecurringDepositProductsChartSlabs();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('periodType')) {
                obj['periodType'] = ApiClient.convertToType(data['periodType'], 'Number');
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
        }
        return obj;
    }


}

/**
 * @member {String} description
 */
PostRecurringDepositProductsChartSlabs.prototype['description'] = undefined;

/**
 * @member {Number} periodType
 */
PostRecurringDepositProductsChartSlabs.prototype['periodType'] = undefined;

/**
 * @member {Number} fromPeriod
 */
PostRecurringDepositProductsChartSlabs.prototype['fromPeriod'] = undefined;

/**
 * @member {Number} toPeriod
 */
PostRecurringDepositProductsChartSlabs.prototype['toPeriod'] = undefined;

/**
 * @member {Number} annualInterestRate
 */
PostRecurringDepositProductsChartSlabs.prototype['annualInterestRate'] = undefined;






export default PostRecurringDepositProductsChartSlabs;

