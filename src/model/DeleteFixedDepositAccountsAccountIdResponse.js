

import ApiClient from '../ApiClient';

/**
 * The DeleteFixedDepositAccountsAccountIdResponse model module.
 * @module model/DeleteFixedDepositAccountsAccountIdResponse
 * @version 1.0
 */
class DeleteFixedDepositAccountsAccountIdResponse {
    /**
     * Constructs a new <code>DeleteFixedDepositAccountsAccountIdResponse</code>.
     * DeleteFixedDepositAccountsAccountIdResponse
     * @alias module:model/DeleteFixedDepositAccountsAccountIdResponse
     */
    constructor() { 
        
        DeleteFixedDepositAccountsAccountIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeleteFixedDepositAccountsAccountIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteFixedDepositAccountsAccountIdResponse} obj Optional instance to populate.
     * @return {module:model/DeleteFixedDepositAccountsAccountIdResponse} The populated <code>DeleteFixedDepositAccountsAccountIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteFixedDepositAccountsAccountIdResponse();

            if (data.hasOwnProperty('officeId')) {
                obj['officeId'] = ApiClient.convertToType(data['officeId'], 'Number');
            }
            if (data.hasOwnProperty('clientId')) {
                obj['clientId'] = ApiClient.convertToType(data['clientId'], 'Number');
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
DeleteFixedDepositAccountsAccountIdResponse.prototype['officeId'] = undefined;

/**
 * @member {Number} clientId
 */
DeleteFixedDepositAccountsAccountIdResponse.prototype['clientId'] = undefined;

/**
 * @member {Number} resourceId
 */
DeleteFixedDepositAccountsAccountIdResponse.prototype['resourceId'] = undefined;






export default DeleteFixedDepositAccountsAccountIdResponse;

