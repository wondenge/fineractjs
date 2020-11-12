

import ApiClient from '../ApiClient';

/**
 * The PostTaxesComponentsResponse model module.
 * @module model/PostTaxesComponentsResponse
 * @version 1.0
 */
class PostTaxesComponentsResponse {
    /**
     * Constructs a new <code>PostTaxesComponentsResponse</code>.
     * PostTaxesComponentsResponse
     * @alias module:model/PostTaxesComponentsResponse
     */
    constructor() { 
        
        PostTaxesComponentsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostTaxesComponentsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostTaxesComponentsResponse} obj Optional instance to populate.
     * @return {module:model/PostTaxesComponentsResponse} The populated <code>PostTaxesComponentsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostTaxesComponentsResponse();

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
PostTaxesComponentsResponse.prototype['resourceId'] = undefined;






export default PostTaxesComponentsResponse;

