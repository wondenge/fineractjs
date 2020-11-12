

import ApiClient from '../ApiClient';

/**
 * The PostFinancialActivityAccountsResponse model module.
 * @module model/PostFinancialActivityAccountsResponse
 * @version 1.0
 */
class PostFinancialActivityAccountsResponse {
    /**
     * Constructs a new <code>PostFinancialActivityAccountsResponse</code>.
     * PostFinancialActivityAccountsResponse
     * @alias module:model/PostFinancialActivityAccountsResponse
     */
    constructor() { 
        
        PostFinancialActivityAccountsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostFinancialActivityAccountsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostFinancialActivityAccountsResponse} obj Optional instance to populate.
     * @return {module:model/PostFinancialActivityAccountsResponse} The populated <code>PostFinancialActivityAccountsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostFinancialActivityAccountsResponse();

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
PostFinancialActivityAccountsResponse.prototype['resourceId'] = undefined;






export default PostFinancialActivityAccountsResponse;

