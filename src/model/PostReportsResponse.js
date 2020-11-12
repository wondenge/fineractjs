  

import ApiClient from '../ApiClient';

/**
 * The PostReportsResponse model module.
 * @module model/PostReportsResponse
 * @version 1.0
 */
class PostReportsResponse {
    /**
     * Constructs a new <code>PostReportsResponse</code>.
     * PostReportsResponse
     * @alias module:model/PostReportsResponse
     */
    constructor() { 
        
        PostReportsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostReportsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostReportsResponse} obj Optional instance to populate.
     * @return {module:model/PostReportsResponse} The populated <code>PostReportsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostReportsResponse();

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
PostReportsResponse.prototype['resourceId'] = undefined;






export default PostReportsResponse;

