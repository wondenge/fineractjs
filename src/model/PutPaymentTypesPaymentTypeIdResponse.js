

import ApiClient from '../ApiClient';

/**
 * The PutPaymentTypesPaymentTypeIdResponse model module.
 * @module model/PutPaymentTypesPaymentTypeIdResponse
 * @version 1.0
 */
class PutPaymentTypesPaymentTypeIdResponse {
    /**
     * Constructs a new <code>PutPaymentTypesPaymentTypeIdResponse</code>.
     * PutPaymentTypesPaymentTypeIdResponse
     * @alias module:model/PutPaymentTypesPaymentTypeIdResponse
     */
    constructor() { 
        
        PutPaymentTypesPaymentTypeIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutPaymentTypesPaymentTypeIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutPaymentTypesPaymentTypeIdResponse} obj Optional instance to populate.
     * @return {module:model/PutPaymentTypesPaymentTypeIdResponse} The populated <code>PutPaymentTypesPaymentTypeIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutPaymentTypesPaymentTypeIdResponse();

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
PutPaymentTypesPaymentTypeIdResponse.prototype['resourceId'] = undefined;






export default PutPaymentTypesPaymentTypeIdResponse;

