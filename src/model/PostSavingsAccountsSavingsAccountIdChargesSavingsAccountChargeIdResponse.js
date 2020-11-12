

import ApiClient from '../ApiClient';

/**
 * The PostSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse model module.
 * @module model/PostSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse
 * @version 1.0
 */
class PostSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse {
    /**
     * Constructs a new <code>PostSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse</code>.
     * PostSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse
     * @alias module:model/PostSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse
     */
    constructor() { 
        
        PostSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse} obj Optional instance to populate.
     * @return {module:model/PostSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse} The populated <code>PostSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse();

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
PostSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse.prototype['officeId'] = undefined;

/**
 * @member {Number} clientId
 */
PostSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse.prototype['clientId'] = undefined;

/**
 * @member {Number} savingsId
 */
PostSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse.prototype['savingsId'] = undefined;

/**
 * @member {Number} resourceId
 */
PostSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse.prototype['resourceId'] = undefined;






export default PostSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse;

