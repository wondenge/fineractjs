

import ApiClient from '../ApiClient';

/**
 * The GetSavingsProductsChargeAppliesTo model module.
 * @module model/GetSavingsProductsChargeAppliesTo
 * @version 1.0
 */
class GetSavingsProductsChargeAppliesTo {
    /**
     * Constructs a new <code>GetSavingsProductsChargeAppliesTo</code>.
     * @alias module:model/GetSavingsProductsChargeAppliesTo
     */
    constructor() { 
        
        GetSavingsProductsChargeAppliesTo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSavingsProductsChargeAppliesTo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSavingsProductsChargeAppliesTo} obj Optional instance to populate.
     * @return {module:model/GetSavingsProductsChargeAppliesTo} The populated <code>GetSavingsProductsChargeAppliesTo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSavingsProductsChargeAppliesTo();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} code
 */
GetSavingsProductsChargeAppliesTo.prototype['code'] = undefined;

/**
 * @member {Number} id
 */
GetSavingsProductsChargeAppliesTo.prototype['id'] = undefined;

/**
 * @member {String} description
 */
GetSavingsProductsChargeAppliesTo.prototype['description'] = undefined;






export default GetSavingsProductsChargeAppliesTo;

