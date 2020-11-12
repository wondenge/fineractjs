

import ApiClient from '../ApiClient';

/**
 * The PostSavingsAccountsSavingsAccountIdChargesRequest model module.
 * @module model/PostSavingsAccountsSavingsAccountIdChargesRequest
 * @version 1.0
 */
class PostSavingsAccountsSavingsAccountIdChargesRequest {
    /**
     * Constructs a new <code>PostSavingsAccountsSavingsAccountIdChargesRequest</code>.
     * PostSavingsAccountsSavingsAccountIdChargesRequest
     * @alias module:model/PostSavingsAccountsSavingsAccountIdChargesRequest
     */
    constructor() { 
        
        PostSavingsAccountsSavingsAccountIdChargesRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostSavingsAccountsSavingsAccountIdChargesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostSavingsAccountsSavingsAccountIdChargesRequest} obj Optional instance to populate.
     * @return {module:model/PostSavingsAccountsSavingsAccountIdChargesRequest} The populated <code>PostSavingsAccountsSavingsAccountIdChargesRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostSavingsAccountsSavingsAccountIdChargesRequest();

            if (data.hasOwnProperty('chargeId')) {
                obj['chargeId'] = ApiClient.convertToType(data['chargeId'], 'Number');
            }
            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('dateFormat')) {
                obj['dateFormat'] = ApiClient.convertToType(data['dateFormat'], 'String');
            }
            if (data.hasOwnProperty('dueDate')) {
                obj['dueDate'] = ApiClient.convertToType(data['dueDate'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} chargeId
 */
PostSavingsAccountsSavingsAccountIdChargesRequest.prototype['chargeId'] = undefined;

/**
 * @member {String} locale
 */
PostSavingsAccountsSavingsAccountIdChargesRequest.prototype['locale'] = undefined;

/**
 * @member {Number} amount
 */
PostSavingsAccountsSavingsAccountIdChargesRequest.prototype['amount'] = undefined;

/**
 * @member {String} dateFormat
 */
PostSavingsAccountsSavingsAccountIdChargesRequest.prototype['dateFormat'] = undefined;

/**
 * @member {String} dueDate
 */
PostSavingsAccountsSavingsAccountIdChargesRequest.prototype['dueDate'] = undefined;






export default PostSavingsAccountsSavingsAccountIdChargesRequest;

