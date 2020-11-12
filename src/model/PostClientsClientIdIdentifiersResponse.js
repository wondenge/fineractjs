

import ApiClient from '../ApiClient';

/**
 * The PostClientsClientIdIdentifiersResponse model module.
 * @module model/PostClientsClientIdIdentifiersResponse
 * @version 1.0
 */
class PostClientsClientIdIdentifiersResponse {
    /**
     * Constructs a new <code>PostClientsClientIdIdentifiersResponse</code>.
     * PostClientsClientIdIdentifiersResponse
     * @alias module:model/PostClientsClientIdIdentifiersResponse
     */
    constructor() { 
        
        PostClientsClientIdIdentifiersResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostClientsClientIdIdentifiersResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostClientsClientIdIdentifiersResponse} obj Optional instance to populate.
     * @return {module:model/PostClientsClientIdIdentifiersResponse} The populated <code>PostClientsClientIdIdentifiersResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostClientsClientIdIdentifiersResponse();

            if (data.hasOwnProperty('officeId')) {
                obj['officeId'] = ApiClient.convertToType(data['officeId'], 'Number');
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
PostClientsClientIdIdentifiersResponse.prototype['officeId'] = undefined;

/**
 * @member {Number} clientId
 */
PostClientsClientIdIdentifiersResponse.prototype['clientId'] = undefined;

/**
 * @member {Number} resourceId
 */
PostClientsClientIdIdentifiersResponse.prototype['resourceId'] = undefined;






export default PostClientsClientIdIdentifiersResponse;

