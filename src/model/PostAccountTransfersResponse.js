

import ApiClient from '../ApiClient';

/**
 * The PostAccountTransfersResponse model module.
 * @module model/PostAccountTransfersResponse
 * @version 1.0
 */
class PostAccountTransfersResponse {
    /**
     * Constructs a new <code>PostAccountTransfersResponse</code>.
     * PostAccountTransfersResponse
     * @alias module:model/PostAccountTransfersResponse
     */
    constructor() { 
        
        PostAccountTransfersResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostAccountTransfersResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostAccountTransfersResponse} obj Optional instance to populate.
     * @return {module:model/PostAccountTransfersResponse} The populated <code>PostAccountTransfersResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostAccountTransfersResponse();

            if (data.hasOwnProperty('savingsId')) {
                obj['savingsId'] = ApiClient.convertToType(data['savingsId'], 'Number');
            }
            if (data.hasOwnProperty('resourceId')) {
                obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} savingsId
 */
PostAccountTransfersResponse.prototype['savingsId'] = undefined;

/**
 * @member {Number} resourceId
 */
PostAccountTransfersResponse.prototype['resourceId'] = undefined;






export default PostAccountTransfersResponse;

