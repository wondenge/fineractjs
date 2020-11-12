

import ApiClient from '../ApiClient';

/**
 * The PostSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdRequest model module.
 * @module model/PostSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdRequest
 * @version 1.0
 */
class PostSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdRequest {
    /**
     * Constructs a new <code>PostSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdRequest</code>.
     * PostSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdRequest
     * @alias module:model/PostSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdRequest
     */
    constructor() { 
        
        PostSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdRequest} obj Optional instance to populate.
     * @return {module:model/PostSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdRequest} The populated <code>PostSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdRequest();

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
PostSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdRequest.prototype['dateFormat'] = undefined;

/**
 * @member {String} locale
 */
PostSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdRequest.prototype['locale'] = undefined;

/**
 * @member {Number} amount
 */
PostSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdRequest.prototype['amount'] = undefined;

/**
 * @member {String} dueDate
 */
PostSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdRequest.prototype['dueDate'] = undefined;






export default PostSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdRequest;

