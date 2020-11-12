

import ApiClient from '../ApiClient';

/**
 * The PostFinancialActivityAccountsRequest model module.
 * @module model/PostFinancialActivityAccountsRequest
 * @version 1.0
 */
class PostFinancialActivityAccountsRequest {
    /**
     * Constructs a new <code>PostFinancialActivityAccountsRequest</code>.
     * PostFinancialActivityAccountsRequest
     * @alias module:model/PostFinancialActivityAccountsRequest
     */
    constructor() { 
        
        PostFinancialActivityAccountsRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostFinancialActivityAccountsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostFinancialActivityAccountsRequest} obj Optional instance to populate.
     * @return {module:model/PostFinancialActivityAccountsRequest} The populated <code>PostFinancialActivityAccountsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostFinancialActivityAccountsRequest();

            if (data.hasOwnProperty('financialActivityId')) {
                obj['financialActivityId'] = ApiClient.convertToType(data['financialActivityId'], 'Number');
            }
            if (data.hasOwnProperty('glAccountId')) {
                obj['glAccountId'] = ApiClient.convertToType(data['glAccountId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} financialActivityId
 */
PostFinancialActivityAccountsRequest.prototype['financialActivityId'] = undefined;

/**
 * @member {Number} glAccountId
 */
PostFinancialActivityAccountsRequest.prototype['glAccountId'] = undefined;






export default PostFinancialActivityAccountsRequest;

