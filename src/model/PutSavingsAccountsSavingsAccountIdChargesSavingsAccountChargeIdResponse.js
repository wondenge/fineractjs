

import ApiClient from '../ApiClient';
import PutSavingsChanges from './PutSavingsChanges';

/**
 * The PutSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse model module.
 * @module model/PutSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse
 * @version 1.0
 */
class PutSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse {
    /**
     * Constructs a new <code>PutSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse</code>.
     * PutSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse
     * @alias module:model/PutSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse
     */
    constructor() { 
        
        PutSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse} obj Optional instance to populate.
     * @return {module:model/PutSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse} The populated <code>PutSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse();

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
                obj['changes'] = PutSavingsChanges.constructFromObject(data['changes']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} officeId
 */
PutSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse.prototype['officeId'] = undefined;

/**
 * @member {Number} clientId
 */
PutSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse.prototype['clientId'] = undefined;

/**
 * @member {Number} savingsId
 */
PutSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse.prototype['savingsId'] = undefined;

/**
 * @member {Number} resourceId
 */
PutSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse.prototype['resourceId'] = undefined;

/**
 * @member {module:model/PutSavingsChanges} changes
 */
PutSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse.prototype['changes'] = undefined;






export default PutSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse;

