

import ApiClient from '../ApiClient';

/**
 * The PostClientsClientIdIdentifiersRequest model module.
 * @module model/PostClientsClientIdIdentifiersRequest
 * @version 1.0
 */
class PostClientsClientIdIdentifiersRequest {
    /**
     * Constructs a new <code>PostClientsClientIdIdentifiersRequest</code>.
     * PostClientsClientIdIdentifiersRequest
     * @alias module:model/PostClientsClientIdIdentifiersRequest
     */
    constructor() { 
        
        PostClientsClientIdIdentifiersRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostClientsClientIdIdentifiersRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostClientsClientIdIdentifiersRequest} obj Optional instance to populate.
     * @return {module:model/PostClientsClientIdIdentifiersRequest} The populated <code>PostClientsClientIdIdentifiersRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostClientsClientIdIdentifiersRequest();

            if (data.hasOwnProperty('documentTypeId')) {
                obj['documentTypeId'] = ApiClient.convertToType(data['documentTypeId'], 'Number');
            }
            if (data.hasOwnProperty('documentKey')) {
                obj['documentKey'] = ApiClient.convertToType(data['documentKey'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} documentTypeId
 */
PostClientsClientIdIdentifiersRequest.prototype['documentTypeId'] = undefined;

/**
 * @member {String} documentKey
 */
PostClientsClientIdIdentifiersRequest.prototype['documentKey'] = undefined;

/**
 * @member {String} description
 */
PostClientsClientIdIdentifiersRequest.prototype['description'] = undefined;






export default PostClientsClientIdIdentifiersRequest;

