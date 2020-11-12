

import ApiClient from '../ApiClient';

/**
 * The DeleteFixedDepositProductsProductIdResponse model module.
 * @module model/DeleteFixedDepositProductsProductIdResponse
 * @version 1.0
 */
class DeleteFixedDepositProductsProductIdResponse {
    /**
     * Constructs a new <code>DeleteFixedDepositProductsProductIdResponse</code>.
     * DeleteFixedDepositProductsProductIdResponse
     * @alias module:model/DeleteFixedDepositProductsProductIdResponse
     */
    constructor() { 
        
        DeleteFixedDepositProductsProductIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeleteFixedDepositProductsProductIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteFixedDepositProductsProductIdResponse} obj Optional instance to populate.
     * @return {module:model/DeleteFixedDepositProductsProductIdResponse} The populated <code>DeleteFixedDepositProductsProductIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteFixedDepositProductsProductIdResponse();

            if (data.hasOwnProperty('resourceId')) {
                obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} resourceId
 */
DeleteFixedDepositProductsProductIdResponse.prototype['resourceId'] = undefined;






export default DeleteFixedDepositProductsProductIdResponse;

