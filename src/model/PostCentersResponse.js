

import ApiClient from '../ApiClient';

/**
 * The PostCentersResponse model module.
 * @module model/PostCentersResponse
 * @version 1.0
 */
class PostCentersResponse {
    /**
     * Constructs a new <code>PostCentersResponse</code>.
     * PostCentersResponse
     * @alias module:model/PostCentersResponse
     */
    constructor() { 
        
        PostCentersResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostCentersResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostCentersResponse} obj Optional instance to populate.
     * @return {module:model/PostCentersResponse} The populated <code>PostCentersResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostCentersResponse();

            if (data.hasOwnProperty('officeId')) {
                obj['officeId'] = ApiClient.convertToType(data['officeId'], 'Number');
            }
            if (data.hasOwnProperty('groupId')) {
                obj['groupId'] = ApiClient.convertToType(data['groupId'], 'Number');
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
PostCentersResponse.prototype['officeId'] = undefined;

/**
 * @member {Number} groupId
 */
PostCentersResponse.prototype['groupId'] = undefined;

/**
 * @member {Number} resourceId
 */
PostCentersResponse.prototype['resourceId'] = undefined;






export default PostCentersResponse;

