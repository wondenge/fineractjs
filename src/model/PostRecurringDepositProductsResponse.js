

import ApiClient from '../ApiClient';

/**
 * The PostRecurringDepositProductsResponse model module.
 * @module model/PostRecurringDepositProductsResponse
 * @version 1.0
 */
class PostRecurringDepositProductsResponse {
    /**
     * Constructs a new <code>PostRecurringDepositProductsResponse</code>.
     * PostRecurringDepositProductsResponse
     * @alias module:model/PostRecurringDepositProductsResponse
     */
    constructor() { 
        
        PostRecurringDepositProductsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostRecurringDepositProductsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostRecurringDepositProductsResponse} obj Optional instance to populate.
     * @return {module:model/PostRecurringDepositProductsResponse} The populated <code>PostRecurringDepositProductsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostRecurringDepositProductsResponse();

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
PostRecurringDepositProductsResponse.prototype['resourceId'] = undefined;






export default PostRecurringDepositProductsResponse;

