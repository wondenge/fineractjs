

import ApiClient from '../ApiClient';

/**
 * The PostRolesRequest model module.
 * @module model/PostRolesRequest
 * @version 1.0
 */
class PostRolesRequest {
    /**
     * Constructs a new <code>PostRolesRequest</code>.
     * PostRolesRequest
     * @alias module:model/PostRolesRequest
     */
    constructor() { 
        
        PostRolesRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostRolesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostRolesRequest} obj Optional instance to populate.
     * @return {module:model/PostRolesRequest} The populated <code>PostRolesRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostRolesRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
PostRolesRequest.prototype['name'] = undefined;

/**
 * @member {String} description
 */
PostRolesRequest.prototype['description'] = undefined;






export default PostRolesRequest;

