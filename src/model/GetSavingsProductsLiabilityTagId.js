

import ApiClient from '../ApiClient';

/**
 * The GetSavingsProductsLiabilityTagId model module.
 * @module model/GetSavingsProductsLiabilityTagId
 * @version 1.0
 */
class GetSavingsProductsLiabilityTagId {
    /**
     * Constructs a new <code>GetSavingsProductsLiabilityTagId</code>.
     * @alias module:model/GetSavingsProductsLiabilityTagId
     */
    constructor() { 
        
        GetSavingsProductsLiabilityTagId.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSavingsProductsLiabilityTagId</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSavingsProductsLiabilityTagId} obj Optional instance to populate.
     * @return {module:model/GetSavingsProductsLiabilityTagId} The populated <code>GetSavingsProductsLiabilityTagId</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSavingsProductsLiabilityTagId();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetSavingsProductsLiabilityTagId.prototype['id'] = undefined;






export default GetSavingsProductsLiabilityTagId;

