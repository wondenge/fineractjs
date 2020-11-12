

import ApiClient from '../ApiClient';

/**
 * The GetProductsPageItems model module.
 * @module model/GetProductsPageItems
 * @version 1.0
 */
class GetProductsPageItems {
    /**
     * Constructs a new <code>GetProductsPageItems</code>.
     * @alias module:model/GetProductsPageItems
     */
    constructor() { 
        
        GetProductsPageItems.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetProductsPageItems</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetProductsPageItems} obj Optional instance to populate.
     * @return {module:model/GetProductsPageItems} The populated <code>GetProductsPageItems</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetProductsPageItems();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('shortName')) {
                obj['shortName'] = ApiClient.convertToType(data['shortName'], 'String');
            }
            if (data.hasOwnProperty('totalShares')) {
                obj['totalShares'] = ApiClient.convertToType(data['totalShares'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetProductsPageItems.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetProductsPageItems.prototype['name'] = undefined;

/**
 * @member {String} shortName
 */
GetProductsPageItems.prototype['shortName'] = undefined;

/**
 * @member {Number} totalShares
 */
GetProductsPageItems.prototype['totalShares'] = undefined;






export default GetProductsPageItems;

