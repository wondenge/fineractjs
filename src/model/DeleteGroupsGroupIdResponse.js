

import ApiClient from '../ApiClient';

/**
 * The DeleteGroupsGroupIdResponse model module.
 * @module model/DeleteGroupsGroupIdResponse
 * @version 1.0
 */
class DeleteGroupsGroupIdResponse {
    /**
     * Constructs a new <code>DeleteGroupsGroupIdResponse</code>.
     * DeleteGroupsGroupIdResponse
     * @alias module:model/DeleteGroupsGroupIdResponse
     */
    constructor() { 
        
        DeleteGroupsGroupIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeleteGroupsGroupIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteGroupsGroupIdResponse} obj Optional instance to populate.
     * @return {module:model/DeleteGroupsGroupIdResponse} The populated <code>DeleteGroupsGroupIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteGroupsGroupIdResponse();

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
DeleteGroupsGroupIdResponse.prototype['officeId'] = undefined;

/**
 * @member {Number} groupId
 */
DeleteGroupsGroupIdResponse.prototype['groupId'] = undefined;

/**
 * @member {Number} resourceId
 */
DeleteGroupsGroupIdResponse.prototype['resourceId'] = undefined;






export default DeleteGroupsGroupIdResponse;

