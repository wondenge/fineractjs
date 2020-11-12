

import ApiClient from '../ApiClient';

/**
 * The PutSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdRequest model module.
 * @module model/PutSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdRequest
 * @version 1.0
 */
class PutSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdRequest {
    /**
     * Constructs a new <code>PutSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdRequest</code>.
     * PutSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdRequest
     * @alias module:model/PutSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdRequest
     */
    constructor() { 
        
        PutSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdRequest} obj Optional instance to populate.
     * @return {module:model/PutSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdRequest} The populated <code>PutSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdRequest();

            if (data.hasOwnProperty('dateFormat')) {
                obj['dateFormat'] = ApiClient.convertToType(data['dateFormat'], 'String');
            }
            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('dueDate')) {
                obj['dueDate'] = ApiClient.convertToType(data['dueDate'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} dateFormat
 */
PutSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdRequest.prototype['dateFormat'] = undefined;

/**
 * @member {String} locale
 */
PutSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdRequest.prototype['locale'] = undefined;

/**
 * @member {Number} amount
 */
PutSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdRequest.prototype['amount'] = undefined;

/**
 * @member {String} dueDate
 */
PutSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdRequest.prototype['dueDate'] = undefined;






export default PutSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdRequest;

