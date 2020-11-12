

import ApiClient from '../ApiClient';

/**
 * The PostFixedDepositProductsChartSlabs model module.
 * @module model/PostFixedDepositProductsChartSlabs
 * @version 1.0
 */
class PostFixedDepositProductsChartSlabs {
    /**
     * Constructs a new <code>PostFixedDepositProductsChartSlabs</code>.
     * @alias module:model/PostFixedDepositProductsChartSlabs
     */
    constructor() { 
        
        PostFixedDepositProductsChartSlabs.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostFixedDepositProductsChartSlabs</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostFixedDepositProductsChartSlabs} obj Optional instance to populate.
     * @return {module:model/PostFixedDepositProductsChartSlabs} The populated <code>PostFixedDepositProductsChartSlabs</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostFixedDepositProductsChartSlabs();

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
PostFixedDepositProductsChartSlabs.prototype['description'] = undefined;

/**
 * @member {Number} periodType
 */
PostFixedDepositProductsChartSlabs.prototype['periodType'] = undefined;

/**
 * @member {Number} fromPeriod
 */
PostFixedDepositProductsChartSlabs.prototype['fromPeriod'] = undefined;

/**
 * @member {Number} toPeriod
 */
PostFixedDepositProductsChartSlabs.prototype['toPeriod'] = undefined;

/**
 * @member {Number} annualInterestRate
 */
PostFixedDepositProductsChartSlabs.prototype['annualInterestRate'] = undefined;






export default PostFixedDepositProductsChartSlabs;

