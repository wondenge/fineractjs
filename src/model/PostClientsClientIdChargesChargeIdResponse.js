

import ApiClient from '../ApiClient';

/**
 * The PostClientsClientIdChargesChargeIdResponse model module.
 * @module model/PostClientsClientIdChargesChargeIdResponse
 * @version 1.0
 */
class PostClientsClientIdChargesChargeIdResponse {
    /**
     * Constructs a new <code>PostClientsClientIdChargesChargeIdResponse</code>.
     * PostClientsClientIdChargesChargeIdResponse
     * @alias module:model/PostClientsClientIdChargesChargeIdResponse
     */
    constructor() { 
        
        PostClientsClientIdChargesChargeIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostClientsClientIdChargesChargeIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostClientsClientIdChargesChargeIdResponse} obj Optional instance to populate.
     * @return {module:model/PostClientsClientIdChargesChargeIdResponse} The populated <code>PostClientsClientIdChargesChargeIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostClientsClientIdChargesChargeIdResponse();

            if (data.hasOwnProperty('officeId')) {
                obj['officeId'] = ApiClient.convertToType(data['officeId'], 'Number');
            }
            if (data.hasOwnProperty('clientId')) {
                obj['clientId'] = ApiClient.convertToType(data['clientId'], 'Number');
            }
            if (data.hasOwnProperty('resourceId')) {
                obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'Number');
            }
            if (data.hasOwnProperty('transactionId')) {
                obj['transactionId'] = ApiClient.convertToType(data['transactionId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} officeId
 */
PostClientsClientIdChargesChargeIdResponse.prototype['officeId'] = undefined;

/**
 * @member {Number} clientId
 */
PostClientsClientIdChargesChargeIdResponse.prototype['clientId'] = undefined;

/**
 * @member {Number} resourceId
 */
PostClientsClientIdChargesChargeIdResponse.prototype['resourceId'] = undefined;

/**
 * @member {Number} transactionId
 */
PostClientsClientIdChargesChargeIdResponse.prototype['transactionId'] = undefined;






export default PostClientsClientIdChargesChargeIdResponse;

