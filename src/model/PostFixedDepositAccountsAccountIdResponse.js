

import ApiClient from '../ApiClient';

/**
 * The PostFixedDepositAccountsAccountIdResponse model module.
 * @module model/PostFixedDepositAccountsAccountIdResponse
 * @version 1.0
 */
class PostFixedDepositAccountsAccountIdResponse {
    /**
     * Constructs a new <code>PostFixedDepositAccountsAccountIdResponse</code>.
     * PostFixedDepositAccountsAccountIdResponse
     * @alias module:model/PostFixedDepositAccountsAccountIdResponse
     */
    constructor() { 
        
        PostFixedDepositAccountsAccountIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostFixedDepositAccountsAccountIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostFixedDepositAccountsAccountIdResponse} obj Optional instance to populate.
     * @return {module:model/PostFixedDepositAccountsAccountIdResponse} The populated <code>PostFixedDepositAccountsAccountIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostFixedDepositAccountsAccountIdResponse();

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
PostFixedDepositAccountsAccountIdResponse.prototype['officeId'] = undefined;

/**
 * @member {Number} clientId
 */
PostFixedDepositAccountsAccountIdResponse.prototype['clientId'] = undefined;

/**
 * @member {Number} savingsId
 */
PostFixedDepositAccountsAccountIdResponse.prototype['savingsId'] = undefined;

/**
 * @member {Number} resourceId
 */
PostFixedDepositAccountsAccountIdResponse.prototype['resourceId'] = undefined;






export default PostFixedDepositAccountsAccountIdResponse;

