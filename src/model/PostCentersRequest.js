

import ApiClient from '../ApiClient';

/**
 * The PostCentersRequest model module.
 * @module model/PostCentersRequest
 * @version 1.0
 */
class PostCentersRequest {
    /**
     * Constructs a new <code>PostCentersRequest</code>.
     * PostCentersRequest
     * @alias module:model/PostCentersRequest
     */
    constructor() { 
        
        PostCentersRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostCentersRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostCentersRequest} obj Optional instance to populate.
     * @return {module:model/PostCentersRequest} The populated <code>PostCentersRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostCentersRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('officeId')) {
                obj['officeId'] = ApiClient.convertToType(data['officeId'], 'Number');
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
PostCentersRequest.prototype['name'] = undefined;

/**
 * @member {Number} officeId
 */
PostCentersRequest.prototype['officeId'] = undefined;

/**
 * @member {Boolean} active
 */
PostCentersRequest.prototype['active'] = undefined;






export default PostCentersRequest;

