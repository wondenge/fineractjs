

import ApiClient from '../ApiClient';

/**
 * The GetLoanProductsLiabilityTagId model module.
 * @module model/GetLoanProductsLiabilityTagId
 * @version 1.0
 */
class GetLoanProductsLiabilityTagId {
    /**
     * Constructs a new <code>GetLoanProductsLiabilityTagId</code>.
     * @alias module:model/GetLoanProductsLiabilityTagId
     */
    constructor() { 
        
        GetLoanProductsLiabilityTagId.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoanProductsLiabilityTagId</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoanProductsLiabilityTagId} obj Optional instance to populate.
     * @return {module:model/GetLoanProductsLiabilityTagId} The populated <code>GetLoanProductsLiabilityTagId</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoanProductsLiabilityTagId();

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
GetLoanProductsLiabilityTagId.prototype['id'] = undefined;






export default GetLoanProductsLiabilityTagId;

