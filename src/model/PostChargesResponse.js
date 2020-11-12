

import ApiClient from '../ApiClient';

/**
 * The PostChargesResponse model module.
 * @module model/PostChargesResponse
 * @version 1.0
 */
class PostChargesResponse {
    /**
     * Constructs a new <code>PostChargesResponse</code>.
     * PostChargesResponse
     * @alias module:model/PostChargesResponse
     */
    constructor() { 
        
        PostChargesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostChargesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostChargesResponse} obj Optional instance to populate.
     * @return {module:model/PostChargesResponse} The populated <code>PostChargesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostChargesResponse();

            if (data.hasOwnProperty('resourceId')) {
                obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} resourceId
 */
PostChargesResponse.prototype['resourceId'] = undefined;






export default PostChargesResponse;

