

import ApiClient from '../ApiClient';

/**
 * The PostTellersResponse model module.
 * @module model/PostTellersResponse
 * @version 1.0
 */
class PostTellersResponse {
    /**
     * Constructs a new <code>PostTellersResponse</code>.
     * PostTellersResponse
     * @alias module:model/PostTellersResponse
     */
    constructor() { 
        
        PostTellersResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostTellersResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostTellersResponse} obj Optional instance to populate.
     * @return {module:model/PostTellersResponse} The populated <code>PostTellersResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostTellersResponse();

            if (data.hasOwnProperty('officeId')) {
                obj['officeId'] = ApiClient.convertToType(data['officeId'], 'Number');
            }
            if (data.hasOwnProperty('resourceId')) {
                obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} officeId
 */
PostTellersResponse.prototype['officeId'] = undefined;

/**
 * @member {Number} resourceId
 */
PostTellersResponse.prototype['resourceId'] = undefined;






export default PostTellersResponse;

