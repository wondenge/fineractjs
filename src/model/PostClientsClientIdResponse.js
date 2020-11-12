

import ApiClient from '../ApiClient';

/**
 * The PostClientsClientIdResponse model module.
 * @module model/PostClientsClientIdResponse
 * @version 1.0
 */
class PostClientsClientIdResponse {
    /**
     * Constructs a new <code>PostClientsClientIdResponse</code>.
     * PostClientsClientIdResponse
     * @alias module:model/PostClientsClientIdResponse
     */
    constructor() { 
        
        PostClientsClientIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostClientsClientIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostClientsClientIdResponse} obj Optional instance to populate.
     * @return {module:model/PostClientsClientIdResponse} The populated <code>PostClientsClientIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostClientsClientIdResponse();

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
 * @member {Number} clientId
 */
PostClientsClientIdResponse.prototype['clientId'] = undefined;

/**
 * @member {Number} resourceId
 */
PostClientsClientIdResponse.prototype['resourceId'] = undefined;






export default PostClientsClientIdResponse;

