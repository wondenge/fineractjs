

import ApiClient from '../ApiClient';

/**
 * The PostOfficesResponse model module.
 * @module model/PostOfficesResponse
 * @version 1.0
 */
class PostOfficesResponse {
    /**
     * Constructs a new <code>PostOfficesResponse</code>.
     * PostOfficesResponse
     * @alias module:model/PostOfficesResponse
     */
    constructor() { 
        
        PostOfficesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostOfficesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostOfficesResponse} obj Optional instance to populate.
     * @return {module:model/PostOfficesResponse} The populated <code>PostOfficesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostOfficesResponse();

            if (data.hasOwnProperty('officeId')) {
                obj['officeId'] = ApiClient.convertToType(data['officeId'], 'Number');
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
PostOfficesResponse.prototype['officeId'] = undefined;

/**
 * @member {Number} resourceId
 */
PostOfficesResponse.prototype['resourceId'] = undefined;






export default PostOfficesResponse;

