

import ApiClient from '../ApiClient';

/**
 * The PostClientsResponse model module.
 * @module model/PostClientsResponse
 * @version 1.0
 */
class PostClientsResponse {
    /**
     * Constructs a new <code>PostClientsResponse</code>.
     * PostClientsResponse
     * @alias module:model/PostClientsResponse
     */
    constructor() { 
        
        PostClientsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostClientsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostClientsResponse} obj Optional instance to populate.
     * @return {module:model/PostClientsResponse} The populated <code>PostClientsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostClientsResponse();

            if (data.hasOwnProperty('officeId')) {
                obj['officeId'] = ApiClient.convertToType(data['officeId'], 'Number');
            }
            if (data.hasOwnProperty('groupId')) {
                obj['groupId'] = ApiClient.convertToType(data['groupId'], 'Number');
            }
            if (data.hasOwnProperty('clientId')) {
                obj['clientId'] = ApiClient.convertToType(data['clientId'], 'Number');
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
PostClientsResponse.prototype['officeId'] = undefined;

/**
 * @member {Number} groupId
 */
PostClientsResponse.prototype['groupId'] = undefined;

/**
 * @member {Number} clientId
 */
PostClientsResponse.prototype['clientId'] = undefined;

/**
 * @member {Number} resourceId
 */
PostClientsResponse.prototype['resourceId'] = undefined;






export default PostClientsResponse;

