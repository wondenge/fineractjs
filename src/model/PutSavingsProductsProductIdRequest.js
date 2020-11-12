

import ApiClient from '../ApiClient';

/**
 * The PutSavingsProductsProductIdRequest model module.
 * @module model/PutSavingsProductsProductIdRequest
 * @version 1.0
 */
class PutSavingsProductsProductIdRequest {
    /**
     * Constructs a new <code>PutSavingsProductsProductIdRequest</code>.
     * PutSavingsProductsProductIdRequest
     * @alias module:model/PutSavingsProductsProductIdRequest
     */
    constructor() { 
        
        PutSavingsProductsProductIdRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutSavingsProductsProductIdRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutSavingsProductsProductIdRequest} obj Optional instance to populate.
     * @return {module:model/PutSavingsProductsProductIdRequest} The populated <code>PutSavingsProductsProductIdRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutSavingsProductsProductIdRequest();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
            if (data.hasOwnProperty('interestRate')) {
                obj['interestRate'] = ApiClient.convertToType(data['interestRate'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} description
 */
PutSavingsProductsProductIdRequest.prototype['description'] = undefined;

/**
 * @member {String} locale
 */
PutSavingsProductsProductIdRequest.prototype['locale'] = undefined;

/**
 * @member {Number} interestRate
 */
PutSavingsProductsProductIdRequest.prototype['interestRate'] = undefined;






export default PutSavingsProductsProductIdRequest;

