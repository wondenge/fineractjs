

import ApiClient from '../ApiClient';

/**
 * The PostProductsMarketPricePeriods model module.
 * @module model/PostProductsMarketPricePeriods
 * @version 1.0
 */
class PostProductsMarketPricePeriods {
    /**
     * Constructs a new <code>PostProductsMarketPricePeriods</code>.
     * @alias module:model/PostProductsMarketPricePeriods
     */
    constructor() { 
        
        PostProductsMarketPricePeriods.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostProductsMarketPricePeriods</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostProductsMarketPricePeriods} obj Optional instance to populate.
     * @return {module:model/PostProductsMarketPricePeriods} The populated <code>PostProductsMarketPricePeriods</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostProductsMarketPricePeriods();

            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
            if (data.hasOwnProperty('dateFormat')) {
                obj['dateFormat'] = ApiClient.convertToType(data['dateFormat'], 'String');
            }
            if (data.hasOwnProperty('fromDate')) {
                obj['fromDate'] = ApiClient.convertToType(data['fromDate'], 'String');
            }
            if (data.hasOwnProperty('shareValue')) {
                obj['shareValue'] = ApiClient.convertToType(data['shareValue'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} locale
 */
PostProductsMarketPricePeriods.prototype['locale'] = undefined;

/**
 * @member {String} dateFormat
 */
PostProductsMarketPricePeriods.prototype['dateFormat'] = undefined;

/**
 * @member {String} fromDate
 */
PostProductsMarketPricePeriods.prototype['fromDate'] = undefined;

/**
 * @member {Number} shareValue
 */
PostProductsMarketPricePeriods.prototype['shareValue'] = undefined;






export default PostProductsMarketPricePeriods;

