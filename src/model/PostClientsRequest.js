

import ApiClient from '../ApiClient';

/**
 * The PostClientsRequest model module.
 * @module model/PostClientsRequest
 * @version 1.0
 */
class PostClientsRequest {
    /**
     * Constructs a new <code>PostClientsRequest</code>.
     * PostClientsRequest
     * @alias module:model/PostClientsRequest
     */
    constructor() { 
        
        PostClientsRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostClientsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostClientsRequest} obj Optional instance to populate.
     * @return {module:model/PostClientsRequest} The populated <code>PostClientsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostClientsRequest();

            if (data.hasOwnProperty('officeId')) {
                obj['officeId'] = ApiClient.convertToType(data['officeId'], 'Number');
            }
            if (data.hasOwnProperty('fullname')) {
                obj['fullname'] = ApiClient.convertToType(data['fullname'], 'String');
            }
            if (data.hasOwnProperty('groupId')) {
                obj['groupId'] = ApiClient.convertToType(data['groupId'], 'Number');
            }
            if (data.hasOwnProperty('dateFormat')) {
                obj['dateFormat'] = ApiClient.convertToType(data['dateFormat'], 'String');
            }
            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('activationDate')) {
                obj['activationDate'] = ApiClient.convertToType(data['activationDate'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} officeId
 */
PostClientsRequest.prototype['officeId'] = undefined;

/**
 * @member {String} fullname
 */
PostClientsRequest.prototype['fullname'] = undefined;

/**
 * @member {Number} groupId
 */
PostClientsRequest.prototype['groupId'] = undefined;

/**
 * @member {String} dateFormat
 */
PostClientsRequest.prototype['dateFormat'] = undefined;

/**
 * @member {String} locale
 */
PostClientsRequest.prototype['locale'] = undefined;

/**
 * @member {Boolean} active
 */
PostClientsRequest.prototype['active'] = undefined;

/**
 * @member {String} activationDate
 */
PostClientsRequest.prototype['activationDate'] = undefined;






export default PostClientsRequest;

