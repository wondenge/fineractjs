

import ApiClient from '../ApiClient';
import PutSavingsAccountsChanges from './PutSavingsAccountsChanges';

/**
 * The PutSavingsAccountsAccountIdResponse model module.
 * @module model/PutSavingsAccountsAccountIdResponse
 * @version 1.0
 */
class PutSavingsAccountsAccountIdResponse {
    /**
     * Constructs a new <code>PutSavingsAccountsAccountIdResponse</code>.
     * PutSavingsAccountsAccountIdResponse
     * @alias module:model/PutSavingsAccountsAccountIdResponse
     */
    constructor() { 
        
        PutSavingsAccountsAccountIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutSavingsAccountsAccountIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutSavingsAccountsAccountIdResponse} obj Optional instance to populate.
     * @return {module:model/PutSavingsAccountsAccountIdResponse} The populated <code>PutSavingsAccountsAccountIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutSavingsAccountsAccountIdResponse();

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
                obj['changes'] = PutSavingsAccountsChanges.constructFromObject(data['changes']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} officeId
 */
PutSavingsAccountsAccountIdResponse.prototype['officeId'] = undefined;

/**
 * @member {Number} clientId
 */
PutSavingsAccountsAccountIdResponse.prototype['clientId'] = undefined;

/**
 * @member {Number} savingsId
 */
PutSavingsAccountsAccountIdResponse.prototype['savingsId'] = undefined;

/**
 * @member {Number} resourceId
 */
PutSavingsAccountsAccountIdResponse.prototype['resourceId'] = undefined;

/**
 * @member {module:model/PutSavingsAccountsChanges} changes
 */
PutSavingsAccountsAccountIdResponse.prototype['changes'] = undefined;






export default PutSavingsAccountsAccountIdResponse;

