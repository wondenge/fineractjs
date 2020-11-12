  

import ApiClient from '../ApiClient';

/**
 * The DeleteSavingsAccountsAccountIdResponse model module.
 * @module model/DeleteSavingsAccountsAccountIdResponse
 * @version 1.0
 */
class DeleteSavingsAccountsAccountIdResponse {
    /**
     * Constructs a new <code>DeleteSavingsAccountsAccountIdResponse</code>.
     * DeleteSavingsAccountsAccountIdResponse
     * @alias module:model/DeleteSavingsAccountsAccountIdResponse
     */
    constructor() { 
        
        DeleteSavingsAccountsAccountIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeleteSavingsAccountsAccountIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteSavingsAccountsAccountIdResponse} obj Optional instance to populate.
     * @return {module:model/DeleteSavingsAccountsAccountIdResponse} The populated <code>DeleteSavingsAccountsAccountIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteSavingsAccountsAccountIdResponse();

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
DeleteSavingsAccountsAccountIdResponse.prototype['officeId'] = undefined;

/**
 * @member {Number} clientId
 */
DeleteSavingsAccountsAccountIdResponse.prototype['clientId'] = undefined;

/**
 * @member {Number} resourceId
 */
DeleteSavingsAccountsAccountIdResponse.prototype['resourceId'] = undefined;






export default DeleteSavingsAccountsAccountIdResponse;

