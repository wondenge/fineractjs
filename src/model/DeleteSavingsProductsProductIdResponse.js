

import ApiClient from '../ApiClient';

/**
 * The DeleteSavingsProductsProductIdResponse model module.
 * @module model/DeleteSavingsProductsProductIdResponse
 * @version 1.0
 */
class DeleteSavingsProductsProductIdResponse {
    /**
     * Constructs a new <code>DeleteSavingsProductsProductIdResponse</code>.
     * DeleteSavingsProductsProductIdResponse
     * @alias module:model/DeleteSavingsProductsProductIdResponse
     */
    constructor() { 
        
        DeleteSavingsProductsProductIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeleteSavingsProductsProductIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteSavingsProductsProductIdResponse} obj Optional instance to populate.
     * @return {module:model/DeleteSavingsProductsProductIdResponse} The populated <code>DeleteSavingsProductsProductIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteSavingsProductsProductIdResponse();

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
DeleteSavingsProductsProductIdResponse.prototype['resourceId'] = undefined;






export default DeleteSavingsProductsProductIdResponse;

