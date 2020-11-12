

import ApiClient from '../ApiClient';

/**
 * The GetProductsLiabilityUsage model module.
 * @module model/GetProductsLiabilityUsage
 * @version 1.0
 */
class GetProductsLiabilityUsage {
    /**
     * Constructs a new <code>GetProductsLiabilityUsage</code>.
     * @alias module:model/GetProductsLiabilityUsage
     */
    constructor() { 
        
        GetProductsLiabilityUsage.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetProductsLiabilityUsage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetProductsLiabilityUsage} obj Optional instance to populate.
     * @return {module:model/GetProductsLiabilityUsage} The populated <code>GetProductsLiabilityUsage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetProductsLiabilityUsage();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetProductsLiabilityUsage.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetProductsLiabilityUsage.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetProductsLiabilityUsage.prototype['description'] = undefined;






export default GetProductsLiabilityUsage;

