

import ApiClient from '../ApiClient';

/**
 * The PostAccountNumberFormatsResponse model module.
 * @module model/PostAccountNumberFormatsResponse
 * @version 1.0
 */
class PostAccountNumberFormatsResponse {
    /**
     * Constructs a new <code>PostAccountNumberFormatsResponse</code>.
     * PostAccountNumberFormatsResponse
     * @alias module:model/PostAccountNumberFormatsResponse
     */
    constructor() { 
        
        PostAccountNumberFormatsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostAccountNumberFormatsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostAccountNumberFormatsResponse} obj Optional instance to populate.
     * @return {module:model/PostAccountNumberFormatsResponse} The populated <code>PostAccountNumberFormatsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostAccountNumberFormatsResponse();

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
PostAccountNumberFormatsResponse.prototype['resourceId'] = undefined;






export default PostAccountNumberFormatsResponse;

