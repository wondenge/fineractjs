

import ApiClient from '../ApiClient';

/**
 * The DeleteRecurringDepositAccountsResponse model module.
 * @module model/DeleteRecurringDepositAccountsResponse
 * @version 1.0
 */
class DeleteRecurringDepositAccountsResponse {
    /**
     * Constructs a new <code>DeleteRecurringDepositAccountsResponse</code>.
     * DeleteRecurringDepositAccountsResponse
     * @alias module:model/DeleteRecurringDepositAccountsResponse
     */
    constructor() { 
        
        DeleteRecurringDepositAccountsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeleteRecurringDepositAccountsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteRecurringDepositAccountsResponse} obj Optional instance to populate.
     * @return {module:model/DeleteRecurringDepositAccountsResponse} The populated <code>DeleteRecurringDepositAccountsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteRecurringDepositAccountsResponse();

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
DeleteRecurringDepositAccountsResponse.prototype['officeId'] = undefined;

/**
 * @member {Number} clientId
 */
DeleteRecurringDepositAccountsResponse.prototype['clientId'] = undefined;

/**
 * @member {Number} resourceId
 */
DeleteRecurringDepositAccountsResponse.prototype['resourceId'] = undefined;






export default DeleteRecurringDepositAccountsResponse;

