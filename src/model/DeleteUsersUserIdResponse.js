

import ApiClient from '../ApiClient';

/**
 * The DeleteUsersUserIdResponse model module.
 * @module model/DeleteUsersUserIdResponse
 * @version 1.0
 */
class DeleteUsersUserIdResponse {
    /**
     * Constructs a new <code>DeleteUsersUserIdResponse</code>.
     * DeleteUsersUserIdResponse
     * @alias module:model/DeleteUsersUserIdResponse
     */
    constructor() { 
        
        DeleteUsersUserIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeleteUsersUserIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteUsersUserIdResponse} obj Optional instance to populate.
     * @return {module:model/DeleteUsersUserIdResponse} The populated <code>DeleteUsersUserIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteUsersUserIdResponse();

            if (data.hasOwnProperty('officeId')) {
                obj['officeId'] = ApiClient.convertToType(data['officeId'], 'Number');
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
DeleteUsersUserIdResponse.prototype['officeId'] = undefined;

/**
 * @member {Number} resourceId
 */
DeleteUsersUserIdResponse.prototype['resourceId'] = undefined;

/**
 * @member {Object} changes
 */
DeleteUsersUserIdResponse.prototype['changes'] = undefined;






export default DeleteUsersUserIdResponse;

