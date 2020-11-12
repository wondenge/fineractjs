

import ApiClient from '../ApiClient';

/**
 * The PostGroupsGroupIdCommandUnassignStaffRequest model module.
 * @module model/PostGroupsGroupIdCommandUnassignStaffRequest
 * @version 1.0
 */
class PostGroupsGroupIdCommandUnassignStaffRequest {
    /**
     * Constructs a new <code>PostGroupsGroupIdCommandUnassignStaffRequest</code>.
     * PostGroupsGroupIdCommandUnassignStaffRequest
     * @alias module:model/PostGroupsGroupIdCommandUnassignStaffRequest
     */
    constructor() { 
        
        PostGroupsGroupIdCommandUnassignStaffRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostGroupsGroupIdCommandUnassignStaffRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostGroupsGroupIdCommandUnassignStaffRequest} obj Optional instance to populate.
     * @return {module:model/PostGroupsGroupIdCommandUnassignStaffRequest} The populated <code>PostGroupsGroupIdCommandUnassignStaffRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostGroupsGroupIdCommandUnassignStaffRequest();

            if (data.hasOwnProperty('staffId')) {
                obj['staffId'] = ApiClient.convertToType(data['staffId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} staffId
 */
PostGroupsGroupIdCommandUnassignStaffRequest.prototype['staffId'] = undefined;






export default PostGroupsGroupIdCommandUnassignStaffRequest;

