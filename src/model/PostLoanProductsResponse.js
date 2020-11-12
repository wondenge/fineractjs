

import ApiClient from '../ApiClient';

/**
 * The PostLoanProductsResponse model module.
 * @module model/PostLoanProductsResponse
 * @version 1.0
 */
class PostLoanProductsResponse {
    /**
     * Constructs a new <code>PostLoanProductsResponse</code>.
     * PostLoanProductsResponse
     * @alias module:model/PostLoanProductsResponse
     */
    constructor() { 
        
        PostLoanProductsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostLoanProductsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostLoanProductsResponse} obj Optional instance to populate.
     * @return {module:model/PostLoanProductsResponse} The populated <code>PostLoanProductsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostLoanProductsResponse();

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
PostLoanProductsResponse.prototype['resourceId'] = undefined;






export default PostLoanProductsResponse;

