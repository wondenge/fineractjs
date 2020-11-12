

import ApiClient from '../ApiClient';
import PostFixedDepositProductsChartSlabs from './PostFixedDepositProductsChartSlabs';

/**
 * The PostFixedDepositProductsCharts model module.
 * @module model/PostFixedDepositProductsCharts
 * @version 1.0
 */
class PostFixedDepositProductsCharts {
    /**
     * Constructs a new <code>PostFixedDepositProductsCharts</code>.
     * @alias module:model/PostFixedDepositProductsCharts
     */
    constructor() { 
        
        PostFixedDepositProductsCharts.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostFixedDepositProductsCharts</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostFixedDepositProductsCharts} obj Optional instance to populate.
     * @return {module:model/PostFixedDepositProductsCharts} The populated <code>PostFixedDepositProductsCharts</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostFixedDepositProductsCharts();

            if (data.hasOwnProperty('fromDate')) {
                obj['fromDate'] = ApiClient.convertToType(data['fromDate'], 'String');
            }
            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
            if (data.hasOwnProperty('dateFormat')) {
                obj['dateFormat'] = ApiClient.convertToType(data['dateFormat'], 'String');
            }
            if (data.hasOwnProperty('chartSlabs')) {
                obj['chartSlabs'] = ApiClient.convertToType(data['chartSlabs'], [PostFixedDepositProductsChartSlabs]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} fromDate
 */
PostFixedDepositProductsCharts.prototype['fromDate'] = undefined;

/**
 * @member {String} locale
 */
PostFixedDepositProductsCharts.prototype['locale'] = undefined;

/**
 * @member {String} dateFormat
 */
PostFixedDepositProductsCharts.prototype['dateFormat'] = undefined;

/**
 * @member {Array.<module:model/PostFixedDepositProductsChartSlabs>} chartSlabs
 */
PostFixedDepositProductsCharts.prototype['chartSlabs'] = undefined;






export default PostFixedDepositProductsCharts;

