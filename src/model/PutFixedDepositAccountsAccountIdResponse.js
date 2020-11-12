

import ApiClient from '../ApiClient';
import PutFixedDepositAccountsChanges from './PutFixedDepositAccountsChanges';

/**
 * The PutFixedDepositAccountsAccountIdResponse model module.
 * @module model/PutFixedDepositAccountsAccountIdResponse
 * @version 1.0
 */
class PutFixedDepositAccountsAccountIdResponse {
    /**
     * Constructs a new <code>PutFixedDepositAccountsAccountIdResponse</code>.
     * PutFixedDepositAccountsAccountIdResponse
     * @alias module:model/PutFixedDepositAccountsAccountIdResponse
     */
    constructor() { 
        
        PutFixedDepositAccountsAccountIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutFixedDepositAccountsAccountIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutFixedDepositAccountsAccountIdResponse} obj Optional instance to populate.
     * @return {module:model/PutFixedDepositAccountsAccountIdResponse} The populated <code>PutFixedDepositAccountsAccountIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutFixedDepositAccountsAccountIdResponse();

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
            if (data.hasOwnProperty('changes')) {
                obj['changes'] = PutFixedDepositAccountsChanges.constructFromObject(data['changes']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} officeId
 */
PutFixedDepositAccountsAccountIdResponse.prototype['officeId'] = undefined;

/**
 * @member {Number} clientId
 */
PutFixedDepositAccountsAccountIdResponse.prototype['clientId'] = undefined;

/**
 * @member {Number} savingsId
 */
PutFixedDepositAccountsAccountIdResponse.prototype['savingsId'] = undefined;

/**
 * @member {Number} resourceId
 */
PutFixedDepositAccountsAccountIdResponse.prototype['resourceId'] = undefined;

/**
 * @member {module:model/PutFixedDepositAccountsChanges} changes
 */
PutFixedDepositAccountsAccountIdResponse.prototype['changes'] = undefined;






export default PutFixedDepositAccountsAccountIdResponse;

