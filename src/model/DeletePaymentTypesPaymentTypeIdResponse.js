

import ApiClient from '../ApiClient';

/**
 * The DeletePaymentTypesPaymentTypeIdResponse model module.
 * @module model/DeletePaymentTypesPaymentTypeIdResponse
 * @version 1.0
 */
class DeletePaymentTypesPaymentTypeIdResponse {
    /**
     * Constructs a new <code>DeletePaymentTypesPaymentTypeIdResponse</code>.
     * DeletePaymentTypesPaymentTypeIdResponse
     * @alias module:model/DeletePaymentTypesPaymentTypeIdResponse
     */
    constructor() { 
        
        DeletePaymentTypesPaymentTypeIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeletePaymentTypesPaymentTypeIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeletePaymentTypesPaymentTypeIdResponse} obj Optional instance to populate.
     * @return {module:model/DeletePaymentTypesPaymentTypeIdResponse} The populated <code>DeletePaymentTypesPaymentTypeIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeletePaymentTypesPaymentTypeIdResponse();

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
DeletePaymentTypesPaymentTypeIdResponse.prototype['resourceId'] = undefined;






export default DeletePaymentTypesPaymentTypeIdResponse;

