

import ApiClient from '../ApiClient';

/**
 * The PutProductsTypeProductIdRequest model module.
 * @module model/PutProductsTypeProductIdRequest
 * @version 1.0
 */
class PutProductsTypeProductIdRequest {
    /**
     * Constructs a new <code>PutProductsTypeProductIdRequest</code>.
     * PutProductsTypeProductIdRequest
     * @alias module:model/PutProductsTypeProductIdRequest
     */
    constructor() { 
        
        PutProductsTypeProductIdRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutProductsTypeProductIdRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutProductsTypeProductIdRequest} obj Optional instance to populate.
     * @return {module:model/PutProductsTypeProductIdRequest} The populated <code>PutProductsTypeProductIdRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutProductsTypeProductIdRequest();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
            if (data.hasOwnProperty('unitPrice')) {
                obj['unitPrice'] = ApiClient.convertToType(data['unitPrice'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} description
 */
PutProductsTypeProductIdRequest.prototype['description'] = undefined;

/**
 * @member {String} locale
 */
PutProductsTypeProductIdRequest.prototype['locale'] = undefined;

/**
 * @member {Number} unitPrice
 */
PutProductsTypeProductIdRequest.prototype['unitPrice'] = undefined;






export default PutProductsTypeProductIdRequest;

