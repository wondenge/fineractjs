

import ApiClient from '../ApiClient';

/**
 * The PostFixedDepositAccountsResponse model module.
 * @module model/PostFixedDepositAccountsResponse
 * @version 1.0
 */
class PostFixedDepositAccountsResponse {
    /**
     * Constructs a new <code>PostFixedDepositAccountsResponse</code>.
     * PostFixedDepositAccountsResponse
     * @alias module:model/PostFixedDepositAccountsResponse
     */
    constructor() { 
        
        PostFixedDepositAccountsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostFixedDepositAccountsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostFixedDepositAccountsResponse} obj Optional instance to populate.
     * @return {module:model/PostFixedDepositAccountsResponse} The populated <code>PostFixedDepositAccountsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostFixedDepositAccountsResponse();

            if (data.hasOwnProperty('officeId')) {
                obj['officeId'] = ApiClient.convertToType(data['officeId'], 'Number');
            }
            if (data.hasOwnProperty('clientId')) {
                obj['clientId'] = ApiClient.convertToType(data['clientId'], 'Number');
            }
            if (data.hasOwnProperty('savingsId')) {
                obj['savingsId'] = ApiClient.convertToType(data['savingsId'], 'Number');
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
PostFixedDepositAccountsResponse.prototype['officeId'] = undefined;

/**
 * @member {Number} clientId
 */
PostFixedDepositAccountsResponse.prototype['clientId'] = undefined;

/**
 * @member {Number} savingsId
 */
PostFixedDepositAccountsResponse.prototype['savingsId'] = undefined;

/**
 * @member {Number} resourceId
 */
PostFixedDepositAccountsResponse.prototype['resourceId'] = undefined;






export default PostFixedDepositAccountsResponse;

