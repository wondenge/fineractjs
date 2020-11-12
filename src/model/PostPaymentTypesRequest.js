

import ApiClient from '../ApiClient';

/**
 * The PostPaymentTypesRequest model module.
 * @module model/PostPaymentTypesRequest
 * @version 1.0
 */
class PostPaymentTypesRequest {
    /**
     * Constructs a new <code>PostPaymentTypesRequest</code>.
     * PostPaymentTypesRequest
     * @alias module:model/PostPaymentTypesRequest
     */
    constructor() { 
        
        PostPaymentTypesRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostPaymentTypesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostPaymentTypesRequest} obj Optional instance to populate.
     * @return {module:model/PostPaymentTypesRequest} The populated <code>PostPaymentTypesRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostPaymentTypesRequest();

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
PostPaymentTypesRequest.prototype['name'] = undefined;

/**
 * @member {String} description
 */
PostPaymentTypesRequest.prototype['description'] = undefined;

/**
 * @member {Boolean} isCashPayment
 */
PostPaymentTypesRequest.prototype['isCashPayment'] = undefined;

/**
 * @member {Number} position
 */
PostPaymentTypesRequest.prototype['position'] = undefined;






export default PostPaymentTypesRequest;

