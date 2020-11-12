

import ApiClient from '../ApiClient';

/**
 * The PostGroupsResponse model module.
 * @module model/PostGroupsResponse
 * @version 1.0
 */
class PostGroupsResponse {
    /**
     * Constructs a new <code>PostGroupsResponse</code>.
     * PostGroupsResponse
     * @alias module:model/PostGroupsResponse
     */
    constructor() { 
        
        PostGroupsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostGroupsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostGroupsResponse} obj Optional instance to populate.
     * @return {module:model/PostGroupsResponse} The populated <code>PostGroupsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostGroupsResponse();

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
PostGroupsResponse.prototype['officeId'] = undefined;

/**
 * @member {Number} groupId
 */
PostGroupsResponse.prototype['groupId'] = undefined;

/**
 * @member {Number} resourceId
 */
PostGroupsResponse.prototype['resourceId'] = undefined;






export default PostGroupsResponse;

