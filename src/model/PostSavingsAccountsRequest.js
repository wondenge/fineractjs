

import ApiClient from '../ApiClient';

/**
 * The PostSavingsAccountsRequest model module.
 * @module model/PostSavingsAccountsRequest
 * @version 1.0
 */
class PostSavingsAccountsRequest {
    /**
     * Constructs a new <code>PostSavingsAccountsRequest</code>.
     * PostSavingsAccountsRequest
     * @alias module:model/PostSavingsAccountsRequest
     */
    constructor() { 
        
        PostSavingsAccountsRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostSavingsAccountsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostSavingsAccountsRequest} obj Optional instance to populate.
     * @return {module:model/PostSavingsAccountsRequest} The populated <code>PostSavingsAccountsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostSavingsAccountsRequest();

            if (data.hasOwnProperty('clientId')) {
                obj['clientId'] = ApiClient.convertToType(data['clientId'], 'Number');
            }
            if (data.hasOwnProperty('productId')) {
                obj['productId'] = ApiClient.convertToType(data['productId'], 'Number');
            }
            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
            if (data.hasOwnProperty('dateFormat')) {
                obj['dateFormat'] = ApiClient.convertToType(data['dateFormat'], 'String');
            }
            if (data.hasOwnProperty('submittedOnDate')) {
                obj['submittedOnDate'] = ApiClient.convertToType(data['submittedOnDate'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} clientId
 */
PostSavingsAccountsRequest.prototype['clientId'] = undefined;

/**
 * @member {Number} productId
 */
PostSavingsAccountsRequest.prototype['productId'] = undefined;

/**
 * @member {String} locale
 */
PostSavingsAccountsRequest.prototype['locale'] = undefined;

/**
 * @member {String} dateFormat
 */
PostSavingsAccountsRequest.prototype['dateFormat'] = undefined;

/**
 * @member {String} submittedOnDate
 */
PostSavingsAccountsRequest.prototype['submittedOnDate'] = undefined;






export default PostSavingsAccountsRequest;

