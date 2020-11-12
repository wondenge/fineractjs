

import ApiClient from '../ApiClient';

/**
 * The PostGroupsGroupIdCommandUnassignStaffResponse model module.
 * @module model/PostGroupsGroupIdCommandUnassignStaffResponse
 * @version 1.0
 */
class PostGroupsGroupIdCommandUnassignStaffResponse {
    /**
     * Constructs a new <code>PostGroupsGroupIdCommandUnassignStaffResponse</code>.
     * PostGroupsGroupIdCommandUnassignStaffResponse
     * @alias module:model/PostGroupsGroupIdCommandUnassignStaffResponse
     */
    constructor() { 
        
        PostGroupsGroupIdCommandUnassignStaffResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostGroupsGroupIdCommandUnassignStaffResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostGroupsGroupIdCommandUnassignStaffResponse} obj Optional instance to populate.
     * @return {module:model/PostGroupsGroupIdCommandUnassignStaffResponse} The populated <code>PostGroupsGroupIdCommandUnassignStaffResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostGroupsGroupIdCommandUnassignStaffResponse();

            if (data.hasOwnProperty('officeId')) {
                obj['officeId'] = ApiClient.convertToType(data['officeId'], 'Number');
            }
            if (data.hasOwnProperty('groupId')) {
                obj['groupId'] = ApiClient.convertToType(data['groupId'], 'Number');
            }
            if (data.hasOwnProperty('resourceId')) {
                obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'Number');
            }
            if (data.hasOwnProperty('changes')) {
                obj['changes'] = ApiClient.convertToType(data['changes'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} officeId
 */
PostGroupsGroupIdCommandUnassignStaffResponse.prototype['officeId'] = undefined;

/**
 * @member {Number} groupId
 */
PostGroupsGroupIdCommandUnassignStaffResponse.prototype['groupId'] = undefined;

/**
 * @member {Number} resourceId
 */
PostGroupsGroupIdCommandUnassignStaffResponse.prototype['resourceId'] = undefined;

/**
 * @member {Object} changes
 */
PostGroupsGroupIdCommandUnassignStaffResponse.prototype['changes'] = undefined;






export default PostGroupsGroupIdCommandUnassignStaffResponse;

