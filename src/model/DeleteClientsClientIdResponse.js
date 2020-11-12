

import ApiClient from '../ApiClient';

/**
 * The DeleteClientsClientIdResponse model module.
 * @module model/DeleteClientsClientIdResponse
 * @version 1.0
 */
class DeleteClientsClientIdResponse {
    /**
     * Constructs a new <code>DeleteClientsClientIdResponse</code>.
     * DeleteClientsClientIdResponse
     * @alias module:model/DeleteClientsClientIdResponse
     */
    constructor() { 
        
        DeleteClientsClientIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeleteClientsClientIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteClientsClientIdResponse} obj Optional instance to populate.
     * @return {module:model/DeleteClientsClientIdResponse} The populated <code>DeleteClientsClientIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteClientsClientIdResponse();

            if (data.hasOwnProperty('officeId')) {
                obj['officeId'] = ApiClient.convertToType(data['officeId'], 'Number');
            }
            if (data.hasOwnProperty('clientId')) {
                obj['clientId'] = ApiClient.convertToType(data['clientId'], 'Number');
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
DeleteClientsClientIdResponse.prototype['officeId'] = undefined;

/**
 * @member {Number} clientId
 */
DeleteClientsClientIdResponse.prototype['clientId'] = undefined;

/**
 * @member {Number} resourceId
 */
DeleteClientsClientIdResponse.prototype['resourceId'] = undefined;






export default DeleteClientsClientIdResponse;

