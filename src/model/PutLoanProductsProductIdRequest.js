

import ApiClient from '../ApiClient';

/**
 * The PutLoanProductsProductIdRequest model module.
 * @module model/PutLoanProductsProductIdRequest
 * @version 1.0
 */
class PutLoanProductsProductIdRequest {
    /**
     * Constructs a new <code>PutLoanProductsProductIdRequest</code>.
     * PutLoanProductsProductIdRequest
     * @alias module:model/PutLoanProductsProductIdRequest
     */
    constructor() { 
        
        PutLoanProductsProductIdRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutLoanProductsProductIdRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutLoanProductsProductIdRequest} obj Optional instance to populate.
     * @return {module:model/PutLoanProductsProductIdRequest} The populated <code>PutLoanProductsProductIdRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutLoanProductsProductIdRequest();

            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
            if (data.hasOwnProperty('principal')) {
                obj['principal'] = ApiClient.convertToType(data['principal'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} locale
 */
PutLoanProductsProductIdRequest.prototype['locale'] = undefined;

/**
 * @member {Number} principal
 */
PutLoanProductsProductIdRequest.prototype['principal'] = undefined;






export default PutLoanProductsProductIdRequest;

