

import ApiClient from '../ApiClient';

/**
 * The PostClientsClientIdChargesRequest model module.
 * @module model/PostClientsClientIdChargesRequest
 * @version 1.0
 */
class PostClientsClientIdChargesRequest {
    /**
     * Constructs a new <code>PostClientsClientIdChargesRequest</code>.
     * PostClientsClientIdChargesRequest
     * @alias module:model/PostClientsClientIdChargesRequest
     */
    constructor() { 
        
        PostClientsClientIdChargesRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostClientsClientIdChargesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostClientsClientIdChargesRequest} obj Optional instance to populate.
     * @return {module:model/PostClientsClientIdChargesRequest} The populated <code>PostClientsClientIdChargesRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostClientsClientIdChargesRequest();

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('chargeId')) {
                obj['chargeId'] = ApiClient.convertToType(data['chargeId'], 'Number');
            }
            if (data.hasOwnProperty('dateFormat')) {
                obj['dateFormat'] = ApiClient.convertToType(data['dateFormat'], 'String');
            }
            if (data.hasOwnProperty('dueDate')) {
                obj['dueDate'] = ApiClient.convertToType(data['dueDate'], 'String');
            }
            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} amount
 */
PostClientsClientIdChargesRequest.prototype['amount'] = undefined;

/**
 * @member {Number} chargeId
 */
PostClientsClientIdChargesRequest.prototype['chargeId'] = undefined;

/**
 * @member {String} dateFormat
 */
PostClientsClientIdChargesRequest.prototype['dateFormat'] = undefined;

/**
 * @member {String} dueDate
 */
PostClientsClientIdChargesRequest.prototype['dueDate'] = undefined;

/**
 * @member {String} locale
 */
PostClientsClientIdChargesRequest.prototype['locale'] = undefined;






export default PostClientsClientIdChargesRequest;

