

import ApiClient from '../ApiClient';

/**
 * The GetProductsMarketPrice model module.
 * @module model/GetProductsMarketPrice
 * @version 1.0
 */
class GetProductsMarketPrice {
    /**
     * Constructs a new <code>GetProductsMarketPrice</code>.
     * @alias module:model/GetProductsMarketPrice
     */
    constructor() { 
        
        GetProductsMarketPrice.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetProductsMarketPrice</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetProductsMarketPrice} obj Optional instance to populate.
     * @return {module:model/GetProductsMarketPrice} The populated <code>GetProductsMarketPrice</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetProductsMarketPrice();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
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
 * @member {Number} id
 */
GetProductsMarketPrice.prototype['id'] = undefined;

/**
 * @member {String} fromDate
 */
GetProductsMarketPrice.prototype['fromDate'] = undefined;

/**
 * @member {Number} shareValue
 */
GetProductsMarketPrice.prototype['shareValue'] = undefined;






export default GetProductsMarketPrice;

