

import ApiClient from '../ApiClient';

/**
 * The PostTaxesGroupResponse model module.
 * @module model/PostTaxesGroupResponse
 * @version 1.0
 */
class PostTaxesGroupResponse {
    /**
     * Constructs a new <code>PostTaxesGroupResponse</code>.
     * PostTaxesGroupResponse
     * @alias module:model/PostTaxesGroupResponse
     */
    constructor() { 
        
        PostTaxesGroupResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostTaxesGroupResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostTaxesGroupResponse} obj Optional instance to populate.
     * @return {module:model/PostTaxesGroupResponse} The populated <code>PostTaxesGroupResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostTaxesGroupResponse();

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
PostTaxesGroupResponse.prototype['resourceId'] = undefined;






export default PostTaxesGroupResponse;

