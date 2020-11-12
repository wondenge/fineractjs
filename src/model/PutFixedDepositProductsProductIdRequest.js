

import ApiClient from '../ApiClient';

/**
 * The PutFixedDepositProductsProductIdRequest model module.
 * @module model/PutFixedDepositProductsProductIdRequest
 * @version 1.0
 */
class PutFixedDepositProductsProductIdRequest {
    /**
     * Constructs a new <code>PutFixedDepositProductsProductIdRequest</code>.
     * PutFixedDepositProductsProductIdRequest
     * @alias module:model/PutFixedDepositProductsProductIdRequest
     */
    constructor() { 
        
        PutFixedDepositProductsProductIdRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutFixedDepositProductsProductIdRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutFixedDepositProductsProductIdRequest} obj Optional instance to populate.
     * @return {module:model/PutFixedDepositProductsProductIdRequest} The populated <code>PutFixedDepositProductsProductIdRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutFixedDepositProductsProductIdRequest();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
            if (data.hasOwnProperty('minDepositTerm')) {
                obj['minDepositTerm'] = ApiClient.convertToType(data['minDepositTerm'], 'Number');
            }
            if (data.hasOwnProperty('minDepositTermTypeId')) {
                obj['minDepositTermTypeId'] = ApiClient.convertToType(data['minDepositTermTypeId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} description
 */
PutFixedDepositProductsProductIdRequest.prototype['description'] = undefined;

/**
 * @member {String} locale
 */
PutFixedDepositProductsProductIdRequest.prototype['locale'] = undefined;

/**
 * @member {Number} minDepositTerm
 */
PutFixedDepositProductsProductIdRequest.prototype['minDepositTerm'] = undefined;

/**
 * @member {Number} minDepositTermTypeId
 */
PutFixedDepositProductsProductIdRequest.prototype['minDepositTermTypeId'] = undefined;






export default PutFixedDepositProductsProductIdRequest;

