

import ApiClient from '../ApiClient';

/**
 * The PutPaymentTypesPaymentTypeIdRequest model module.
 * @module model/PutPaymentTypesPaymentTypeIdRequest
 * @version 1.0
 */
class PutPaymentTypesPaymentTypeIdRequest {
    /**
     * Constructs a new <code>PutPaymentTypesPaymentTypeIdRequest</code>.
     * PutPaymentTypesPaymentTypeIdRequest
     * @alias module:model/PutPaymentTypesPaymentTypeIdRequest
     */
    constructor() { 
        
        PutPaymentTypesPaymentTypeIdRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutPaymentTypesPaymentTypeIdRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutPaymentTypesPaymentTypeIdRequest} obj Optional instance to populate.
     * @return {module:model/PutPaymentTypesPaymentTypeIdRequest} The populated <code>PutPaymentTypesPaymentTypeIdRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutPaymentTypesPaymentTypeIdRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('isCashPayment')) {
                obj['isCashPayment'] = ApiClient.convertToType(data['isCashPayment'], 'Boolean');
            }
            if (data.hasOwnProperty('position')) {
                obj['position'] = ApiClient.convertToType(data['position'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
PutPaymentTypesPaymentTypeIdRequest.prototype['name'] = undefined;

/**
 * @member {String} description
 */
PutPaymentTypesPaymentTypeIdRequest.prototype['description'] = undefined;

/**
 * @member {Boolean} isCashPayment
 */
PutPaymentTypesPaymentTypeIdRequest.prototype['isCashPayment'] = undefined;

/**
 * @member {Number} position
 */
PutPaymentTypesPaymentTypeIdRequest.prototype['position'] = undefined;






export default PutPaymentTypesPaymentTypeIdRequest;

