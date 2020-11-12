

import ApiClient from '../ApiClient';

/**
 * The PostTemplatesResponse model module.
 * @module model/PostTemplatesResponse
 * @version 1.0
 */
class PostTemplatesResponse {
    /**
     * Constructs a new <code>PostTemplatesResponse</code>.
     * PostTemplatesResponse
     * @alias module:model/PostTemplatesResponse
     */
    constructor() { 
        
        PostTemplatesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostTemplatesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostTemplatesResponse} obj Optional instance to populate.
     * @return {module:model/PostTemplatesResponse} The populated <code>PostTemplatesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostTemplatesResponse();

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
PostTemplatesResponse.prototype['resourceId'] = undefined;






export default PostTemplatesResponse;

