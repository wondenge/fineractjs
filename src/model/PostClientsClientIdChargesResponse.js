

import ApiClient from '../ApiClient';

/**
 * The PostClientsClientIdChargesResponse model module.
 * @module model/PostClientsClientIdChargesResponse
 * @version 1.0
 */
class PostClientsClientIdChargesResponse {
    /**
     * Constructs a new <code>PostClientsClientIdChargesResponse</code>.
     * PostClientsClientIdChargesResponse
     * @alias module:model/PostClientsClientIdChargesResponse
     */
    constructor() { 
        
        PostClientsClientIdChargesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostClientsClientIdChargesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostClientsClientIdChargesResponse} obj Optional instance to populate.
     * @return {module:model/PostClientsClientIdChargesResponse} The populated <code>PostClientsClientIdChargesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostClientsClientIdChargesResponse();

            if (data.hasOwnProperty('officeId')) {
                obj['officeId'] = ApiClient.convertToType(data['officeId'], 'Number');
            }
            if (data.hasOwnProperty('chargeId')) {
                obj['chargeId'] = ApiClient.convertToType(data['chargeId'], 'Number');
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
PostClientsClientIdChargesResponse.prototype['officeId'] = undefined;

/**
 * @member {Number} chargeId
 */
PostClientsClientIdChargesResponse.prototype['chargeId'] = undefined;

/**
 * @member {Number} resourceId
 */
PostClientsClientIdChargesResponse.prototype['resourceId'] = undefined;






export default PostClientsClientIdChargesResponse;

