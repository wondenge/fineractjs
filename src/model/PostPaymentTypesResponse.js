

import ApiClient from '../ApiClient';

/**
 * The PostPaymentTypesResponse model module.
 * @module model/PostPaymentTypesResponse
 * @version 1.0
 */
class PostPaymentTypesResponse {
    /**
     * Constructs a new <code>PostPaymentTypesResponse</code>.
     * PostPaymentTypesResponse
     * @alias module:model/PostPaymentTypesResponse
     */
    constructor() { 
        
        PostPaymentTypesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostPaymentTypesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostPaymentTypesResponse} obj Optional instance to populate.
     * @return {module:model/PostPaymentTypesResponse} The populated <code>PostPaymentTypesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostPaymentTypesResponse();

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
PostPaymentTypesResponse.prototype['resourceId'] = undefined;






export default PostPaymentTypesResponse;

