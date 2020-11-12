

import ApiClient from '../ApiClient';

/**
 * The PostGroupsRequest model module.
 * @module model/PostGroupsRequest
 * @version 1.0
 */
class PostGroupsRequest {
    /**
     * Constructs a new <code>PostGroupsRequest</code>.
     * PostGroupsRequest
     * @alias module:model/PostGroupsRequest
     */
    constructor() { 
        
        PostGroupsRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostGroupsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostGroupsRequest} obj Optional instance to populate.
     * @return {module:model/PostGroupsRequest} The populated <code>PostGroupsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostGroupsRequest();

            if (data.hasOwnProperty('officeId')) {
                obj['officeId'] = ApiClient.convertToType(data['officeId'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} officeId
 */
PostGroupsRequest.prototype['officeId'] = undefined;

/**
 * @member {String} name
 */
PostGroupsRequest.prototype['name'] = undefined;

/**
 * @member {Boolean} active
 */
PostGroupsRequest.prototype['active'] = undefined;






export default PostGroupsRequest;

