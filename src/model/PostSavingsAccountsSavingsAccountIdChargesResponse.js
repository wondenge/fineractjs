

import ApiClient from '../ApiClient';

/**
 * The PostSavingsAccountsSavingsAccountIdChargesResponse model module.
 * @module model/PostSavingsAccountsSavingsAccountIdChargesResponse
 * @version 1.0
 */
class PostSavingsAccountsSavingsAccountIdChargesResponse {
    /**
     * Constructs a new <code>PostSavingsAccountsSavingsAccountIdChargesResponse</code>.
     * PostSavingsAccountsSavingsAccountIdChargesResponse
     * @alias module:model/PostSavingsAccountsSavingsAccountIdChargesResponse
     */
    constructor() { 
        
        PostSavingsAccountsSavingsAccountIdChargesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostSavingsAccountsSavingsAccountIdChargesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostSavingsAccountsSavingsAccountIdChargesResponse} obj Optional instance to populate.
     * @return {module:model/PostSavingsAccountsSavingsAccountIdChargesResponse} The populated <code>PostSavingsAccountsSavingsAccountIdChargesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostSavingsAccountsSavingsAccountIdChargesResponse();

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
PostSavingsAccountsSavingsAccountIdChargesResponse.prototype['officeId'] = undefined;

/**
 * @member {Number} clientId
 */
PostSavingsAccountsSavingsAccountIdChargesResponse.prototype['clientId'] = undefined;

/**
 * @member {Number} savingsId
 */
PostSavingsAccountsSavingsAccountIdChargesResponse.prototype['savingsId'] = undefined;

/**
 * @member {Number} resourceId
 */
PostSavingsAccountsSavingsAccountIdChargesResponse.prototype['resourceId'] = undefined;






export default PostSavingsAccountsSavingsAccountIdChargesResponse;

