

import ApiClient from '../ApiClient';

/**
 * The PostClientsClientIdRequest model module.
 * @module model/PostClientsClientIdRequest
 * @version 1.0
 */
class PostClientsClientIdRequest {
    /**
     * Constructs a new <code>PostClientsClientIdRequest</code>.
     * PostClientsClientIdRequest
     * @alias module:model/PostClientsClientIdRequest
     */
    constructor() { 
        
        PostClientsClientIdRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostClientsClientIdRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostClientsClientIdRequest} obj Optional instance to populate.
     * @return {module:model/PostClientsClientIdRequest} The populated <code>PostClientsClientIdRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostClientsClientIdRequest();

            if (data.hasOwnProperty('note')) {
                obj['note'] = ApiClient.convertToType(data['note'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} note
 */
PostClientsClientIdRequest.prototype['note'] = undefined;






export default PostClientsClientIdRequest;

