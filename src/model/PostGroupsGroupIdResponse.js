

import ApiClient from '../ApiClient';

/**
 * The PostGroupsGroupIdResponse model module.
 * @module model/PostGroupsGroupIdResponse
 * @version 1.0
 */
class PostGroupsGroupIdResponse {
    /**
     * Constructs a new <code>PostGroupsGroupIdResponse</code>.
     * PostGroupsGroupIdResponse
     * @alias module:model/PostGroupsGroupIdResponse
     */
    constructor() { 
        
        PostGroupsGroupIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostGroupsGroupIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostGroupsGroupIdResponse} obj Optional instance to populate.
     * @return {module:model/PostGroupsGroupIdResponse} The populated <code>PostGroupsGroupIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostGroupsGroupIdResponse();

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
PostGroupsGroupIdResponse.prototype['resourceId'] = undefined;






export default PostGroupsGroupIdResponse;

