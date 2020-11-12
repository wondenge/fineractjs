

import ApiClient from '../ApiClient';
import PostRecurringDepositProductsChartSlabs from './PostRecurringDepositProductsChartSlabs';

/**
 * The PostRecurringDepositProductsCharts model module.
 * @module model/PostRecurringDepositProductsCharts
 * @version 1.0
 */
class PostRecurringDepositProductsCharts {
    /**
     * Constructs a new <code>PostRecurringDepositProductsCharts</code>.
     * @alias module:model/PostRecurringDepositProductsCharts
     */
    constructor() { 
        
        PostRecurringDepositProductsCharts.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostRecurringDepositProductsCharts</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostRecurringDepositProductsCharts} obj Optional instance to populate.
     * @return {module:model/PostRecurringDepositProductsCharts} The populated <code>PostRecurringDepositProductsCharts</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostRecurringDepositProductsCharts();

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
                obj['chartSlabs'] = ApiClient.convertToType(data['chartSlabs'], [PostRecurringDepositProductsChartSlabs]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} fromDate
 */
PostRecurringDepositProductsCharts.prototype['fromDate'] = undefined;

/**
 * @member {String} locale
 */
PostRecurringDepositProductsCharts.prototype['locale'] = undefined;

/**
 * @member {String} dateFormat
 */
PostRecurringDepositProductsCharts.prototype['dateFormat'] = undefined;

/**
 * @member {Array.<module:model/PostRecurringDepositProductsChartSlabs>} chartSlabs
 */
PostRecurringDepositProductsCharts.prototype['chartSlabs'] = undefined;






export default PostRecurringDepositProductsCharts;

