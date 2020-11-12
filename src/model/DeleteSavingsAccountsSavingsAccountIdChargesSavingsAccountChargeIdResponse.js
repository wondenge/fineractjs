

import ApiClient from '../ApiClient';

/**
 * The DeleteSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse model module.
 * @module model/DeleteSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse
 * @version 1.0
 */
class DeleteSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse {
    /**
     * Constructs a new <code>DeleteSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse</code>.
     * DeleteSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse
     * @alias module:model/DeleteSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse
     */
    constructor() { 
        
        DeleteSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeleteSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse} obj Optional instance to populate.
     * @return {module:model/DeleteSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse} The populated <code>DeleteSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse();

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
DeleteSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse.prototype['officeId'] = undefined;

/**
 * @member {Number} clientId
 */
DeleteSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse.prototype['clientId'] = undefined;

/**
 * @member {Number} savingsId
 */
DeleteSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse.prototype['savingsId'] = undefined;

/**
 * @member {Number} resourceId
 */
DeleteSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse.prototype['resourceId'] = undefined;






export default DeleteSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse;

