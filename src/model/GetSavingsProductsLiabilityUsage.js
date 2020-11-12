

import ApiClient from '../ApiClient';

/**
 * The GetSavingsProductsLiabilityUsage model module.
 * @module model/GetSavingsProductsLiabilityUsage
 * @version 1.0
 */
class GetSavingsProductsLiabilityUsage {
    /**
     * Constructs a new <code>GetSavingsProductsLiabilityUsage</code>.
     * @alias module:model/GetSavingsProductsLiabilityUsage
     */
    constructor() { 
        
        GetSavingsProductsLiabilityUsage.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSavingsProductsLiabilityUsage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSavingsProductsLiabilityUsage} obj Optional instance to populate.
     * @return {module:model/GetSavingsProductsLiabilityUsage} The populated <code>GetSavingsProductsLiabilityUsage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSavingsProductsLiabilityUsage();

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
GetSavingsProductsLiabilityUsage.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetSavingsProductsLiabilityUsage.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetSavingsProductsLiabilityUsage.prototype['description'] = undefined;






export default GetSavingsProductsLiabilityUsage;

